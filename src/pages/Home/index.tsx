import { Container } from "@mui/material";
import { useContext, useEffect } from "react";
import { InfoList } from "../../components/common/parts";
import { Layout } from "../../components/layout";
import { AuthContext } from "../../context/Auth";
import { WithAuth } from "../../hoc"
import { useAuth, useInfoDB } from "../../hooks";

const Home = () => {

    const { logout } = useAuth()

    const { itemsFb, getItemsFb } = useInfoDB()


    useEffect(() => {
        getItemsFb()
    }, [])


    return (
        <Layout>
            <Container>
                <InfoList information={itemsFb} />
            </Container>
        </Layout>
    )
}

export const HomePage = WithAuth(Home);