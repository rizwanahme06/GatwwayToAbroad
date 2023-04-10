import React from 'react'
import Logo from '../logo/LOGO.png'
import Collage from '../image/college_0_09_98.jpg'
import Canada from '../image/canada_flag.png'
import Ielts from '../image/ielts.jpg'
import StudentVisa from '../image/student-visa-application.jpg'
import UK from '../image/uk_flag.png'
import US from '../image/us_flag.png'
import CollageApplication from '../image/college-application.jpg'
import { AppBar, Box, Button, Toolbar, Typography, Container, Grid, Card, CardActionArea, CardActions, CardMedia, CardContent } from '@mui/material'
// Brush Script MT}
const Navbar = () => {
  return (
    <>
      <Box sx={{ display: "contents" }}>
        {/* Navbar */}
        <AppBar sx={{ background: "transparent", position: "relative" }}>
          <Toolbar sx={{ mx: 3 }}>
            <Typography component="div" display={'flex'} alignItems={'center'}>
              <Box component="img" src={Logo} alt='web logo' sx={{ height: 80 }}></Box>
              <Box alignItems='center' sx={{ color: "black" }}> GATEWAY TO ABROAD LEARNING</Box>
            </Typography>
            <Typography component="div" sx={{ marginLeft: "auto" }} >
              <Button variant='outlined' color="primary" sx={{ mx: 2 }} href="https://docs.google.com/forms/d/e/1FAIpQLSc121HrW8gHRB2aOamtvPJjI9DIKoqGcQSyeI0Znlagqndxfg/viewform?usp=sf_link">
                Enroll Now
              </Button>
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Contained */}
        <Container maxWidth="xl" sx={{ m: 0, display: 'flex', alignItems: 'center' }}>
          <Grid container sx={{ mt: 5, alignItems: "center", justifyContent: 'space-around' }}>
            <Grid item sm={4}>
              <Typography variant='h2' sx={{ color: 'black', fontFamily: "cursive", fontWeight: "800", fontSize: "100px" }} >STUDY</Typography>
              <Typography variant='h4' sx={{ color: 'gray', fontWeight: "500", letterSpacing: "0.05em" }} >IN THE BEST <br /> UNIVERSITIES/COLLEGES ACROSS <br /> THE WORLD.</Typography>
              <Typography variant='h5' sx={{ color: 'gray', my: 2 }} >and we'll assist you to get there.</Typography>
            </Grid>
            <Grid item sm={5} sx={{ p: 1 ,maxWidth:"700"}}>
              <Box component="img" src={Collage} alt='web logo' sx={{ height: 400,width:"100%"}}></Box>
            </Grid>
          </Grid>
        </Container>

        {/* About */}
        <Container maxWidth="xl" sx={{ mt: 5, display: 'flex', alignItems: 'center' }}>
          <Grid container sx={{ alignItems: "center", justifyContent: 'space-around' }}>
            <Grid item sm={4}>
              <Typography variant='h2' sx={{ color: 'gray', fontFamily: "sans-serif", fontWeight: "800", fontSize: "50px" }} >About us</Typography>
            </Grid>
            <Grid item sm={5.2} sx={{ position: "relative" }}>
              <Typography variant='h4' sx={{ color: 'black', fontWeight: "500", fontSize: "20px" }} >Established in 2004, We are an Education consultancy (based out of Mumbai) which has helped students study in their desired university abroad for little or no cost at all.</Typography><br />
              <Typography variant='h6' sx={{ top: "3px", color: 'black', fontWeight: "500", fontSize: "20px" }} >We help with <span style={{ color: "black", fontWeight: "bold" }}> Canadian SDS College</span> Admission,<span style={{ color: "black", fontWeight: "bold" }}>  UK</span> and <span style={{ color: "black", fontWeight: "bold" }}> USA</span> University admission, Forex to Foriegn Universities and Student Visa <span style={{ color: "black", fontWeight: "bold" }}> (for free)</span>, since we are Official agent for most of the colleges and universities in Canada and UK. In a nutshell, you don't have to pay us anything.</Typography><br />
              <Typography variant='h6' sx={{ color: 'black', fontWeight: "500", fontSize: "20px" }} >We have so far assisted (from counselling to Visa Approval) approximately<span style={{ color: "black", fontWeight: "bold" }}> 2000</span> students since last 5 years across different countries.</Typography>
            </Grid>
          </Grid>
        </Container>

        {/* Services */}
        <Container maxWidth="xl" sx={{ mt: 5, display: 'flex', alignItems: 'center', padding: "50px" }}>
          <Grid container sx={{ alignItems: "center", justifyContent: 'space-around' }}>
            <Grid item sm={3}>
              <Typography variant='h3' sx={{ color: 'grey', fontFamily: "monospace", fontWeight: "500", fontSize: "37px" }} >Our</Typography>
              <Typography variant='h2' sx={{ color: 'gray', fontFamily: "sans-serif", fontWeight: "800", fontSize: "50px", my: 1 }} >Services</Typography>
              <Typography variant='p' sx={{ color: 'grey', fontWeight: "bold" }} >We offer different services like IELTS training, Guidance on College Applications ,SOP (Statement of Purpose/Intent) and Visa Services.</Typography>
            </Grid>
            <Grid item sm={5.5} sx={{ position: "relative", display: "flex", justifyContent: "space-between" }}>
              <Card sx={{ maxWidth: 200, maxHeight: 250 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    src={Ielts}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" fontSize="18px">
                      IELTS Training
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" variant='contained' sx={{ color: "white", margin: "auto" }}>
                    learn More
                  </Button>
                </CardActions>
              </Card>
              <Card sx={{ maxWidth: 200, maxHeight: 250 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    src={CollageApplication}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" fontSize="18px">
                      College Application
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" variant='contained' sx={{ color: "white", margin: "auto" }}>
                    learn More
                  </Button>
                </CardActions>
              </Card>
              <Card sx={{ maxWidth: 200, maxHeight: 250 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    src={StudentVisa}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" fontSize="18px">
                      Visa Application
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" variant='contained' sx={{ color: "white", margin: "auto" }}>
                    learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>

        {/* Countries */}
        <Container maxWidth="xl" sx={{ mt: 5, display: 'flex', alignItems: 'center', padding: "50px", cursor: "pointer" }}>
          <Grid container sx={{ alignItems: "center", justifyContent: 'space-around' }}>
            <Grid item sm={3}>
              <Typography variant='h3' sx={{ color: 'grey', fontWeight: "500", fontSize: "37px" }} >What makes us</Typography>
              <Typography variant='h2' sx={{ color: 'lightblack', fontFamily: "sans-serif", fontWeight: "800", fontSize: "50px", my: 1 }} >Unique?</Typography>
              <Typography variant='p' sx={{ color: 'grey', fontWeight: "bold" }} >All our customers/applicants were gained by organic means before our website was launched. It means we totally rely on our quality of work for mouth publicity. Trust and Quality are our virtues.</Typography>
              <Typography variant='h5' sx={{ color: 'gray', my: 2, fontSize: "18px" }} >and we'll assist you to get there.</Typography>
            </Grid>
            <Grid item sm={5.5} sx={{ position: "relative", display: "flex", justifyContent: "space-between" }}>
              <Card sx={{ maxWidth: 200,maxHeight:300 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    sx={{ borderRadius: "50%", height: "100px", width: "100px", margin: "auto" }}
                    src={UK}
                    alt="green iguana"
                  />
                  <CardContent sx={{ margin: "auto", display: "grid", placeItems: "center" }}>
                    <Typography gutterBottom variant="h1" component="div" fontSize="40px" >
                      100 %
                    </Typography>
                    <Typography gutterBottom variant="h1" component="div" fontSize="18px">
                      approval rate for U.K. student visas.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Typography variant='h5' sx={{ color: 'black', my: 2, fontSize: "10px" }} >*Data from 2019 - March '20</Typography>
                </CardActions>
              </Card>
              <Card sx={{ maxWidth: 200 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    sx={{ borderRadius: "50%", height: "100px", width: "100px", margin: "auto" }}
                    src={Canada}
                    alt="green iguana"
                  />
                  <CardContent sx={{ margin: "auto", display: "grid", placeItems: "center" }}>
                    <Typography gutterBottom variant="h5" component="div" fontSize="48px">
                      98 %
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div" fontSize="18px">
                      approval rate for Canadian student visas.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Typography variant='h5' sx={{ color: 'black', my: 2, fontSize: "10px" }} >*Data from 2019 - March '20</Typography>
                </CardActions>
              </Card>
              <Card sx={{ maxWidth: 200,maxHeight:325 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    sx={{ borderRadius: "50%", height: "100px", width: "100px", margin: "auto" }}
                    src={US}
                    alt="green iguana"
                  />
                  <CardContent sx={{ margin: "auto", display: "grid", placeItems: "center" }}>
                    <Typography gutterBottom variant="h5" component="div" fontSize="48px">
                      87 %
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div" fontSize="18px">
                      approval rate for U.S. student visas.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Typography variant='h5' sx={{ color: 'black', my: 2, fontSize: "10px" }} >*Data from 2019 - March '20</Typography>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>

        {/* Footer */}
        <Container maxWidth="xl" sx={{ background: "black", padding: "100px" }}>
          <Grid container spacing={2}>
            <Grid item sm={4} sx={{ display: "grid", justifyContent: "center" }}>
              <Typography variant='H3' sx={{ color: "grey", fontSize: "20px" }}>Contact Us</Typography>
              <Typography variant='div' sx={{ color: "white", fontSize: "30px" }}>+91-8928615014</Typography>
              <Typography variant='div' sx={{ color: "white", fontSize: "30px" }}>+91-8097178470</Typography>
              <Box sx={{ color: "whitesmoke", fontSize: "20px", marginTop: "30px" }}>
                info@allabroadeducation.com
              </Box>
            </Grid>
            <Grid item sm={4} sx={{ display: "grid", justifyContent: "center" }}>
              <Typography variant='H3' sx={{ color: "grey", fontSize: "20px" }}>Site links</Typography>
              <Typography variant='div' sx={{ color: "white", fontSize: "15px" }}>Our Services</Typography>
              <Typography variant='div' sx={{ color: "white", fontSize: "15px" }}>Extras</Typography>
              <Typography variant='div' sx={{ color: "white", fontSize: "15px" }}>Make Payment</Typography>
              <Box sx={{ color: "whitesmoke", fontSize: "20px", marginTop: "30px", display: "grid", justifyContent: "center" }}>
                <Typography variant='H3' sx={{ color: "grey", fontSize: "20px" }}>IELTS</Typography>
                <Typography variant='div' sx={{ color: "white", fontSize: "15px" }}>College application</Typography>
                <Typography variant='div' sx={{ color: "white", fontSize: "15px" }}>Statement of purpose</Typography>
                <Typography variant='div' sx={{ color: "white", fontSize: "15px" }}>Visa services</Typography>
              </Box>

            </Grid>
            <Grid item sm={4} sx={{display:"grid"}}>
              <Typography variant='H3' sx={{ color: "grey", fontSize: "20px" }}>Addresses</Typography>
              <Typography variant='div' sx={{ color: "grey", fontSize: "20px", my: 1 }}>Andheri Branch</Typography>
              <Typography variant='div' sx={{ color: "white", fontSize: "15px",pr:5 }}>B-13, 8 Mangal Orchid, Yari Rd,
                opposite D-Mart, Jeet Nagar,
                Versova, Andheri (West). Mumbai -400061.</Typography>
              <Typography variant='div' sx={{ color: "grey", fontSize: "20px", my: 1 }}>Mira Road Branch</Typography>
              <Typography variant='div' sx={{ color: "white", fontSize: "15px",pr:5 }}>B-7, Prashant, Shop No. 2 & 3,
                Shanti Nagar Sector 6, opp. Dena Bank,
                Mira Road(East), Thane- 401107</Typography>
            </Grid>
          </Grid>
        </Container>

      </Box>
    </>
  )
}

export default Navbar