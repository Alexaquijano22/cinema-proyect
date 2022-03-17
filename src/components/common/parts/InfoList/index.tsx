
import { FC } from "react"
import { Item } from "../../../../types"
import { Card, Pagination } from "../../../common"

type Props = {
    information?: Item[]
    page?: number;
    totalPages?: number;
    totalResults?: number;
}


const InfoList: FC<Props> = ({ information, page, totalPages, totalResults }) => {
    return (
        <>
            {information?.map((item) => {
                return (
                    <Card information={item} key={item.id}/>
                )
            })}
            <Pagination totalPages={totalPages} page={page}/>
        </>
    )
}

export { InfoList }