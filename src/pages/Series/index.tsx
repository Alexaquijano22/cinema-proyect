import { Container } from "@mui/material"
import { FC, useEffect } from "react"
import { InfoList } from "../../components/common/parts"
import { Layout } from "../../components/layout"
import { WithAuth } from "../../hoc"
import { useInfoDB } from "../../hooks"

const Series: FC = () => {

    const { itemsFb, getSeriesFb } = useInfoDB();

    useEffect(() => {
        getSeriesFb()
    }, [])

    return (
        <Layout>
            <Container>
                <InfoList information={itemsFb} />
            </Container>
        </Layout>
    )
}

export const SeriesPage = WithAuth(Series)