import React from 'react';
import { Box, Typography, Avatar, Grid, Link, Container, Paper, useTheme, useMediaQuery } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PpImage from '../../Picture/guitar.jpg';

// Define the cosmic artistry colors
const deepSpaceBlue = '#0B0B45';
const celestialPurple = '#8A2BE2';
const cosmicTeal = '#30D5C8';
const stellarGold = '#FFD700';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(6),
  },
  background: `linear-gradient(135deg, ${deepSpaceBlue} 0%, ${celestialPurple} 100%)`,
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: `0 10px 30px ${cosmicTeal}50`,
  maxWidth: '1000px',
  width: '100%',
  margin: 'auto',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '5px',
    background: `linear-gradient(90deg, ${cosmicTeal}, ${stellarGold})`,
  },
}));

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
  border: `4px solid ${cosmicTeal}`,
  boxShadow: `0 0 25px ${stellarGold}50`,
  margin: 'auto',
  animation: `${float} 3s ease-in-out infinite`,
}));

const InfoItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(1),
}));

const SocialIcon = styled(Link)(({ theme }) => ({
  color: cosmicTeal,
  margin: theme.spacing(0, 1),
  transition: 'color 0.3s ease, transform 0.3s ease',
  '&:hover': {
    color: stellarGold,
    transform: 'translateY(-3px)',
  },
}));

const wave = keyframes`
  0% { transform: rotate(0deg); }
  10% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  30% { transform: rotate(14deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(10deg); }
  60% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
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
    <Container maxWidth="lg" sx={{ py: { xs: 4, sm: 6, md: 8 }, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <StyledPaper elevation={3}>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
            <StyledAvatar alt="Aaradhya Lamsal" src={PpImage} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant={isSmallScreen ? 'h4' : 'h3'} fontWeight="bold" gutterBottom sx={{ 
              color: stellarGold,
              fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' },
            }}>
              Hello, I'm Aaradhya Lamsal <WavingHand>👋</WavingHand>
            </Typography>
            
            <Typography variant={isSmallScreen ? 'h5' : 'h4'} gutterBottom sx={{ 
              letterSpacing: '1px', 
              color: cosmicTeal,
              fontSize: { xs: '1.25rem', sm: '1.75rem', md: '2rem' },
            }}>
              Front-End Developer
            </Typography>
            
            <Box my={2}>
              <InfoItem>
                <LocationOnIcon sx={{ mr: 1, color: stellarGold, fontSize: isSmallScreen ? '1.2rem' : '1.5rem' }} />
                <Typography variant="body1" sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }, color: 'white' }}>Melbourne, Australia</Typography>
              </InfoItem>
              <InfoItem>
                <EmailIcon sx={{ mr: 1, color: stellarGold, fontSize: isSmallScreen ? '1.2rem' : '1.5rem' }} />
                <Typography variant="body1" sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }, color: 'white' }}>aaradhyalamsal2002@gmail.com</Typography>
              </InfoItem>
            </Box>

            <Typography variant="body1" paragraph sx={{ 
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }, 
              lineHeight: 1.6, 
              color: 'white',
              mt: 2,
            }}>
              Passionate about creating beautiful and functional web experiences. 
              Always eager to learn and apply new technologies to solve real-world problems.
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ mt: 'auto', textAlign: 'center', pt: 3 }}>
          <SocialIcon href="https://www.linkedin.com/in/aaradhya-lamsal-b19a731b8/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon fontSize={isSmallScreen ? "medium" : "large"} />
          </SocialIcon>
          <SocialIcon href="https://github.com/aaradhyalamsal" target="_blank" rel="noopener noreferrer">
            <GitHubIcon fontSize={isSmallScreen ? "medium" : "large"} />
          </SocialIcon>
        </Box>
      </StyledPaper>
    </Container>
  );
};

export default Home;