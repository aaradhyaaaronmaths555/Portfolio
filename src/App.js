// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { GlobalStyles } from '@mui/material';
import Navbar from './Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import './App.css';

// Custom background styles
const globalStyles = {
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  },
  'html, body': {
    minHeight: '100vh',
    overflowX: 'hidden',
  },
  body: {
    background: `linear-gradient(135deg, #352F44 21px, #3a3449 22px, #3a3449 24px,
                transparent 24px, transparent 67px, #3a3449 67px, #3a3449 69px,
                transparent 69px),
                linear-gradient(225deg, #352F44 21px, #3a3449 22px, #3a3449 24px,
                transparent 24px, transparent 67px, #3a3449 67px, #3a3449 69px,
                transparent 69px)0 64px`,
    backgroundColor: '#352F44',
    backgroundSize: '64px 128px',
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'radial-gradient(circle at 50% 50%, rgba(92, 84, 112, 0.2) 0%, rgba(53, 47, 68, 0.8) 100%)',
      pointerEvents: 'none',
    }
  },
  '.content-container': {
    position: 'relative',
    zIndex: 1,
    backdropFilter: 'blur(10px)',
    backgroundColor: 'rgba(53, 47, 68, 0.5)',
    minHeight: '100vh',
  }
};

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#352F44',
      light: '#5C5470',
      dark: '#2A2537',
      contrastText: '#F8F6FB',
    },
    secondary: {
      main: '#5C5470',
      light: '#7A7090',
      dark: '#4A4359',
      contrastText: '#F8F6FB',
    },
    text: {
      primary: '#F8F6FB',
      secondary: '#BFB8CC',
    },
    background: {
      default: 'transparent',
      paper: 'rgba(92, 84, 112, 0.2)',
    },
    divider: 'rgba(191, 184, 204, 0.12)',
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
      background: 'linear-gradient(45deg, #F8F6FB 30%, #BFB8CC 90%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
      letterSpacing: '-0.01em',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '12px',
          padding: '10px 24px',
          background: 'rgba(92, 84, 112, 0.1)',
          backdropFilter: 'blur(5px)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
          },
        },
        contained: {
          background: 'linear-gradient(45deg, #352F44 30%, #5C5470 90%)',
          '&:hover': {
            background: 'linear-gradient(45deg, #5C5470 30%, #352F44 90%)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(92, 84, 112, 0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          border: '1px solid rgba(248, 246, 251, 0.1)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(53, 47, 68, 0.8)',
          backdropFilter: 'blur(10px)',
          boxShadow: 'none',
          borderBottom: '1px solid rgba(248, 246, 251, 0.1)',
        },
      },
    },
  },
  shape: {
    borderRadius: 12,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />
      <BrowserRouter>
        <div className="content-container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;