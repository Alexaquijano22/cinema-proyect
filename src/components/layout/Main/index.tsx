import { Container } from "@mui/material"
import { FC } from "react"
import styled from "styled-components"

const MainTag = styled(Container)`
    margin-top: 100px;
`

const Main: FC = ({children}) => {
    return (
        <MainTag>
            {children}
        </MainTag>
    )
}

export {Main}