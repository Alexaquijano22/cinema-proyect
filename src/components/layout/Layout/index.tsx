import { FC } from "react";
import { Header } from "../Header";
import { Main } from "../Main";

const Layout: FC = ({ children }) => {
   
    
    return (
        <>
            <Header />
            <Main>
                {children}
            </Main>

        </>
    )
}

export { Layout }