import React, { useState } from "react";
import { Box, Grid, Typography, Paper, Snackbar, Button } from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";
import MuiAlert from '@mui/material/Alert';

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const StyledPaper = styled(Paper)(({ theme, isMaximized }) => ({
  width: isMaximized ? "70%" : "750px",
  height: isMaximized ? "200%" : "200px",
  margin: "50px auto",
  border: "5px solid #bde2d3",
  borderRadius: isMaximized ? "0" : "10px",
  backgroundColor: "#333",
  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",
  animation: `${bounce} 1.5s infinite`,
  transition: "all 0.3s ease",
  [theme.breakpoints.down("md")]: {
    width: isMaximized ? "100%" : "90%",
    height: "auto",
  },
}));

const StyledPaper2 = styled(Paper)(({ theme, isMaximized }) => ({
  width: isMaximized ? "70%" : "750px",
  height: isMaximized ? "200%" : "300px",
  margin: "50px auto",
  border: "5px solid #bde2d3",
  borderRadius: isMaximized ? "0" : "10px",
  overflow: "hidden",
  backgroundColor: "#333",
  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",
  animation: `${bounce} 1.5s infinite`,
  transition: "all 0.3s ease",
  [theme.breakpoints.down("md")]: {
    width: isMaximized ? "100%" : "90%",
    height: "auto",
  },
}));

const ScreenHeader = styled(Box)({
  height: "30px",
  backgroundColor: "#ddd",
  padding: "5px",
});

const ScreenHeaderButton = styled(Box)({
  width: "20px",
  height: "20px",
  margin: "0 3px",
  cursor: "pointer",
  borderRadius: "30%",
  marginTop: "5px",
});

const Content = styled(Box)({
  padding: "20px",
  color: "#fff",
  fontFamily: "Menlo, monospace",
  whiteSpace: "pre-wrap",
  wordWrap: "break-word",
});

const GreenText = styled("span")({
  color: "lightgreen",
  fontFamily: "Menlo, monospace",
});

const WhiteText = styled("span")({
  color: "white",
  fontFamily: "Menlo, monospace",
});

const DarkText = styled("span")({
  color: "lightblue",
  fontFamily: "Menlo, monospace",
});

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const About = () => {
  const [screen1State, setScreen1State] = useState({ isMaximized: false, isVisible: true });
  const [screen2State, setScreen2State] = useState({ isMaximized: false, isVisible: true });
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleButtonClick = (screenNumber, action) => {
    const setScreenState = screenNumber === 1 ? setScreen1State : setScreen2State;
    
    setScreenState(prevState => {
      if (action === "close") {
        setSnackbarOpen(true);
        return { ...prevState, isVisible: false };
      } else if (action === "maximize") {
        return { ...prevState, isMaximized: true };
      } else if (action === "minimize") {
        return { ...prevState, isMaximized: false };
      }
      return prevState;
    });
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <Box sx={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "flex-start", 
      minHeight: "6vh", 
      marginTop: "5%" 
    }}>
      {screen1State.isVisible && (
        <StyledPaper elevation={3} className="computer-screen" isMaximized={screen1State.isMaximized}>
          <ScreenHeader>
            <Box display="flex">
              <ScreenHeaderButton className="close" sx={{ backgroundColor: "#f00" }} onClick={() => handleButtonClick(1, "close")} />
              <ScreenHeaderButton className="maximize" sx={{ backgroundColor: "#ff0" }} onClick={() => handleButtonClick(1, "maximize")} />
              <ScreenHeaderButton className="minimize" sx={{ backgroundColor: "#0f0" }} onClick={() => handleButtonClick(1, "minimize")} />
            </Box>
          </ScreenHeader>
          <Content>
            <Typography variant="body1" sx={{ marginBottom: 1 }}>
              <GreenText>aaradhyalamsal $ </GreenText>
              <WhiteText>cat aboutaaradhya</WhiteText>
            </Typography>
            <Typography variant="body1">
              <GreenText>aboutaaradhya </GreenText>
              <DarkText> (main) </DarkText>
              <GreenText> $</GreenText> I am Aaradhya, a Cyber Security student at Swinburne University of Technology. Eager to bridge the gap between security and web development, I'm seeking an internship to apply my technical skills and contribute to innovative projects.
            </Typography>
          </Content>
        </StyledPaper>
      )}
      {screen2State.isVisible && (
        <StyledPaper2 elevation={3} className="computer-screen2" isMaximized={screen2State.isMaximized}>
          <ScreenHeader>
            <Box display="flex">
              <ScreenHeaderButton className="close" sx={{ backgroundColor: "#f00" }} onClick={() => handleButtonClick(2, "close")} />
              <ScreenHeaderButton className="maximize" sx={{ backgroundColor: "#ff0" }} onClick={() => handleButtonClick(2, "maximize")} />
              <ScreenHeaderButton className="minimize" sx={{ backgroundColor: "#0f0" }} onClick={() => handleButtonClick(2, "minimize")} />
            </Box>
          </ScreenHeader>
          <Content>
            <Typography variant="body1" sx={{ marginBottom: 1 }}>
              <GreenText>aaradhyalamsal $ </GreenText>cd skills/tools
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
              <GreenText>skills/tools</GreenText>
              <DarkText> (main) </DarkText>
              <GreenText> $</GreenText> ls
            </Typography>
            <Grid container spacing={2} sx={{ width: "80%", margin: "0 auto" }}>
              <Grid item xs={6} sx={{ color: "white", textAlign: "center" }}>
                <Typography>Material UI</Typography>
                <Typography>HTML5</Typography>
                <Typography>CSS3</Typography>
                <Typography>OOP</Typography>
                <Typography>Responsive Design</Typography>
              </Grid>
              <Grid item xs={6} sx={{ color: "white", textAlign: "center" }}>
                <Typography>JavaScript</Typography>
                <Typography>React</Typography>
                <Typography>Jira</Typography>
                <Typography>Git</Typography>
                <Typography>Soft Skills</Typography>
              </Grid>
            </Grid>
          </Content>
        </StyledPaper2>
      )}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity="info" sx={{ width: '100%' }}>
          Screen closed. To restore the view, please refresh the page.
          <Button color="inherit" size="small" onClick={handleRefresh}>
            Refresh Now
          </Button>
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default About;