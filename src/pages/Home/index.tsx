import { Container } from "@mui/material";
import { useEffect } from "react";
import { InfoList } from "../../components/common/parts";
import { Layout } from "../../components/layout";
import { WithAuth } from "../../hoc"
import { useInfoDB } from "../../hooks";

const Home = () => {
    const { itemsFb, getItemsFb } = useInfoDB()


    useEffect(() => {
        getItemsFb()
    }, [])


    return (
        <Layout>
            <Container>
                <InfoList information={itemsFb} site="home"/>
            </Container>
        </Layout>
    )
}

export const HomePage = WithAuth(Home);