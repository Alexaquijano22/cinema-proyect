import { useEffect, useState } from "react";
import { Data } from "../../types";
import { apiMoviesDB } from "../../utils";

const useInfoDB = () => {

    const [information, setInformation] = useState<Data>()

    
    

    const getMovies = async (page: string | undefined) => {
        console.log(page)
        try {
            const response = await apiMoviesDB.get(`/movie/top_rated?page=${Number(page)}`)
            setInformation(response.data)
        } catch (e) {
            console.log(e);
        }
    }

    return { information, getMovies }
}

export { useInfoDB }