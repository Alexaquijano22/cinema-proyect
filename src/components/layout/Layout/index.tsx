import { FC } from "react";
import { Header } from "../Header";
import { Main } from "../Main";


type Props = {
    hideHeader?: boolean;
    hideMain?: boolean;
    hideAside?: boolean;
    hideFooter?: boolean;
}

const Layout: FC<Props> = ({ hideHeader, hideMain, children }) => {
   
    
    return (
        <>
            
            {!hideHeader && <Header/>}
            {!hideMain && <Main>{children}</Main>}

        </>
    )
}

export { Layout }