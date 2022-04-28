import { FC } from "react";
import styled from "styled-components";
import { Card, lighten } from "@mui/material";

const CardCommonLogin = styled(Card)`
    box-shadow: 0 8px 32px 0 rgb(72 72 72 / 37%);
    backdrop-filter: blur( 40px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`;

type Props = {
    sx?: {}
}


const CardLogin: FC<Props> = ({children, sx}) => {
    return <CardCommonLogin sx={{...sx, border: theme => lighten(theme.palette.background.default,0.2), backgroundColor: theme => lighten(theme.palette.background.default,0.2)}}>{children}</CardCommonLogin>;
};

export { CardLogin };
