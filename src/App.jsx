import { useState } from 'react'
import './App.css'
import { Box, Button, Grid, Typography } from '@mui/material'
import desktop_image from "./assets/images/image-product-desktop.jpg";
import mobile_image from "./assets/images/image-product-mobile.jpg";



const App = () => {
  console.log("Render");
  return (
    <>
      <Grid container border='2px solid red' height="100vh" justifyContent="center" >

        <Grid container display="flex" flexDirection={{ xs: "column", lg: "row" }} justifyContent="center" alignItems="center" border="2px dashed green" >
          <Grid item size={{ xs: 12, lg: 6 }} sx={{ border: "2px solid black" }} height="100%">
            <img src={desktop_image}
              width="100%"
              height="50vh"
            />
          </Grid>
          <Grid item size={{ xs: 12, lg: 6 }} sx={{ border: "2px solid red", display: "flex", flexDirection: "column" }}>
            <Typography>Perfume</Typography>
            <Typography>            Gabrielle Essence Eau De Parfum
            </Typography>
            <Typography> A floral, solar and voluptuous interpretation composed by Olivier Polge,
              Perfumer-Creator for the House of CHANEL.</Typography>
            <Typography>  $149.99</Typography>

            <Typography>             $169.99
            </Typography>

            <Button variant="success">  Add to Cart</Button>




          </Grid>
        </Grid>



      </Grid>
      <div >
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Deepu</a>.
      </div>
    </>

  )
}

export default App
