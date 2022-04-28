import { FC } from 'react';
import { lighten, Link, Typography } from '@mui/material';
import styled from 'styled-components';

interface InterfaceLink {
    to?: any;
    component?: string;
    underline: string;
    color: string;
}

const CommonLink = styled(Link) <InterfaceLink>`
    
    &.MuiLink-root{
        text-transform: capitalize;
    }
`

type Props = {
    onClick?: () => any;
    goto?: () => any;
    variant?: "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "overline" | "inherit" | undefined;
    underline?: "none" | "hover" | "always";
    color?: string;
    text?: string;
    variantText?: "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "overline" | "inherit" | undefined;
    colorText?: string
}


const Links: FC<Props> = ({ onClick, children, variant, underline, color, text, variantText, colorText }) => {
    return (
        <CommonLink sx={{textDecorationColor: theme => lighten(theme.palette.secondary.contrastText, 0.1)}} color={color || "secondary"} underline={underline || "hover"} component="button" onClick={onClick} 
            variant={variant || "body2"}><Typography variant={variantText || "h6"} sx={{color: color === "dark" ? theme => lighten(theme.palette.secondary.main, 0) : theme => lighten(theme.palette.text.primary, 0), fontWeight: "600"}}>{text}</Typography></CommonLink>
    )
}

export { Links }