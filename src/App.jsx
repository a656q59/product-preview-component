import './App.css'
import { Box, Button, Grid, Typography } from '@mui/material'
import desktop_image from "./assets/images/image-product-desktop.jpg"
import mobile_image from "./assets/images/image-product-mobile.jpg"
import icon_cart from "./assets/images/icon-cart.svg";


const App = () => {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: { xs: "center", lg: "center" },
      alignItems: { xs: "center", lg: "center" },
      backgroundColor: "hsl(30, 38%, 92%)",
      height: { xs: "150vh", lg: "100vh" }
    }}
    >

      <Grid container width={{ xs: "50%", lg: "40%" }} display="flex" alignItems="center" flexDirection={{ xs: "column", lg: "row" }} height={{ xs: "80%", lg: "60%" }} >

        <Grid sx={{
          borderTopLeftRadius: "12px",
          borderTopRightRadius: { xs: "12px", lg: "0px" },
          borderBottomLeftRadius: { xs: "0px", lg: "12px" },
          height: { xs: "50%", lg: "100%" },
          overflow: "hidden",

          // alignItems: "center"
          // height: { xs: "25%", lg: "50%" }
        }}
          size={{ xs: 12, lg: 6 }}
        >
          <Grid sx={{ height: "100%", display: { xs: "none", lg: "flex" } }} >

            <img src={desktop_image}
              height="100%"
              width="100%"
              alt="image"
            />
          </Grid>
          <Grid sx={{ height: "100%", display: { xs: "flex", lg: "none" } }} >
            <img src={mobile_image}
              height="100%"
              width="100%"
              alt="image"
            />
          </Grid>
        </Grid>

        <Grid
          size={{ xs: 12, lg: 6 }}
          // padding="15px" 

          sx={{
            // height: "30%",
            height: { xs: "50%", lg: "100%" },
            borderTopRightRadius: { xs: "0px", lg: "12px" },
            borderBottomRightRadius: { xs: "0px", lg: "12px" },
            backgroundColor: "#fff",
            color: "#000",
            textAlign: "left",
            // height: "100%",
            padding: { xs: "30px", lg: "0px 30px" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly"

          }}>



          <Typography sx={{ fontFamily: 'Montserrat,sans-serif', color: " hsl(228, 12%, 48%)" }}>
            PERFUME
          </Typography>


          <Typography sx={{ fontSize: "29px", fontFamily: 'Fraunces,sans-serif', fontWeight: "700" }}>
            Gabrielle Essence Eau De Parfum
          </Typography>

          <Typography variant="subtitle1" sx={{ fontFamily: 'Montserrat,sans-serif', color: " hsl(228, 12%, 48%)", fontSize: "14px" }}>
            A floral, solar and voluptuous interpretation composed by Olivier Polge,
            Perfumer-Creator for the House of CHANEL.
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="h4" sx={{ fontWeight: "bold", fontFamily: 'Fraunces,sans-serif', color: "hsl(158, 36%, 37%)" }} >
              $149.99
            </Typography>
            <Typography variant="subtitle1" sx={{ paddingRight: "30px", fontFamily: 'Fraunces,sans-serif', color: " hsl(228, 12%, 48%)", textDecoration: "line-through" }}>
              $169.99
            </Typography>

          </Box>
          <Button
            variant="contained"
            startIcon={<img src={icon_cart} width="15px" height="15px" />}
            color="success"
            sx={{
              width: "100%", padding: "10px",
              '&:hover': {
                backgroundColor: " hsl(158, 42%, 18%)"
              },

            }}>

            {"Add to Cart"}

          </Button>


        </Grid>

      </Grid>

      <Box >
        <Typography>Challenge by Frontend Mentor  Coded by Deepu
        </Typography>
      </Box>

    </Box >

  )
}

export default App
