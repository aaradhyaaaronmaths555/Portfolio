// Navbar.js
import React, { useState, useEffect } from 'react';
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

// Enhanced scroll prevention
const preventScroll = (enable) => {
 const body = document.body;
 if (enable) {
   const scrollY = window.scrollY;
   body.style.position = 'fixed';
   body.style.width = '100%';
   body.style.top = `-${scrollY}px`;
   body.style.overflow = 'hidden';
 } else {
   const scrollY = body.style.top;
   body.style.position = '';
   body.style.width = '';
   body.style.top = '';
   body.style.overflow = '';
   window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
 }
};

const theme = createTheme({
 palette: {
   primary: {
     main: '#352F44',
   },
   secondary: {
     main: '#5C5470',
   },
   text: {
     primary: '#F8F6FB',
     secondary: '#BFB8CC',
   },
 },
 typography: {
   fontFamily: '"Inter", "Roboto", sans-serif',
 },
});

const LogoTypography = styled(Typography)(({ theme }) => ({
 fontWeight: 700,
 fontSize: '1.8rem',
 background: 'linear-gradient(45deg, #F8F6FB 30%, #BFB8CC 90%)',
 WebkitBackgroundClip: 'text',
 WebkitTextFillColor: 'transparent',
 letterSpacing: '3px',
 textDecoration: 'none',
 transition: 'all 0.3s ease',
 '&:hover': {
   transform: 'scale(1.02)',
   background: 'linear-gradient(45deg, #F8F6FB 30%, #796F94 90%)',
   WebkitBackgroundClip: 'text',
   WebkitTextFillColor: 'transparent',
 },
}));

const NavButton = styled(Button)(({ theme, active }) => ({
 color: active ? '#F8F6FB' : '#BFB8CC',
 fontSize: '1rem',
 fontWeight: 500,
 margin: theme.spacing(0, 1),
 padding: theme.spacing(1, 2),
 position: 'relative',
 background: active ? 'rgba(121, 111, 148, 0.2)' : 'transparent',
 backdropFilter: 'blur(5px)',
 borderRadius: '12px',
 transition: 'all 0.3s ease',
 '&:hover': {
   background: 'rgba(121, 111, 148, 0.3)',
   transform: 'translateY(-2px)',
   color: '#F8F6FB',
   boxShadow: '0 4px 12px rgba(121, 111, 148, 0.2)',
 },
}));

const StyledAppBar = styled(AppBar)({
 background: 'rgba(53, 47, 68, 0.6)',
 backdropFilter: 'blur(10px)',
 boxShadow: 'none',
 position: 'fixed',
});

const StyledToolbar = styled(Toolbar)({
 height: '80px',
 minHeight: '80px',
 maxWidth: '1440px',
 width: '100%',
 margin: '0 auto',
});

const StyledDrawer = styled(Drawer)({
 '& .MuiBackdrop-root': {
   backgroundColor: 'rgba(53, 47, 68, 0.3)',
   backdropFilter: 'blur(8px)',
   position: 'fixed',
 },
 '& .MuiDrawer-paper': {
   width: '100%',
   maxWidth: '300px',
   height: '100%',
   background: 'rgba(53, 47, 68, 0.95)',
   backdropFilter: 'blur(15px)',
   border: 'none',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   overflow: 'hidden',
   position: 'fixed',
 },
 '& .MuiModal-backdrop': {
   position: 'fixed',
 },
});

const MobileNavButton = styled(NavButton)({
 width: '100%',
 justifyContent: 'center',
 margin: '8px 0',
 padding: '16px',
 fontSize: '1.1rem',
 letterSpacing: '1px',
 backdropFilter: 'blur(5px)',
 '&:hover': {
   background: 'rgba(121, 111, 148, 0.3)',
 },
});

const DrawerContent = styled(Box)({
 height: '100%',
 display: 'flex',
 flexDirection: 'column',
 justifyContent: 'center',
 alignItems: 'center',
 overflow: 'hidden',
 position: 'relative',
});

const Navbar = () => {
 const [mobileOpen, setMobileOpen] = useState(false);
 const isMobile = useMediaQuery(theme.breakpoints.down('md'));
 const location = useLocation();

 const handleDrawerToggle = () => {
   setMobileOpen(!mobileOpen);
   preventScroll(!mobileOpen);
 };

 useEffect(() => {
   return () => {
     preventScroll(false);
   };
 }, []);

 useEffect(() => {
   preventScroll(false);
   setMobileOpen(false);
 }, [location]);

 const navItems = [
   { name: 'Home', path: '/' },
   { name: 'About', path: '/About' },
   { name: 'Portfolio', path: '/Portfolio' },
   { name: 'Contact', path: '/Contact' },
 ];

 const drawer = (
   <DrawerContent>
     <LogoTypography 
       component={RouterLink} 
       to="/" 
       sx={{ 
         fontSize: '2rem',
         mb: 6,
         textAlign: 'center',
       }}
     >
       AARADHYA
     </LogoTypography>
     <List sx={{ width: '100%' }}>
       {navItems.map((item) => (
         <ListItem key={item.name} sx={{ justifyContent: 'center', py: 1.5 }}>
           <MobileNavButton
             component={RouterLink}
             to={item.path}
             active={location.pathname === item.path ? 1 : 0}
             onClick={handleDrawerToggle}
           >
             {item.name}
           </MobileNavButton>
         </ListItem>
       ))}
     </List>
   </DrawerContent>
 );

 return (
   <ThemeProvider theme={theme}>
     <StyledAppBar>
       <StyledToolbar sx={{ justifyContent: 'space-between', px: { xs: 2, sm: 4, md: 6 } }}>
         <LogoTypography component={RouterLink} to="/">
           AARADHYA
         </LogoTypography>
         {isMobile ? (
           <>
             <IconButton
               onClick={handleDrawerToggle}
               sx={{ 
                 color: '#F8F6FB',
                 '&:hover': {
                   background: 'rgba(121, 111, 148, 0.2)',
                 }
               }}
             >
               <MenuIcon sx={{ fontSize: 28 }} />
             </IconButton>
             <StyledDrawer
               anchor="right"
               open={mobileOpen}
               onClose={handleDrawerToggle}
               variant="temporary"
               ModalProps={{
                 keepMounted: true,
                 disableScrollLock: false,
                 style: { position: 'fixed' },
               }}
               PaperProps={{
                 sx: {
                   boxShadow: '-8px 0px 20px rgba(0,0,0,0.1)',
                   position: 'fixed',
                 }
               }}
               BackdropProps={{
                 sx: {
                   position: 'fixed',
                 }
               }}
             >
               {drawer}
             </StyledDrawer>
           </>
         ) : (
           <Box sx={{ display: 'flex', gap: 1 }}>
             {navItems.map((item) => (
               <NavButton
                 key={item.name}
                 component={RouterLink}
                 to={item.path}
                 active={location.pathname === item.path ? 1 : 0}
               >
                 {item.name}
               </NavButton>
             ))}
           </Box>
         )}
       </StyledToolbar>
     </StyledAppBar>
     <Toolbar />
   </ThemeProvider>
 );
};

export default Navbar;