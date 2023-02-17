import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { fetchData } from '../services/formFetch';
import { useNavigate } from 'react-router-dom';


const theme = createTheme();

const ComboForm = () => {
  const navigate = useNavigate();
  const [occupations, setOccupations] = useState([]);
  const [states, setStates] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    occupation: '',
    state: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);


  useEffect(() => {
    fetchData()
      .then(res => {
        if (res.ok) {
          res.json().then(data => {
            setOccupations(data.occupations);
            setStates(data.states);
          });
        }
      })
      .catch(error => console.error(error));
  }, []);

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    console.log(e)

    if (formSubmitted) {
      setFormSubmitted(false);
    }
  };


  const handleSubmit = e => {
    e.preventDefault();
    setFormSubmitted(true);

    if (formData.name && formData.email && formData.password && formData.occupation && formData.state) {
      fetchData()
        .then(res => {
          if (res.ok) {
            console.log('Form submitted successfully');
            navigate("/success");
          }
        })
        .catch(error => console.error(error));
    }
  };


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography mb={2} component="h1" variant="h5">
            Sign Up Using Leo's Form
          </Typography>
          <ValidatorForm        
                onSubmit={handleSubmit}                
            >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextValidator
                  type="text"
                  autoComplete="given-name"
                  id="name"
                  name="name"
                  value={formData.name}
                  fullWidth
                  onChange={handleChange}
                  required
                  label="Full Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextValidator
                  type="email"
                  autoComplete="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  fullWidth
                  onChange={handleChange}
                  required
                  label="Email Address"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextValidator
                  type="password"
                  autoComplete="new-password"
                  id="password"
                  name="password"
                  value={formData.password}
                  fullWidth
                  onChange={handleChange}
                  required
                  label="Password"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="occupation-label">Select an Occupation</InputLabel>
                  <Select
                    labelId="occupation-label"
                    id="occupation"
                    name= "occupation"
                    value={formData.occupation}
                    label="Select an Occupation"
                    onChange={handleChange}
                    required
                  >
                    <MenuItem value={formData.occupation}>Select an Occupation</MenuItem>
                    {occupations.map(occupation => (
                      <MenuItem key={occupation} value={occupation}>
                        {occupation}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="state-label">Select a State</InputLabel>
                  <Select
                    labelId="state-label"
                    id="state"
                    name= "state"
                    label= "Select a State"
                    value={formData.state}
                    onChange={handleChange}
                    required
                  >
                    <MenuItem value="">Select a State</MenuItem>
                    {states.map(state => (
                      <MenuItem key={state.abbreviation} value={state.abbreviation}>
                        {state.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Submit
                </Button>
              
              </Grid>
            </Grid>

          </ValidatorForm>
        </Box>
      </Container>
    </ThemeProvider>
  )

}

export default ComboForm