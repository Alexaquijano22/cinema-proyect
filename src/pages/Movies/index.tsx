import { Container } from "@mui/material"
import { FC, useEffect } from "react"
import { InfoList } from "../../components/common/parts"
import { Layout } from "../../components/layout"
import { WithAuth } from "../../hoc"
import { useInfoDB } from "../../hooks"

const Movies: FC = () => {

    const { itemsFb, getMoviesFb } = useInfoDB();

    useEffect(() => {
        getMoviesFb()
    }, [])

    return (
        <Layout>
            <Container>
                <InfoList information={itemsFb} site="movies"/>
            </Container>
        </Layout>
    )
}

export const MoviesPage = WithAuth(Movies);