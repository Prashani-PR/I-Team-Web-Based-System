import React from 'react'
import { AppBar, Toolbar, Typography, Button, IconButton, Avatar } from "@mui/material";
import logoImage from '../assets/images/team.png';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <>
        <AppBar sx={{ backgroundColor: '#ffffff'}}>
        <Toolbar>
          <Typography sx={{flexGrow:1}}>              
            <IconButton sx={{ p: 0 }}>
              <Avatar alt="Logo" src={logoImage} />
            </IconButton>
            </Typography>

          <Button variant="contained"
          sx={{
            textTransform: 'capitalize', // First letter capitalized
            color: '#004aad',
            backgroundColor: 'transparent',
            boxShadow: 'none',
            fontWeight: 'bold',
            border: 'none',
            '&:hover': {
              backgroundColor: 'transparent',
              textDecoration: 'none',
            },
            '&:focus': {
              outline: 'none',
            },
            '&:active': {
              backgroundColor: '#004aad',
              color: '#ffffff',
            }
          }}
          to="/Login" LinkComponent={Link}
          >
            Login 
            </Button>
            <Button variant="contained"
          sx={{
            textTransform: 'capitalize', // First letter capitalized
            color: '#004aad',
            backgroundColor: 'transparent',
            boxShadow: 'none',
            fontWeight: 'bold',
            border: 'none',
            '&:hover': {
              backgroundColor: 'transparent',
              textDecoration: 'none',
            },
            '&:focus': {
              outline: 'none',
            },
            '&:active': {
              backgroundColor: '#004aad',
              color: '#ffffff',
            }
          }}
          to="/Registration" LinkComponent={Link}
          >
           Registration</Button>
          
        </Toolbar>


      </AppBar>
        
        </>
    );
};