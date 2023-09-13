import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import NavListDrawer from './navbar/NavListDrawer';
import { Drawer } from '@material-ui/core';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';

const navLinks = [
    {
        title: 'Proyectos',
        path: '#proyectos',
        icon: <MailOutlinedIcon />
    },
    {
        title: 'Contacto',
        path: '#contacto',
        icon: <MailOutlinedIcon />

    }
];

const ResponsiveAppBar = () => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        size="large"
                        onClick={() => setOpen(true)}
                        sx={{display: {xs: "flex", sm:"none"}}}
                        edge="start"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h4" sx={{ flexGrow: 1 }}>
                        Mauro Benitez
                    </Typography>
                    <Box sx={{display: {xs:"none", sm:"block"}}}>
                        {
                            navLinks.map(link => (
                                <Button
                                    color="inherit"
                                    key={link.title}
                                    component={Link}
                                    to={link.path}>
                                    {link.title}
                                </Button>
                            ))
                        }
                    </Box>

                </Toolbar>
            </AppBar>
            <Drawer
                open={open}
                anchor="left"
                onClose={() => setOpen(false)}
                sx={{display: {xs:"flex", sm:"none"}}}
            >
                <NavListDrawer navLinks={navLinks} />
            </Drawer>
        </>
    );
};

export default ResponsiveAppBar;
