import { Button } from "@mui/material"
import styled from "styled-components"
import { FC } from "react"

const CommonButton = styled(Button)`
  z-index: 1;
`;

type Props = {
    onClick?: () => any;
}

const Buttons:FC<Props> = ({children, onClick}) => {
    return (
        <CommonButton onClick={onClick}>
            {children}
        </CommonButton>
    )
}

export {Buttons}