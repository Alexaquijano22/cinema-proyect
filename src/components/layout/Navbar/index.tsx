import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { FC, MouseEvent, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { InputSearch } from '../../common';
import { useAuth } from '../../../hooks';

type Props = {
    pages: string[];
    settings: string[];
    rol?: string;
}


const Navbar: FC<Props> = ({pages, settings, rol}) => {

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const location = useLocation();
    const [ubication, setUbication] = useState(location.pathname === "/admin" ? "admin" : location.pathname);
    const {logout} = useAuth()

    const handleOpenNavMenu = (e:MouseEvent<HTMLElement>) => {
        setAnchorElNav(e.currentTarget);
    };
    const handleOpenUserMenu = (e:MouseEvent<HTMLElement>) => {
        setAnchorElUser(e.currentTarget);
    };

    const handleCloseNavMenu = (page: any) => {
        setAnchorElNav(null);
        setUbication(page)
    };

    const handleCloseUserMenu = (option: string) => {
        setAnchorElUser(null);
        if (option === "Logout") {
            logout()
        }
    };
    
    return (
        <AppBar position="fixed" enableColorOnDark={true}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        Cinemada
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Link to={page === "movies" ? "/movies" : page === "admin" ? `/admin` : page === "series" ? "/series": page === "users" ? "/users" : "/"}>{page}</Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => handleCloseNavMenu(page)}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <Link to={page === "movies" ? "/movies" : page === "admin" ? `/admin` : page === "series" ? "/series": page === "users" ? "/users" : "/"}> {page}</Link>
                            </Button>
                        ))}
                    </Box>

                    {rol === "admin" && ubication === "admin" ? (
                        <InputSearch />
                    ): null}

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={(e) => handleOpenUserMenu(e)} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={() => handleCloseUserMenu(setting)}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export { Navbar };