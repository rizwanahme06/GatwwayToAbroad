import React from 'react'
import Logo from '../logo/LOGO.png'
import { AppBar, Box, Button, Toolbar, Typography, Container, Grid, Card, CardActionArea, CardActions, CardMedia, CardContent } from '@mui/material'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom'



const Navbar = () => {

  const [anchorEl, setAnchorEl] = React.useState();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl();
  };
  return (
    <>
      <Box sx={{ display: "contents" }}>
        {/* Navbar */}
        <AppBar sx={{ background: "transparent", position: "relative" }}>
          <Toolbar sx={{ mx: 3 }}>
            <Typography component="div" display={'flex'} alignItems={'center'}>
              <Box component="img" src={Logo} alt='web logo' sx={{ height: 80 }}></Box>
              <Box alignItems='center' sx={{ color: "black", mr: 3 }}> GATEWAY TO ABROAD LEARNING</Box>
            </Typography>
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                Select Country
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem><Link to="/UK" style={{textDecoration:"none"}}>Study in UK</Link></MenuItem>
                <MenuItem ><Link to="/USA"  style={{textDecoration:"none"}}>Study in USA</Link></MenuItem>
                <MenuItem><Link to="/Canada"  style={{textDecoration:"none"}}>Study in Canada</Link></MenuItem>
                <MenuItem ><Link to="/France"  style={{textDecoration:"none"}}>Study in France</Link></MenuItem>
              </Menu>
            </div>
            <Typography component="div" sx={{ marginLeft: "auto" }} >
              <Button variant='outlined' color="primary" sx={{ mx: 2 }} href="https://docs.google.com/forms/d/e/1FAIpQLSc121HrW8gHRB2aOamtvPJjI9DIKoqGcQSyeI0Znlagqndxfg/viewform?usp=sf_link">
                Enroll Now
              </Button>
            </Typography>
          </Toolbar>
        </AppBar>

        <Outlet />
      </Box>
    </>
  )
}

export default Navbar