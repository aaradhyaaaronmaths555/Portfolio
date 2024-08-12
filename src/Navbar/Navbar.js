// Navbar.js
import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  Box,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Define custom colors
const deepNavyBlue = '#001F3F';
const brightRed = '#FF1E00';
const palePink = '#FFD1DC';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: brightRed,
    },
    background: {
      default: palePink,
      paper: deepNavyBlue,
    },
    text: {
      primary: palePink,
      secondary: brightRed,
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h6: {
      fontSize: '2rem', // Increased font size for logo
      fontWeight: 700,
    },
  },
});

const LogoTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.text.primary,
  letterSpacing: '2px',
  textDecoration: 'none',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

const NavButton = styled(Button)(({ theme, active }) => ({
  color: active ? theme.palette.primary.main : theme.palette.text.primary,
  fontSize: '1.2rem', // Increased font size for nav items
  fontWeight: 500,
  margin: theme.spacing(0, 1),
  padding: theme.spacing(1, 2), // Increased padding
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '3px', // Increased underline thickness
    backgroundColor: theme.palette.primary.main,
    transform: active ? 'scaleX(1)' : 'scaleX(0)',
    transition: 'transform 0.3s ease',
  },
  '&:hover': {
    backgroundColor: 'transparent',
    color: theme.palette.primary.main,
    '&::after': {
      transform: 'scaleX(1)',
    },
  },
}));

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: 'none',
  borderBottom: `2px solid ${theme.palette.divider}`, // Increased border thickness
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  height: '80px', // Increased navbar height
  minHeight: '80px',
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: '300px', // Increased drawer width
    paddingTop: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
  },
}));

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/About' },
    { name: 'Portfolio', path: '/Portfolio' },
    { name: 'Contact', path: '/Contact' },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <LogoTypography variant="h6" component={RouterLink} to="/" sx={{ my: 2, display: 'block' }}>
        AARADHYA
      </LogoTypography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <NavButton 
              component={RouterLink} 
              to={item.path} 
              fullWidth
              active={location.pathname === item.path}
            >
              {item.name}
            </NavButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <StyledAppBar position="sticky">
        <StyledToolbar sx={{ justifyContent: 'space-between' }}>
          <LogoTypography variant="h6" component={RouterLink} to="/">
            AARADHYA
          </LogoTypography>
          {isMobile ? (
            <>
              <IconButton
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ color: 'text.primary' }}
                aria-label="menu"
              >
                <MenuIcon fontSize="large" /> {/* Increased icon size */}
              </IconButton>
              <StyledDrawer
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true,
                }}
              >
                {drawer}
              </StyledDrawer>
            </>
          ) : (
            <Box>
              {navItems.map((item) => (
                <NavButton 
                  key={item.name} 
                  component={RouterLink} 
                  to={item.path}
                  active={location.pathname === item.path}
                >
                  {item.name}
                </NavButton>
              ))}
            </Box>
          )}
        </StyledToolbar>
      </StyledAppBar>
    </ThemeProvider>
  );
};

export default Navbar;