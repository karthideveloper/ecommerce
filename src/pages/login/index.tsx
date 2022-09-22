import { Button, Grid, TextField } from "@mui/material"
import { FC } from "react"
import { LoginContainer } from "./styles"

const Login: FC = () => {
    return (
        <LoginContainer>
            <Grid container className="login-wrapper">
                <Grid item className="login">
                    <TextField />
                    <TextField />
                    <Button variant="contained">Contained</Button>
                </Grid>
            </Grid>
        </LoginContainer>)
}
export default Login