import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { CakeOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import UserService from '../../Service/User Service/UserService';
import { capitalizeFirstLetter } from '../../Utils/RefineArray';
import { logoutUser } from '../../Redux/Features/UserSlice';
import header_logo from '../../Assets/Images/Logos/header_logo.png'


const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    let userName = localStorage.getItem("userName")
    const user = useSelector((state) => state.user.user)

    if (userName !== null) {
        userName = capitalizeFirstLetter(userName)
    }

    return (
        <AppBar position="fixed" sx={{ backgroundColor: '#42032C' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <img src={header_logo} alt='header-logo' height={75} width={75} />
                    </Typography>

                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >

                        LittleJoys
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
                            <MenuItem onClick={() => {
                                handleCloseNavMenu()
                                navigate('/menu')
                            }}>
                                <Typography textAlign="center"> <CakeOutlined /> Menu</Typography>
                            </MenuItem>
                            <MenuItem onClick={() => {
                                handleCloseNavMenu()
                                navigate('/cart')
                            }}>
                                <Typography textAlign="center"> <ShoppingCartOutlined /> Cart</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <MenuItem onClick={() => {
                            handleCloseNavMenu()
                            navigate('/menu')
                        }}>
                            <Typography textAlign="center"> <CakeOutlined /> Menu</Typography>
                        </MenuItem>
                        <MenuItem onClick={() => {
                            handleCloseNavMenu()
                            navigate('/cart')
                        }}>
                            <Typography textAlign="center"> <ShoppingCartOutlined /> Cart</Typography>
                        </MenuItem>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Typography textAlign="center" color='white'>
                                {user.length !== 0 && userName !== null ?
                                    <span>
                                        {userName}
                                    </span> :
                                    <span>
                                        Hi Guest
                                    </span>}
                            </Typography>
                        </IconButton>
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
                            <MenuItem onClick={() => {
                                if (user.length !== 0 && userName != null) {
                                    navigate('/profile')
                                } else {
                                    navigate('/signin')
                                }
                                handleCloseUserMenu()
                            }}>
                                <Typography textAlign="center">My Account</Typography>
                            </MenuItem>
                            <MenuItem onClick={() => {
                                if (user.length !== 0 && userName != null) {
                                    navigate('/my-orders')
                                } else {
                                    navigate('/signin')
                                }
                                handleCloseUserMenu()
                            }}>
                                <Typography textAlign="center">My orders</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">
                                    {user.length !== 0 || userName !== null ?
                                        <span onClick={() => {
                                            UserService.logout()
                                            dispatch(logoutUser())
                                            navigate('/home')
                                        }}>
                                            Logout
                                        </span>
                                        :
                                        <span onClick={() => {
                                            navigate('/signin')
                                        }}>
                                            Login/Register
                                        </span>}
                                </Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header