import React, { useState } from 'react';
import {
  Box,
  Grid,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Button,
  Link as MuiLink
} from '@mui/material';
import { Visibility, VisibilityOff, Person, Lock } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import teamImage from '../assets/images/Regi bg.png'; // background team image
import logoImage from '../assets/images/team.png'; // i-Team logo
import NameImage from '../assets/images/I team Name.png'; // i-Team Name

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      {/* Navbar already imported in main layout */}
      <Box sx={{ width: '100%', minHeight: '100vh', 
         background: 'linear-gradient(to left, #001f3f, #0094ff)',
       }}>
        <Grid container sx={{ minHeight: '100vh' }}>
          
          {/* Left Image & Text */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
             
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              color: 'white',
              textAlign: 'center',
              paddingTop: 2,
              paddingRight: 15.2,
              paddingLeft:15.3,
              paddingBottom: 0,
            }}
          >

            <img src={NameImage} alt="Name" style={{ maxWidth: '50%', height: '100px' }} />
            <br></br>
            <img src={teamImage} alt="Team" style={{ width: '125%', maxWidth: '800x' }} />

          </Grid>

          {/* Right Login Form */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
           
              paddingBottom:0,
              paddingTop:2,
              paddingLeft:15,
              paddingRight:10.1
            }}
          >
            <Box
              sx={{
                backgroundColor: '#03032e',
                color: 'white',
                borderRadius: 4,
                p: 4,
                width: '100%',
                maxWidth: 400,
                boxShadow: 6,
              }}
            >
              <Box sx={{ textAlign: 'center', mb: 3 }}>
              <img src={logoImage} alt="Team" style={{ width: '30%', maxWidth: '550px',    borderRadius: '50%',  backgroundColor: 'white' }} />
                <Typography variant="h5" sx={{ mt: 1 }}>
                  Welcome!
                </Typography>
                <Typography variant="body2" sx={{ color: 'yellow' }}>
                  Login to your Account to continue
                </Typography>
              </Box>

              <TextField
                fullWidth
                placeholder="User Name"
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person />
                    </InputAdornment>
                  ),
                }}
                sx={{ backgroundColor: 'white', borderRadius: 5 }}
              />

              <TextField
                fullWidth
                placeholder="Password"
                margin="normal"
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{ backgroundColor: 'white', borderRadius: 5 }}
              />

              <Typography variant="body2" align="center" sx={{ mt: 1, mb: 2 }}>
                <Link to="/ForgotPassword" style={{ color: '#00ff55', fontWeight: 'bold'  }}>
                  Forgot Password?
                </Link>
              </Typography>

              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: '#00b0ff',
                  fontWeight: 'bold',
                  borderRadius: 10,
                  '&:hover': { backgroundColor: '#009ee3' },
                }}
              >
                Login
              </Button>

              <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                Don't have an account?{' '}
                <Link to="/Registration" style={{ color: '#00b0ff', fontWeight: 'bold' }}>
                  Sign up
                </Link>
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Footer already exists */}
        <Box sx={{ backgroundColor: '#000', textAlign: 'center', py: 1 }}>
          <Typography variant="body2" color="white">
            © Copyrights by i-Team
          </Typography>
        </Box>
      </Box>
    </>
  );
};
