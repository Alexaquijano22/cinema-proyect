import { ChangeEvent, FC } from "react"
import { Pagination } from "@mui/material"
import { useNavigate } from "react-router-dom";

type Props = {
    totalPages?: number;
    page?: number;
}


const PaginationC: FC<Props> = ({ totalPages, page }) => {

    const history = useNavigate()

    const handleChange = (event: ChangeEvent<unknown>, page: number) => {
        console.log(page);
        history(`/admin?page=${page}`)
    }

    return (
        <Pagination count={totalPages} shape="rounded" onChange={handleChange} />
    )
}

export { PaginationC }