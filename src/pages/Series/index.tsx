import { Container } from "@mui/material"
import { FC, useEffect, useState } from "react"
import { InfoList } from "../../components/common/parts"
import { Layout } from "../../components/layout"
import { WithAuth } from "../../hoc"
import { useInfoDB } from "../../hooks"
import { Item } from "../../types"

const Series: FC = () => {

    const { itemsFb, getSeriesFb } = useInfoDB();
    const [items, setItems] = useState<Item[]>([])

    useEffect(() => {
        getSeriesFb()
    }, [])

    return (
        <Layout>
            <Container>
                <InfoList information={itemsFb} site="series"/>
            </Container>
        </Layout>
    )
}

export const SeriesPage = WithAuth(Series)