import * as React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      <Link color="inherit" href="https://mui.com/">
        WANDERLUST website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formError, setFormError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmailError("");
    setPasswordError("");
    setFormError("");

    // Basic validations
    const emailValid = /\S+@\S+\.\S+/.test(email);
    const passwordValid = password.length >= 6;

    if (!emailValid) {
      setEmailError("Please enter a valid email address");
    }
    if (!passwordValid) {
      setPasswordError("Password must be at least 6 characters");
    }

    if (emailValid && passwordValid) {
      console.log({
        firstName,
        lastName,
        email,
        password,
      });
      // Navigate to Home page after successful validation
      navigate("/home");
    } else {
      setFormError("Please fix the errors above.");
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box
        sx={{
          backgroundImage:
            "url(https://d2jx2rerrg6sh3.cloudfront.net/images/news/ImageForNews_750976_16867326232454816.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          minWidth: "100vw",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.4)", // White opaque background
                borderRadius: 2, // Rounded corners
                padding: 4,
                width: "100%",
                justifyContent: "center",
              }}
            >
              {formError && (
                <Typography color="error" variant="body2" align="center">
                  {formError}
                </Typography>
              )}
              <Grid container spacing={3}>
                <Grid item xs={1} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    InputLabelProps={{ shrink: true }}
                    sx={{
                      backgroundColor: "rgba(128, 128, 128, 0.5)", // Gray opaque background
                      borderRadius: 1,
                      "& .MuiInputBase-input": {
                        fontSize: "1.1rem",
                        color: "black",
                      },
                      "& .MuiFormLabel-root": {
                        color: "black",
                        fontWeight: "bold",
                        fontSize: "1.2rem",
                      },
                      "& .MuiFormHelperText-root": {
                        color: "red",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    InputLabelProps={{ shrink: true }}
                    sx={{
                      backgroundColor: "rgba(128, 128, 128, 0.5)",
                      borderRadius: 1,
                      "& .MuiInputBase-input": {
                        fontSize: "1.1rem",
                        color: "black",
                      },
                      "& .MuiFormLabel-root": {
                        color: "black",
                        fontWeight: "bold",
                        fontSize: "1.2rem",
                      },
                      "& .MuiFormHelperText-root": {
                        color: "red",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={!!emailError}
                    helperText={emailError}
                    InputLabelProps={{ shrink: true }}
                    sx={{
                      backgroundColor: "rgba(128, 128, 128, 0.5)",
                      borderRadius: 1,
                      "& .MuiInputBase-input": {
                        fontSize: "1.1rem",
                        color: "black",
                      },
                      "& .MuiFormLabel-root": {
                        color: "black",
                        fontWeight: "bold",
                        fontSize: "1.2rem",
                      },
                      "& .MuiFormHelperText-root": {
                        color: "red",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={!!passwordError}
                    helperText={passwordError}
                    InputLabelProps={{ shrink: true }}
                    sx={{
                      backgroundColor: "rgba(128, 128, 128, 0.5)",
                      borderRadius: 1,
                      "& .MuiInputBase-input": {
                        fontSize: "1.1rem",
                        color: "black",
                      },
                      "& .MuiFormLabel-root": {
                        color: "black",
                        fontWeight: "bold",
                        fontSize: "1.2rem",
                      },
                      "& .MuiFormHelperText-root": {
                        color: "red",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive updates via email."
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "1rem",
                    }}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                color="info"
                sx={{
                  mt: 3,
                  mb: 2,
                  borderColor: "black",
                  color: "black",
                  backgroundColor: "rgba(128, 128, 128, 0.5)", // Gray opaque background
                  borderRadius: 1,
                  "&:hover": {
                    backgroundColor: "rgba(105, 105, 105, 0.7)", // Slightly darker gray on hover
                    color: "white",
                  },
                }}
              >
                Sign Up
              </Button>

              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link
                    component={RouterLink}
                    to="/signin"
                    variant="body2"
                    sx={{ color: "black" }}
                  >
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
        <Copyright sx={{ mt: 5, color: "white" }} />
      </Box>
    </ThemeProvider>
  );
}