import { ChangeEvent, FC } from "react"
import { Box, Pagination } from "@mui/material"
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";

interface PaginationType {
    information?: []
    page?: number;
    totalPages?: number;
    totalResults?: number;
    site?: string | undefined;
}

const PaginationSite = styled(Pagination)<PaginationType>`
`

type Props = {
    totalPages?: number;
    page?: number;
    site?: string; 
}


const PaginationC: FC<Props> = ({ totalPages, page, site }) => {

    const history = useNavigate()

    let [searchParams, setSearchParams] = useSearchParams();
    let search = searchParams.get("search");

    const handleChange = (event: ChangeEvent<unknown>, page: number) => {
        if (site === "admin") {
            history(`/admin?page=${page}${search ? `&search=${search}` : ``}`)
            window.scroll(0, 0)
        } else if(site === "home"){ 
            history(`/?page=${page}`)
        }
    }

    return (
        <Box sx={{display:"flex", justifyContent:"center"}}>
            <PaginationSite sx={{margin: "2em 0em 1em 0em"}} count={totalPages} shape="rounded" onChange={handleChange}/>
        </Box>
    )
}

export { PaginationC }