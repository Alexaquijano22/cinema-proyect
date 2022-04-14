import { Container } from "@mui/material"
import { FC } from "react"
import styled from "styled-components"

const MainTag = styled(Container)`
    height: 100vh;
    display: flex;
    align-items: center;
`

const Main: FC = ({children}) => {
    return (
        <MainTag>
            {children}
        </MainTag>
    )
}

export {Main}