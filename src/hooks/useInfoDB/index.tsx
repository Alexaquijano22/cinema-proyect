import { useContext, useState } from "react";
import { AuthContext } from "../../context/Auth";
import { mapToArray } from "../../helpers";
import { Data, Item, Video } from "../../types";
import { apiFirebase, apiMoviesDB } from "../../utils";

const useInfoDB = () => {

    const [information, setInformation] = useState<Data>()
    const [itemsFb, setItemsFb] = useState<Item[]>([]);
    const [item, setItem] = useState<Item>();
    const [videosItem, setVideosItem] = useState<Video[]>();
    const { state, dispatch } = useContext(AuthContext)

    const getMoviesDB = async (page: string | null) => {
        try {
            const response = await apiMoviesDB.get(`/movie/top_rated?page=${Number(page === null ? "1" : page)}`)
            setInformation(response.data)
        } catch (e) {
            console.log(e);
        }
    }

    const getItemsFb = async () => {
        try {
            const response = await apiFirebase.get(`/items.json`)
            setItemsFb(mapToArray(response.data))
            return mapToArray(response.data)
        } catch (e) {
            console.log(e);
        }
    }

    const getItem = async (id: string) => {
        try {
            const listFb = await getItemsFb();
            const filterFb = listFb?.find((item: Item) => item.idDB === id)
            let responseDB;
            if (filterFb) {
                const responseFirebase = await apiFirebase.get(`/items/${id}.json`)
                setItem(responseFirebase.data)
            } else {
                responseDB = await apiMoviesDB(`/movie/${id}`).then((response) => {
                    setItem(response.data)
                }).catch(async (e) => {
                    if (e.response.data.status_message === "The resource you requested could not be found.") {
                        responseDB = await apiMoviesDB(`/tv/${id}`)
                        setItem(responseDB.data)
                    }
                })
            }
        } catch (e) {
            console.log(e);
        }
    }


    const getItemVideos = async (type: string | undefined, id: number | undefined) => {
        let response;
        try {
            if (type) {
                response = await apiMoviesDB.get(`/${type}/${id}/videos`)
                setVideosItem(response.data.results)
            } else {
                response = await apiMoviesDB.get(`/movie/${id}/videos`).then((response) => {
                    setVideosItem(response.data.results)
                }).catch(async (e) => {
                    if (e.response.data.status_message === "The resource you requested could not be found.") {
                        response = await apiMoviesDB(`/tv/${id}/videos`)
                        setVideosItem(response.data.results)
                    }
                    
                })
            }
        } catch (e) {
            console.log(e);
        }
    }

    const getMoviesFb = async () => {
        try {
            const response = await getItemsFb();
            const filterMovies = response?.filter((item: Item) => item.media_type === 'movie')
            if (filterMovies) setItemsFb(filterMovies)
        } catch (e) {
            console.log(e);
        }
    }

    const getSeriesFb = async () => {
        try {
            const response = await getItemsFb();
            const filterSeries = response?.filter((item: Item) => item.media_type === 'tv')
            if (filterSeries) setItemsFb(filterSeries)
        } catch (e) {
            console.log(e);
        }
    }


    const addItemFb = async (data: Item) => {
        try {
            await apiFirebase.post("/items.json", !data.media_type ? { ...data, media_type: "movie" } : data);
            await getItemsFb()
        } catch (e) {
            console.log(e);
        }
    }


    const deleteItemFb = async (id: number | undefined) => {
        try {
            const listMovies = await getItemsFb();
            const filterItem = listMovies?.find((item: Item) => item.id === id);
            await apiFirebase.delete(`/items/${filterItem.idDB}.json`);
            await getItemsFb()
        } catch (e) {
            console.log(e);
        }
    }

    const getConsultMultiSearch = async (search: string | null, page: string | null) => {
        try {
            const response = await apiMoviesDB.get(`search/multi?query=${search}&page=${page}`)
            setInformation(response.data)
        } catch (e) {
            console.log(e);
        }
    }

    const isItemInFb = (id: number | undefined): boolean | undefined => {
        const filterItem = itemsFb?.find((item: Item) => item.id === id);
        if (filterItem) {
            return true
        }
    }

    const addToItemsViewed = async (idUser: string | undefined, idItem: string | undefined) => {
        try {
            state.userLogged.viewed?.push(`${idItem}`)
            await apiFirebase.patch(`/users/${idUser}.json`, { viewed: state.userLogged?.viewed })
            await getItemsFb();
        } catch (e) {
            console.log(e)
        }
    }

    const deleteToItemsViewed = async (idUser: string | undefined, idItem: string | undefined) => {
        try {
            const indexId = state.userLogged.viewed?.indexOf(`${idItem}`)
            if (indexId) state.userLogged.viewed?.splice(indexId, 1)
            await apiFirebase.patch(`/users/${idUser}.json`, { viewed: state.userLogged?.viewed })
            await getItemsFb();
        } catch (e) {
            console.log(e)
        }
    }

    const isItemViewed = (id: string) => {
        return state.userLogged.viewed?.includes(id)
    }

    return { information, itemsFb, item, videosItem, getItemVideos, getItem, getMoviesDB, getConsultMultiSearch, addItemFb, deleteItemFb, isItemInFb, getItemsFb, isItemViewed, addToItemsViewed, deleteToItemsViewed, getMoviesFb, getSeriesFb }
}

export { useInfoDB }