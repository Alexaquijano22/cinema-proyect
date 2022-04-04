import { useEffect } from "react";
import { CardDetail } from "../../components/common";
import { InfoList } from "../../components/common/parts";
import { Layout } from "../../components/layout"
import { WithAuth } from "../../hoc"
import { useInfoDB } from "../../hooks";

const Detail = () => {

    const urlDetail = window.location.href;
    const idItem = urlDetail.substring(urlDetail.lastIndexOf('/') + 1);

    const { getItemFb, itemFb, videosItem, getItemVideos, itemsFb } = useInfoDB()
    

    useEffect(() => {
        getItemFb(`${idItem}`)
    }, [idItem])

    useEffect(() => {
        if (itemFb) {
            getItemVideos(itemFb?.media_type, itemFb?.id)
        }
    }, [itemFb])

    

    return (
        <Layout>
            <CardDetail infoCard={itemFb} videos={videosItem} />
            <InfoList information={itemsFb} />
        </Layout>
    )
}

export const DetailPage = WithAuth(Detail)