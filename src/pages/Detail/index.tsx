import { Container } from "@mui/material";
import { useEffect } from "react";
import { CardDetail } from "../../components/common";
import { InfoList } from "../../components/common/parts";
import { Layout } from "../../components/layout"
import { WithAuth } from "../../hoc"
import { useInfoDB } from "../../hooks";

const Detail = () => {

    const urlDetail = window.location.href;
    const idItem = urlDetail.substring(urlDetail.lastIndexOf('/') + 1);

    const { getItem, item, videosItem, getItemVideos, itemsFb } = useInfoDB()
    

    useEffect(() => {
        getItem(idItem)
    }, [idItem])

    useEffect(() => {
        if (item) {
            getItemVideos(item?.media_type, item?.id)
        }
    }, [item])

    

    return (
        <Layout>
            <Container>
                <CardDetail infoCard={item} videos={videosItem} />
                <InfoList information={itemsFb} site="detail"/>
            </Container>
        </Layout>
    )
}

export const DetailPage = WithAuth(Detail)