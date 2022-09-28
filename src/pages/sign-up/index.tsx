import { Button, Grid, TextField } from "@mui/material";
import { FC } from "react";
import { LoginContainer } from "../login/styles";

const SignUp: FC = () => {
  return (
    <LoginContainer>
      <Grid container className="login-wrapper">
        <Grid item className="login">
          <TextField placeholder="First Name" />
          <TextField placeholder="Last Name" />
          <TextField placeholder="Email" />
          <TextField placeholder="Password" />
          <TextField placeholder="Confirm Password" />
          <Button variant="contained">Login</Button>
        </Grid>
      </Grid>
    </LoginContainer>
  );
};

export default SignUp;
