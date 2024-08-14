import * as React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import axios from "axios";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        ENAIKU ORU PUDI WEBSITE
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignInSide() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const emailValid = email.includes("@");
    const passwordValid = password.length >= 6;
    setEmailError(!emailValid);
    setPasswordError(!passwordValid);

    if (emailValid && passwordValid) {
      try {
        const response = await axios.post(
          "http://localhost:3001/api/Recipe-Signin",
          {
            firstname,
            lastname,
            email,
            password,
          }
        );

        console.log(response.data); 
        navigate("/"); 
      } catch (error) {
        console.error("Error during API call:", error); 
      }
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Grid
        container
        component="main"
        sx={{
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            backgroundImage:
              "url(https://images.pexels.com/photos/3650436/pexels-photo-3650436.jpeg?auto=compress&cs=tinysrgb&w=600)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            borderRadius: 2,
            padding: { xs: 2, sm: 4, md: 6 },
            boxShadow: 3,
            maxWidth: "500px",
            width: "100%",
          }}
        >
          <Typography
            component="h1"
            variant="h5"
            align="center"
            sx={{ color: "lightgray" }}
          >
            ENJOY THE BITE
          </Typography>

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              autoComplete="given-name"
              autoFocus
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              InputLabelProps={{ shrink: true }}
              sx={{
                "& .MuiFormLabel-root": {
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "1.3rem",
                  top: "-10px",
                },
                "& .MuiInputBase-input": {
                  color: "black",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  borderRadius: "4px",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "transparent",
                  },
                  "&:hover fieldset": {
                    borderColor: "gray",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "blue",
                  },
                },
                "& .MuiFormHelperText-root": {
                  color: "red",
                },
              }}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="family-name"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              InputLabelProps={{ shrink: true }}
              sx={{
                "& .MuiFormLabel-root": {
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "1.3rem",
                  top: "-10px",
                },
                "& .MuiInputBase-input": {
                  color: "black",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  borderRadius: "4px",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "transparent",
                  },
                  "&:hover fieldset": {
                    borderColor: "gray",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "blue",
                  },
                },
                "& .MuiFormHelperText-root": {
                  color: "red",
                },
              }}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={emailError}
              helperText={
                emailError ? "Please enter a valid email address" : ""
              }
              InputLabelProps={{ shrink: true }}
              sx={{
                "& .MuiFormLabel-root": {
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "1.3rem",
                  top: "-10px",
                },
                "& .MuiInputBase-input": {
                  color: "black",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  borderRadius: "4px",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "transparent",
                  },
                  "&:hover fieldset": {
                    borderColor: "gray",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "blue",
                  },
                },
                "& .MuiFormHelperText-root": {
                  color: "red",
                },
              }}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={passwordError}
              helperText={
                passwordError ? "Password must be at least 6 characters" : ""
              }
              InputLabelProps={{ shrink: true }}
              sx={{
                "& .MuiFormLabel-root": {
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "1.3rem",
                  top: "-10px",
                },
                "& .MuiInputBase-input": {
                  color: "black",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  borderRadius: "4px",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "transparent",
                  },
                  "&:hover fieldset": {
                    borderColor: "gray",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "blue",
                  },
                },
                "& .MuiFormHelperText-root": {
                  color: "red",
                },
              }}
            />

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
              sx={{
                "& .MuiTypography-root": {
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "1rem",
                },
                "& .MuiCheckbox-root": {
                  color: "white",
                },
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="outlined"
              color="info"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "rgba(255, 255, 255, 0.6)",
                color: "black",
                borderColor: "black",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                  borderColor: "black",
                },
                "&:active": {
                  backgroundColor: "rgba(0, 0, 0, 0.9)",
                },
              }}
            >
              Sign Up
            </Button>

            <Grid container>
              <Grid item xs>
                <Link
                  component={RouterLink}
                  to="/admin"
                  variant="body2"
                  sx={{
                    color: "white",
                    "&:hover": {
                      color: "lightgray",
                    },
                  }}
                >
                  Sign in as Admin?
                </Link>
              </Grid>
              <Grid item>
                <Link
                  component={RouterLink}
                  to="/signup"
                  variant="body2"
                  sx={{
                    color: "white",
                    "&:hover": {
                      color: "lightgray",
                    },
                  }}
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </ThemeProvider>
  );
}
