
import { Grid } from "@mui/material"
import { FC } from "react"
import { useSearchParams } from "react-router-dom"
import { Item } from "../../../../types"
import { Card, Pagination } from "../../../common"

type Props = {
    information?: Item[]
    page?: number;
    totalPages?: number;
    totalResults?: number;
    site?: string
}


const InfoList: FC<Props> = ({ information, page, totalPages, site }) => {

    let [searchParams, setSearchParams] = useSearchParams();
    let pageParam = searchParams.get("page") === null ? 1 : searchParams.get("page");

    let itemsAux: Item[] = [];

    let limit = 28;
    let total = information !== undefined ? information?.length : 1;

    for (var i = Number(pageParam) === 1 ? 0 : (Number(pageParam) - 1) * limit; i < limit * Number(pageParam); i++) {
        if (information !== undefined && information[i] !== undefined) {
            itemsAux.push(information[i])
        }
    }


    return (
        <>
            <Grid container spacing={{ xs: 8, md: 4 }} columns={{ xs: 1, sm: 8, md: 24 }} style={{ paddingTop: "9em", paddingBottom: site === "detail" ? "1em" : "0em" }}>
                {site === "admin" ? (
                    information?.map((item) => {
                        return (
                            <Grid item key={item.id} xs={2} sm={4} md={6}>
                                <Card information={item}  />
                            </Grid>
                        )
                    })
            ): itemsAux?.map((item) => {
                return (
                    <Grid item key={item.id} xs={2} sm={4} md={6}>
                        <Card information={item}  />
                    </Grid>
                )
            })}
            </Grid>
            {site !== "detail" ? (
                <Pagination totalPages={site === "admin" ? totalPages : Math.ceil(total / limit)} page={site === "admin" ? page : Number(pageParam)} site={site} />
            ): null}
        </>
    )
}

export { InfoList }