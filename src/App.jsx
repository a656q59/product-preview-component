import { useState } from 'react'
import './App.css'
import { Box, Grid } from '@mui/material'

const App = () => {
  console.log("Render");
  return (
    <Grid container border='2px solid red' height="100vh" >

      Perfume

      Gabrielle Essence Eau De Parfum

      A floral, solar and voluptuous interpretation composed by Olivier Polge,
      Perfumer-Creator for the House of CHANEL.

      $149.99
      $169.99

      Add to Cart

      <div >
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Deepu</a>.
      </div>

    </Grid>
  )
}

export default App
