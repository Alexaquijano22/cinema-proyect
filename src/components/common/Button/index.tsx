import { Button } from "@mui/material"
import { FC } from "react"

type Props = {
    onClick?: () => any;
}

const Buttons:FC<Props> = ({children, onClick}) => {
    return (
        <Button onClick={onClick}>
            {children}
        </Button>
    )
}

export {Buttons}