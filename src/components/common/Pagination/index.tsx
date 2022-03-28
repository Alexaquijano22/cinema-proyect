import { ChangeEvent, FC } from "react"
import { Pagination } from "@mui/material"
import { useNavigate, useSearchParams } from "react-router-dom";

type Props = {
    totalPages?: number;
    page?: number;
}


const PaginationC: FC<Props> = ({ totalPages, page }) => {

    const history = useNavigate()

    let [searchParams, setSearchParams] = useSearchParams();
    let search = searchParams.get("search");

    const handleChange = (event: ChangeEvent<unknown>, page: number) => {
        history(`/admin?page=${page}${search ? `&search=${search}` : ``}`)
        window.scroll(0, 0)
    }

    return (
        <Pagination count={totalPages} shape="rounded" onChange={handleChange}/>
    )
}

export { PaginationC }