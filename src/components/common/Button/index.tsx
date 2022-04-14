import { Button } from "@mui/material"
import styled from "styled-components"
import { FC } from "react"

interface InterfaceButton {
    isprimary?: boolean;
    type?: "button" | "submit" | "reset" | undefined;
    color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | undefined;
    variant?: "text" | "outlined" | "contained" | undefined;
}

const CommonButton = styled(Button)<InterfaceButton>`
 	
`;

type Props = {
    onClick?: () => any;
    primary?: boolean;
    type?: "button" | "submit" | "reset" | undefined;
    color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | undefined;
    variant?: "text" | "outlined" | "contained" | undefined;
}

const Buttons: FC<Props> = ({ children, onClick, primary, type, color, variant }) => {
    return (
        <CommonButton onClick={onClick} isprimary={primary} type={type} color={color} variant={variant}>
            {children}
        </CommonButton>
    )
}

export { Buttons }