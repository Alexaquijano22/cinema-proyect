import { FC } from "react"
import { Button, Typography } from "@mui/material"

type Props = {
    onClick?: () => any;
    type?: "button" | "submit" | "reset" | undefined;
    color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | undefined;
    variant?: "text" | "outlined" | "contained" | undefined;
    text?: string;
    sx?: {}
}

const Buttons: FC<Props> = ({ children, onClick, type, color, variant, text, sx }) => {
    return (
        <Button onClick={onClick} type={type} color={color} variant={variant} sx={sx}>
            <Typography style={{ fontWeight: "600"}} variant="subtitle1">{text}</Typography>
                {children}
        </Button>
    )
}

export { Buttons }