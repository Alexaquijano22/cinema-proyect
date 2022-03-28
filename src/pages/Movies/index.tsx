import { Container } from "@mui/material"
import { FC, useContext } from "react"
import { InfoList } from "../../components/common/parts"
import { Layout } from "../../components/layout"
import { AuthContext } from "../../context/Auth"
import { WithAuth } from "../../hoc"
import { useInfoDB } from "../../hooks"

const Movies: FC = () => {

    const { itemsFb } = useInfoDB();
    const { state, dispatch } = useContext(AuthContext)
    
    return (
        <Layout>
             <Container>
                    <InfoList information={itemsFb} />
                </Container>
        </Layout>
    )
}

export const MoviesPage = WithAuth(Movies);