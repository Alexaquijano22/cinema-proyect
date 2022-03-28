import { useEffect, useState } from "react";
import { mapToArray } from "../../helpers";
import { Data, Item } from "../../types";
import { apiFirebase, apiMoviesDB } from "../../utils";

const useInfoDB = () => {

    const [information, setInformation] = useState<Data>()
    const [itemsFb, setItemsFb] = useState<Item[]>([]);

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

    const getSeriesFb = async (page: string | null) => {
        try {
            const response = await apiMoviesDB.get(`/series.json`)
        } catch (e) {
            console.log(e);
        }
    }


    const addItemFb = async (data: Item) => {
        try {
            const response = await apiFirebase.post("/items.json", !data.media_type ? {...data, media_type: "movie"} : data);
            await getItemsFb()
        } catch (e) {
            console.log(e);
        }
    }


    const deleteItemFb = async (id: number | undefined) => {
        try {
            const listMovies = await getItemsFb();
            const filterItem = listMovies?.find((item: Item) => item.id === id);
            const response = await apiFirebase.delete(`/items/${filterItem.idDB}.json`);
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

    return { information, itemsFb, getMoviesDB, getConsultMultiSearch, addItemFb, deleteItemFb, isItemInFb, getItemsFb }
}

export { useInfoDB }