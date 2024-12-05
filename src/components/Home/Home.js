import React from 'react';
import { Box, Typography, Avatar, Grid, Link, Container, Paper, useTheme, useMediaQuery } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PpImage from '../../Picture/guitar.jpg';

// Colors for components
const primaryColor = '#352F44';
const secondaryColor = '#5C5470';
const primaryText = '#F8F6FB';
const secondaryText = '#BFB8CC';

// Animations
const float = keyframes`
  0%, 100% { transform: translateY(0) rotate(0); }
  50% { transform: translateY(-10px) rotate(2deg); }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(248, 246, 251, 0.3); }
  50% { box-shadow: 0 0 40px rgba(248, 246, 251, 0.5); }
`;

const MainContent = styled(Box)({
  minHeight: 'calc(100vh - 64px)',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  padding: '20px 0',
});

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(6),
  },
  background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
  borderRadius: '24px',
  backdropFilter: 'blur(10px)',
  maxWidth: '1200px',
  width: '100%',
  margin: 'auto',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
}));

// Rest of your styled components remain the same
const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(25),
  height: theme.spacing(25),
  [theme.breakpoints.up('sm')]: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
  [theme.breakpoints.up('md')]: {
    width: theme.spacing(35),
    height: theme.spacing(35),
  },
  animation: `${float} 6s ease-in-out infinite, ${glow} 3s ease-in-out infinite`,
  margin: 'auto',
  position: 'relative',
}));

const InfoItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  padding: theme.spacing(1),
  borderRadius: '12px',
  background: `${primaryColor}40`,
  backdropFilter: 'blur(5px)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateX(10px)',
  }
}));

const SocialIcon = styled(Link)(({ theme }) => ({
  color: primaryText,
  margin: theme.spacing(0, 2),
  transition: 'all 0.3s ease',
  padding: '10px',
  borderRadius: '50%',
  background: `${secondaryColor}50`,
  display: 'inline-flex',
  '&:hover': {
    color: secondaryText,
    transform: 'translateY(-5px) scale(1.1)',
    background: `${secondaryColor}80`,
  }
}));

const wave = keyframes`
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(20deg); }
  75% { transform: rotate(-15deg); }
`;

const WavingHand = styled('span')({
  display: 'inline-block',
  animation: `${wave} 2.5s infinite`,
  transformOrigin: '70% 70%',
  fontSize: '1.2em',
  marginLeft: '10px',
});

const Home = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <MainContent>
      <Container maxWidth="lg">
        <StyledPaper elevation={24}>
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
              <StyledAvatar alt="Aaradhya Lamsal" src={PpImage} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography 
                variant={isSmallScreen ? 'h4' : 'h3'} 
                fontWeight="bold" 
                gutterBottom 
                sx={{ 
                  color: primaryText,
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                }}
              >
                Hello, I'm Aaradhya Lamsal (Aaron) <WavingHand>👋</WavingHand>
              </Typography>
              
              <Typography 
                variant={isSmallScreen ? 'h5' : 'h4'} 
                gutterBottom 
                sx={{ 
                  letterSpacing: '2px',
                  color: secondaryText,
                  fontSize: { xs: '1.25rem', sm: '1.75rem', md: '2rem' },
                  textTransform: 'uppercase',
                }}
              >
                Front-End Developer
              </Typography>
              
              <Box my={3}>
                <InfoItem>
                  <LocationOnIcon sx={{ mr: 2, color: primaryText }} />
                  <Typography sx={{ color: primaryText }}>
                    Melbourne, Australia
                  </Typography>
                </InfoItem>
                <InfoItem>
                  <EmailIcon sx={{ mr: 2, color: primaryText }} />
                  <Typography sx={{ color: primaryText }}>
                    aaradhyalamsal2002@gmail.com
                  </Typography>
                </InfoItem>
              </Box>

              <Typography 
                sx={{ 
                  color: secondaryText,
                  fontSize: { xs: '1rem', sm: '1.1rem' },
                  lineHeight: 1.8,
                  background: `${primaryColor}30`,
                  padding: 2,
                  borderRadius: '12px',
                  backdropFilter: 'blur(5px)',
                }}
              >
                Passionate about creating beautiful and functional web experiences. 
                Always eager to learn and apply new technologies to solve real-world problems.
              </Typography>
            </Grid>
          </Grid>
          
          <Box sx={{ 
            mt: 4, 
            textAlign: 'center', 
            pt: 3,
          }}>
            <SocialIcon 
              href="https://www.linkedin.com/in/aaradhya-lamsal-b19a731b8/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <LinkedInIcon fontSize="large" />
            </SocialIcon>
            <SocialIcon 
              href="https://github.com/aaradhyaaaronmaths555" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <GitHubIcon fontSize="large" />
            </SocialIcon>
          </Box>
        </StyledPaper>
      </Container>
    </MainContent>
  );
};

export default Home;