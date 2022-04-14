import { FC } from 'react';
import { Link } from '@mui/material';
import styled from 'styled-components';

interface InterfaceLink {
    to?: any;
    component?: string;
    underline: string;
    color: string;
}

const CommonLink = styled(Link) <InterfaceLink>`
    
    &.MuiLink-root{
        outline: none;
        text-transform: capitalize;
    }
    &.MuiLink-underlineHover{
        /* background-color: #fefefe; */
    }
`

type Props = {
    onClick?: () => any;
    goto?: () => any;
}


const Links: FC<Props> = ({ onClick , children}) => {
    return (
        <CommonLink color="secondary" underline="hover" component="button" onClick={onClick}
            variant="body2">{children}</CommonLink>
    )
}

export { Links }