import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Divider,
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
  Email,
  Lock,
  Phone,
  Badge,
  Person,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import teamImage from '../assets/images/Regi bg.png'; // background team image
import logoImage from '../assets/images/I team Name.png'; // i-Team logo
import GoogleLogo from '../assets/images/Google.png'; // Google logo
import { Navbar } from './Navbar';

export const StudentRegistration = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
    <Navbar/>
    <Box sx={{ minHeight: '100%', width: '100%',  }}>
      {/* Header */}
      <Box
        sx={{
          width: '100%',
          height: '100%',
          flexGrow: 1,
          background: 'linear-gradient(to left, #001f3f, #0094ff)',

      }}

      >



      {/* Main Content */}
      <Grid align="center"  container sx={{ minHeight: '100vh' }}>
        {/* Left - Form */}
        <Grid
          item
          align="center" 
          xs={12}
          md={6}
          sx={{
         
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom:0,
            paddingTop:10,
            paddingLeft:15,
            paddingRight:0
          }}
        >
          <Box
            sx={{
              backgroundColor: '#0c0035',
              borderRadius: 4,
              p: 4,
              width: '80%',
              maxWidth: 400,
              color: 'white',
              boxShadow: 5,
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3, textAlign: 'center', paddingTop:5, }}>
              Student Registration
            </Typography>

            {/* Form Inputs */}
            <TextField
              fullWidth
              placeholder="Full Name"
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
              placeholder="Email ID"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
              sx={{ backgroundColor: 'white', borderRadius: 5 }}
            />
            <TextField
              fullWidth
              placeholder="Student ID"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Badge />
                  </InputAdornment>
                ),
              }}
              sx={{ backgroundColor: 'white', borderRadius: 5 }}
            />
            <TextField
              fullWidth
              placeholder="Phone Number"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Phone />
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
            <TextField
              fullWidth
              placeholder="Confirm Password"
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

            <Button
              fullWidth
              sx={{
                mt: 2,
                backgroundColor: '#00b0ff',
                borderRadius: 10,
                fontWeight: 'bold',
                color: 'white',
                '&:hover': { backgroundColor: '#009ee3' },
              }}
            >
              Sign Up
            </Button>
            <Divider >or</Divider>

            

            <Typography variant="body2" align="center" sx={{ mb: 1 }}>
              Already have an account?{' '}
              <Link to="/login" style={{ color: '#00b0ff', fontWeight: 'bold' }}>
                Log in
              </Link>
            </Typography>

            <Button
              fullWidth
              
              sx={{
                mt: 2,
                backgroundColor: '#00b0ff',
                borderRadius: 10,
                fontWeight: 'bold',
                color: 'white',
                '&:hover': { backgroundColor: '#009ee3' },
              }}
            >
            <img src={GoogleLogo} alt="Google Logo" style={{ width: '20px', height: '20px', marginRight: '8px' }} />

              Sign Up with Google
            </Button>
          </Box>
        </Grid>

        {/* Right - Image + Title */}
        <Grid
          item
          xs={12}
          md={6}
          align="center"

          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'transparent', // or remove entirely if unnecessary
            paddingTop: 10,
            paddingRight:1.5,
            paddingLeft: 5,
            paddingBottom: 0,
          }}


          
        >
          <Box>
          <img src={logoImage} alt="Name" style={{ maxWidth: '50%', height: 'auto' }} />
          <br></br>
          <img src={teamImage} alt="Team" style={{ maxWidth: '150%', height: 'auto' }} />
          </Box>
        </Grid>
      </Grid>

      {/* Footer */}
      <Box sx={{ backgroundColor: '#000', textAlign: 'center', py: 1 }}>
        <Typography variant="body2" color="white">
          © Copyrights by i-Team
        </Typography>
      </Box>
    </Box>
    
    </Box>
    </>
  );
};
