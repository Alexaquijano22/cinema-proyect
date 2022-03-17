import { FC } from "react";
import { Header } from "../Header";

const Layout: FC = ({ children }) => {
   
    
    return (
        <>
            <Header />
            {children}

        </>
        // <Footer/>
    )
}

export { Layout }