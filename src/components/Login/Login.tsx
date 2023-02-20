// import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { TextField } from "@mui/material";

const Login = () => {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Card sx={{ width: 600 }}>
        <CardContent sx={{
          justifyContent: "center",
          alignItems: "center",
        }}>
          <TextField sx={{ justifyContent: "center", alignItems: "center"}} id="outlined-basic" label="email" variant="outlined" />
          <p></p>
          <TextField id="outlined-basic" label="senha" variant="outlined" />
        </CardContent>
        <CardActions>
          <Button href="/home" size="medium">Login</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Login;
