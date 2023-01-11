import React from 'react';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Box from '@mui/material/Box';
import  AppBar  from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import AdbIcon from '@mui/icons-material/Adb'
import Button  from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import IconButton from '@mui/material/IconButton';
import MenuOpenOutlined from '@mui/icons-material/MenuOpenOutlined';


const navlinks = [
    {
        name: 'Products',
        icon: <ExpandMoreIcon/>
    },
    {
        name: 'Downloads',
        icon: <ExpandMoreIcon/>
    },
    {
        name: 'Pricing',
        icon: <ExpandMoreIcon/>
    }
]


function Layout({children, props}) {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const navigate = useNavigate();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    function ElevationScroll(props) {
        const { children, window } = props;
        const trigger = useScrollTrigger({
            disableHysteresis: true,
            threshold: 0,
            target: window ? window() : undefined,
        });

        return React.cloneElement(children, {
            elevation: trigger ? 4 : 0,
        });
    }


    return (
        <div>
            <ElevationScroll {...props}>
                <AppBar sx={{ bgColor: "primary" }} position="sticky">
                    <Toolbar 
                        sx={{ 
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>

                        {/* Responsive Menu Icon */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuOpenOutlined color="secondary" />
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
                                {navlinks.map((navlink) => (
                                    <List onClick={handleCloseNavMenu} key={navlink.name}>
                                        <ListItem key={navlink.icon}>
                                            <Typography
                                                color='secondary'
                                            >
                                                {navlink.name}
                                            </Typography>

                                            <ListItemIcon>
                                                <ExpandMoreIcon color="secondary"/>
                                            </ListItemIcon>
                                            
                                        </ListItem>
                                    </List>
                                ))}
                            </Menu>
                        </Box>

                        <Button 
                            startIcon={<AdbIcon/>}
                            variant="text"
                            color="secondary"
                            onClick={() => navigate('/')}
                        >
                            Mockplus
                        </Button>

                        <Box
                            sx={{ 
                                display: {xs: 'none', sm: 'none', md:'block'}
                            }}
                        >
                            {navlinks.map(navlink => (
                                <Button
                                    id="fade-button" 
                                    key={navlink.name}
                                    endIcon={navlink.icon}
                                    variant="text"
                                    color="secondary"
                                >
                                    {navlink.name}
                                </Button>
                            ))}
                        </Box>

                        <Box sx={{ display: {xs: 'none', sm: 'none', md: 'flex'} }}>
                            <Typography 
                                sx={{ pt: 1, pr: 4 }}
                                color="secondary"
                            >
                                Log In
                            </Typography>    
                            <Button 
                                variant="outlined"
                                color="secondary"
                            >
                                Start for free
                            </Button>
                        </Box>
                    </Toolbar>
                </AppBar>     
            </ElevationScroll>
            
            <div className='body'>
                {children}
            </div>
        </div>
        
    );
}

export default Layout;