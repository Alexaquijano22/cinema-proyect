import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/Auth";
import { mapToArray } from "../../helpers";
import { Data, Item, Video } from "../../types";
import { apiFirebase, apiMoviesDB } from "../../utils";

const useInfoDB = () => {

    const [information, setInformation] = useState<Data>()
    const [itemsFb, setItemsFb] = useState<Item[]>([]);
    const [itemFb, setItemFb] = useState<Item>();
    const [videosItem, setVideosItem] = useState<Video[]>();
    const {state, dispatch} = useContext(AuthContext)

    useEffect(() => {
      getItemsFb()
    }, [])
    
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

    const getItemFb = async (id: string) => {
        try {
            const response = await apiFirebase.get(`/items/${id}.json`)
            setItemFb(response.data)
            return response.data
        } catch (e) {
            console.log(e);
        }
    }

    const getItemVideos = async (type: string | undefined, id: number | undefined) => {
        try {
            const response = await apiMoviesDB.get(`/${type}/${id}/videos`)
            setVideosItem(response.data.results)
        } catch (e) {
            console.log(e);
        }
    }   

    const getMoviesFb = async () => {
        try {
            const response = await getItemsFb();
            const filterMovies = response?.filter((item: Item) => item.media_type === 'movie')
            if(filterMovies) setItemsFb(filterMovies)
        } catch (e) {
            console.log(e);
        }
    }

    const getSeriesFb = async () => {
        try {
            const response = await getItemsFb();
            const filterSeries = response?.filter((item: Item) => item.media_type === 'tv')
            if(filterSeries) setItemsFb(filterSeries)
        } catch (e) {
            console.log(e);
        }
    }


    const addItemFb = async (data: Item) => {
        try {
            await apiFirebase.post("/items.json", !data.media_type ? {...data, media_type: "movie"} : data);
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

    const addToItemsViewed = async (idUser: string | undefined, idItem: number | undefined) => {
        try {
            state.userLogged.viewed?.push(`${idItem}`)
            await apiFirebase.patch(`/users/${idUser}.json`, { viewed: state.userLogged?.viewed })
            await getItemsFb();
        } catch (e) {
            console.log(e)
        }
    }

    const deleteToItemsViewed = async (idUser: string | undefined, idItem: number | undefined) => {
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

    return { information, itemsFb, itemFb, videosItem, getItemVideos, getItemFb, getMoviesDB, getConsultMultiSearch, addItemFb, deleteItemFb, isItemInFb, getItemsFb, isItemViewed, addToItemsViewed, deleteToItemsViewed, getMoviesFb, getSeriesFb}
}

export { useInfoDB }