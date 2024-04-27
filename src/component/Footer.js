import React from 'react';
import { Box, Container, Grid, Typography } from "@mui/material";
const Footer = () => {
  return (
    <>
     <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "#3e91b1",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}>      
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="black" variant="h5">
              Ecommerse website
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              {`${new Date().getFullYear()} | facebook | Watsapp | Youtube `}
            </Typography>
            
          </Grid>

        </Grid>
      </Container>
    </Box>
    </>
  );
}

export default Footer;

