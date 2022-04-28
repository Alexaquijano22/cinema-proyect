import { FC, useEffect } from "react"
import { useSearchParams } from "react-router-dom";
import { InfoList } from "../../components/common/parts";
import { Layout } from "../../components/layout";
import { WithAuth } from "../../hoc";
import { useInfoDB } from "../../hooks";
import { Container } from "@mui/material";

const Admin: FC = () => {
    const { information, getMoviesDB, getConsultMultiSearch, getItemsFb } = useInfoDB();
    let [searchParams, setSearchParams] = useSearchParams();
    let page = searchParams.get("page");
    let search = searchParams.get("search");

    useEffect(() => {
        if (search) {
            getConsultMultiSearch(search, page)
        } else {
            getMoviesDB(page)
        }
    }, [searchParams])


    return (
            <Layout>
                <Container>
                    <InfoList information={information?.results} page={information?.page} totalPages={information?.total_pages} totalResults={information?.total_results} site="admin"/>
                </Container>
            </Layout>
    )
}

export const AdminPage = WithAuth(Admin);