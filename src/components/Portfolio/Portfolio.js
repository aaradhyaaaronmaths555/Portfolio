import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/system';
import Cocktail from '../../Picture/Cocktail.png';
import Sparky from '../../Picture/SparkySky.png';

// Colors
const colors = {
  primaryText: '#F8F6FB',
  secondaryText: '#BFB8CC',
  accent: '#4FEBFE',
  cardBorder: 'rgba(79, 235, 254, 0.2)'
};

const StyledBox = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem 1rem',
  animation: 'fadeIn 1000ms ease',
  '@keyframes fadeIn': {
    from: { 
      opacity: 0, 
      transform: 'translateY(-20px)' 
    },
    to: { 
      opacity: 1, 
      transform: 'translateY(0)' 
    }
  }
}));

const ProjectContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '800px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(3),
  padding: '2rem',
  background: 'rgba(255, 255, 255, 0.03)',
  borderRadius: '16px',
  border: `1px solid ${colors.cardBorder}`,
  backdropFilter: 'blur(10px)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: `0 8px 30px rgba(79, 235, 254, 0.1)`,
    border: `1px solid ${colors.accent}`
  },
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(2),
    padding: '1rem',
    '&:hover': {
      transform: 'none'
    }
  }
}));

const ProjectTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 600,
  fontSize: '2.5rem',
  color: colors.primaryText,
  textAlign: 'center',
  letterSpacing: '0.5px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.8rem'
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '1.5rem'
  }
}));

const ProjectDescription = styled(Typography)(({ theme }) => ({
  fontFamily: 'Muli, sans-serif',
  fontSize: '1.1rem',
  color: colors.secondaryText,
  textAlign: 'center',
  maxWidth: '600px',
  lineHeight: 1.6,
  padding: '0 1rem',
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    lineHeight: 1.5
  }
}));

const ProjectImageContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '800px',
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '12px',
  border: `1px solid ${colors.cardBorder}`,
  background: 'rgba(0, 0, 0, 0.1)',
  '&::before': {
    content: '""',
    display: 'block',
    paddingTop: '56.25%', // 16:9 aspect ratio
  },
  [theme.breakpoints.down('sm')]: {
    '&::before': {
      paddingTop: '75%', // 4:3 aspect ratio for mobile
    }
  }
}));

const ProjectImage = styled('img')(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  objectPosition: 'center',
  transition: 'all 0.3s ease-in-out',
  backfaceVisibility: 'hidden',
  transformStyle: 'preserve-3d',
  imageRendering: '-webkit-optimize-contrast',
  '&:hover': {
    transform: 'translate(-50%, -50%) scale(1.05)'
  },
  [theme.breakpoints.down('sm')]: {
    objectFit: 'contain',
    width: '100%',
    height: '100%'
  }
}));

const ProjectLink = styled('a')(({ theme }) => ({
  color: colors.accent,
  textDecoration: 'none',
  fontFamily: 'Muli, sans-serif',
  fontSize: '1.1rem',
  fontWeight: 500,
  padding: '12px 24px',
  borderRadius: '6px',
  border: `2px solid ${colors.accent}`,
  transition: 'all 0.2s ease-in-out',
  marginTop: theme.spacing(3),
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: colors.accent,
    opacity: 0.1,
    transform: 'translateX(-100%)',
    transition: 'transform 0.3s ease'
  },
  '&:hover': {
    transform: 'translateY(-2px)',
    '&::before': {
      transform: 'translateX(0)'
    }
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    padding: '10px 20px'
  }
}));

const ProjectsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: theme.spacing(4),
  width: '100%',
  maxWidth: '1600px',
  padding: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    gap: theme.spacing(4),
    padding: theme.spacing(1)
  }
}));

const Portfolio = () => {
  const projects = [
    {
      title: "Mixology",
      description: "An elegant web application that brings the art of cocktail crafting to your fingertips. Discover, create, and master your favorite drink recipes.",
      image: Cocktail,
      link: "https://mixology1.vercel.app/"
    },
    {
      title: "Sparky Sky",
      description: "An innovative open-source platform that revolutionizes digital interaction. Join our community of creators and developers in shaping the future of web experiences.",
      image: Sparky,
      link: "https://sparky-sky.vercel.app/contact"
    }
  ];

  const handleImageLoad = (e) => {
    e.target.style.opacity = 1;
  };

  return (
    <Container maxWidth="lg">
      <StyledBox>
        <ProjectsGrid>
          {projects.map((project) => (
            <ProjectContainer key={project.title}>
              <ProjectTitle variant="h1">
                {project.title}
              </ProjectTitle>
              <ProjectDescription>
                {project.description}
              </ProjectDescription>
              <ProjectImageContainer>
                <ProjectImage 
                  src={project.image} 
                  alt={`${project.title} Website Preview`}
                  loading="lazy"
                  onLoad={handleImageLoad}
                  style={{ opacity: 0 }}
                  draggable="false"
                />
              </ProjectImageContainer>
              <ProjectLink 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Live Site →
              </ProjectLink>
            </ProjectContainer>
          ))}
        </ProjectsGrid>
      </StyledBox>
    </Container>
  );
};

export default Portfolio;