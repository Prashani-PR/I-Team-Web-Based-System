import React from 'react';
import { Box, Grid, Button, Typography, Divider, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import logoImage from '../assets/images/team.png';

export const Registration = () => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Main Content */}
      <Box
        sx={{
            width: '100vw',
            height: '100vh',
            flexGrow: 1,
            background: 'linear-gradient(to right, #001f3f, #0094ff)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
        }}
      >
        <Box sx={{ textAlign: 'center', maxWidth: 600 }}>
          <img src={logoImage} alt="Logo" style={{ width: '120px', marginBottom: 24 }} />
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Welcome! <br /> Are you?
          </Typography>

          <Grid container spacing={2} justifyContent="center" sx={{ mt: 3 }}>
            <Grid item>
              <Button
                component={Link}
                to="/StudentRegistration"
                variant="contained"
                sx={{
                  backgroundColor: '#007bff',
                  color: 'white',
                  px: 4,
                  borderRadius: 2,
                  fontWeight: 'bold',
                  '&:hover': { backgroundColor: '#006ae0' },
                }}
              >
                STUDENT
              </Button>
            </Grid>
            <Grid item>
              <Button
                component={Link}
                to="/StaffRegistration"
                variant="contained"
                sx={{
                  backgroundColor: '#007bff',
                  color: 'white',
                  px: 4,
                  borderRadius: 2,
                  fontWeight: 'bold',
                  '&:hover': { backgroundColor: '#006ae0' },
                }}
              >
                STAFF
              </Button>
            </Grid>
          </Grid>

          <Divider sx={{ backgroundColor: 'white', my: 3, width: '100%' }} />

          <Typography variant="body1" sx={{ mb: 1 }}>
            or
          </Typography>

          <Typography variant="body1">
            Do you Have an Account?{' '}
            <MuiLink
              component={Link}
              to="/SignUp"
              sx={{ color: '#FFD700', fontWeight: 'bold', textDecoration: 'none' }}
            >
              Sign up
            </MuiLink>
          </Typography>
        </Box>
      </Box>

      {/* Footer */}
      <Box sx={{ backgroundColor: '#000000', textAlign: 'center', py: 1 }}>
        <Typography variant="body2" color="white">
          © Copyrights by i-Team
        </Typography>
      </Box>
    </Box>
  );
};
