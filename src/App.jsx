import { useState } from 'react'
import './App.css'
import { Box, Button, Grid, Typography } from '@mui/material'
import desktop_image from "./assets/images/image-product-desktop.jpg"
import mobile_image from "./assets/images/image-product-mobile.jpg"
import icon_cart from "./assets/images/icon-cart.svg";
const App = () => {
  console.log("Render");
  return (
  <Box sx={{display:"flex", flexDirection:"column", justifyContent:{xs:"space-evenly", lg:"center"}, alignItems:"center",backgroundColor:"hsl(30, 38%, 92%)", height:"100vh"}}  >

     <Grid container display="flex"flexDirection={{xs:"column",lg:"row"}} justifyContent={{xs:"center",lg:"start"}} alignItems="center" width="33%"  height="100%">

     <Grid item size={{xs:12,lg:6}}  sx={{borderTopLeftRadius:"12px",borderBottomLeftRadius:"12px", overflow:"hidden", display:"flex",height:{xs:"25%",lg:"50%"}}}>
        <Box sx={{
          display:{xs:"none",lg:"flex"},
          height:{lg:"50vh"},
        width:"100%"
        }}>
        <img src={desktop_image}
        height="100%"
        width="100%"
         />
          </Box>

          <Box sx={{
          display:{xs:"flex",lg:"none"},
          
        width:"100%"
        }}>
        <img src={mobile_image}
        height="100%"
        width="100%"
         />
          </Box>
     
      </Grid>
     


      <Grid item 
        size={{xs:12,lg:6}} 
        // padding="15px" 
        sx={{
           
          borderTopRightRadius:"12px",
          borderBottomRightRadius:"12px",
          backgroundColor:"#fff", 
          color:"#000",
          height:"50%",

        }}>
          

          <Box item sx={{textAlign:"left",  
           
            height:"100%", 
            padding:"0px 30px",
            display:"flex", 
            flexDirection:"column", 
            justifyContent:"space-evenly"
            
            }}>
          <Typography sx={{fontFamily:'Montserrat,sans-serif',color:" hsl(228, 12%, 48%)"}}>
            PERFUME
            </Typography>


            <Typography  sx={{fontSize:"29px",fontFamily:'Fraunces,sans-serif', fontWeight:"700"}}>
            Gabrielle Essence Eau De Parfum
            </Typography>

            <Typography variant="subtitle1"   sx={{fontFamily:'Montserrat,sans-serif', color:" hsl(228, 12%, 48%)", fontSize:"14px"}}>
            A floral, solar and voluptuous interpretation composed by Olivier Polge,
            Perfumer-Creator for the House of CHANEL.
            </Typography>
           
           <Box sx={{display:"flex", justifyContent:"space-between",alignItems:"center" }}>
            <Typography variant="h4" sx={{fontWeight:"bold", fontFamily:'Fraunces,sans-serif'}} >
              $149.99
            </Typography>
            <Typography variant="subtitle1" sx={{paddingRight:"30px", fontFamily:'Fraunces,sans-serif', color:" hsl(228, 12%, 48%)",textDecoration: "line-through" }}>
                $169.99 
            </Typography>
           </Box>

            <Button variant="contained" startIcon={<img src={icon_cart} width="15px" height="15px"/>} color="success" sx={{width:"100%", padding:"10px"}}>{"Add to Cart"}</Button>
          </Box>

          
      </Grid>

      
      
     </Grid>

      <Box >
        <Typography>Challenge by Frontend Mentor  Coded by Deepu
        </Typography>
      </Box>

    </Box>
  )
}

export default App
