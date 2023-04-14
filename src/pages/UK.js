import React from 'react'
import Collage from '../image/college_0_09_98.jpg'
import Canada from '../image/canada_flag.png'
import Ielts from '../image/ielts.jpg'
import StudentVisa from '../image/student-visa-application.jpg'
import UK from '../image/uk_flag.png'
import US from '../image/us_flag.png'
import US_Collage from '../image/20060425_NassauHall_JJ_IMG_5973.jpg'
import Mentor from '../image/mentor.jpg'
import ShortList from '../image/universities.jpg'
import CollageApplication from '../image/college-application.jpg'
import {  Box, Button, Typography, Container, Grid, Card, CardActionArea, CardActions, CardMedia, CardContent } from '@mui/material'


const USA = () => {
  return (
    <>
            {/* Contained */}
          <Container maxWidth="xl" sx={{ m: 0, display:"grid",alignItems:"center"}}>
            <Typography variant='h2' sx={{textAlign:"center",fontWeight:"500" , fontFamily:"sans-serif",color:"blue"}}>Study in UK</Typography>
            <Typography variant='h4' sx={{textAlign:"center",fontWeight:"500" , fontFamily:"cursive",padding:"50px"}}>For generations, the UK has been the clear favourite for overseas students. More than a million international students seek to Study in the United Kingdom each year to receive a top-notch education and launch their careers. India makes up about 20% of all international students, making it one of the largest contributors. The land of dreams truly lives up to this title by offering students fantastic chances for research, innovation, and entrepreneurial direction. The country has a multicultural population and has embraced and even welcomed that diversity over the years. It is home to more than 17 universities that are ranked in the top 50 universities around the world. This gigantic nation also has plenty of deserts, snow peaks, mountains, waterfalls, and beaches to please your eyes and soothe your soul.</Typography>
         <Grid display="flex" alignItems="center"justifyContent="center" px="5" >
          <Grid item >
            <Typography component="img"  src={UK}/>
          </Grid>
          <Button size="small" variant='contained' sx={{ color: "white" ,ml:"15px" }}>
                    learn More
                  </Button>
         </Grid>
        
        </Container>

        {/* About */}
        <Container maxWidth="xl" sx={{ mt: 5, display: 'flex', alignItems: 'center' }}>
          <Grid container sx={{ alignItems: "center", justifyContent: 'space-around' }}>
            <Grid item sm={4}>
              <Typography variant='h2' sx={{ color: 'gray', fontFamily: "sans-serif", fontWeight: "800", fontSize: "50px" }} >Why to Study UK</Typography>
            </Grid>
            <Grid item sm={5.2} sx={{ position: "relative" }}>
              <Typography variant='h4' sx={{ color: 'black', fontWeight: "bold", fontSize: "20px",letterSpacing:"0.1em" }} >Out of the top 100 universities in the world, 60 universities are from the UK. There is no doubt about the quality of education provided in the UK. But is that the only attractive thing about the country? Not at all! Here is what draws students:</Typography><br />
            </Grid>
          </Grid>
        </Container>

        {/* know more */}
                {/* Services */}
                <Container maxWidth="xl" sx={{ mt: 5, display: 'flex', alignItems: 'center', padding: "50px" }}>
          <Grid container sx={{ alignItems: "center", justifyContent: 'space-around' }}>
            <Grid item sm={3}>
              <Typography variant='h3' sx={{ color: 'grey', fontFamily: "monospace", fontWeight: "500", fontSize: "37px" }} >Everything you need for your UK Dream</Typography>
            </Grid>
            <Grid item sm={7} sx={{ position: "relative", display: "flex", justifyContent: "space-between" }}>
              <Card sx={{ maxWidth: 200, maxHeight: 300 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    src={Mentor}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" fontSize="18px">
                      Mentor
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
                    src={ShortList}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" fontSize="18px">
                    ShortList
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

    </>
  )
}

export default USA