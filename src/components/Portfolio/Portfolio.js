import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/system';

const StyledBox = styled(Box)({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  animation: 'fadeIn 1000ms ease',
  '@keyframes fadeIn': {
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  },
});

const TaukoTypography = styled(Typography)(({ theme }) => ({
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 700,
  lineHeight: 1,
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '3rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '4rem',
  },
}));

const DotSpan = styled('span')({
  color: '#4FEBFE',
});

const ParaTypography = styled(Typography)(({ theme }) => ({
  fontFamily: 'Muli, sans-serif',
  textAlign: 'center',
  marginTop: theme.spacing(2),
}));

const Portfolio = () => {
  return (
    <Container maxWidth="lg">
      <StyledBox>
        <TaukoTypography variant="h1">
          Coming soon<DotSpan>.</DotSpan>
        </TaukoTypography>
        <ParaTypography variant="body1">
          Will update more websites here. Stay Tuned
        </ParaTypography>
      </StyledBox>
    </Container>
  );
};

export default Portfolio;