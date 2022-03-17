import { FC, useEffect } from "react"
import { useParams } from "react-router-dom";
import { InfoList } from "../../components/common/parts";
import { Layout } from "../../components/layout";
import { WithAuth } from "../../hoc";
import { useInfoDB } from "../../hooks";

const Admin: FC = () => {
    
    const { information, getMovies } = useInfoDB()
    const { page } = useParams<{ page: string }>()
    
    console.log(page)

    // useEffect(() => {
    //     getMovies(page)
    // }, [])
    
    console.log(information)
    return (
        <Layout>
            <InfoList information={information?.results} page={information?.page} totalPages={information?.total_pages} totalResults={information?.total_results}/>
        </Layout>
    )
}

export const AdminPage = WithAuth(Admin);