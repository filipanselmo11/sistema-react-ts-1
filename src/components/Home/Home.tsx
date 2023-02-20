import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Home = () => {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Box sx={{ width: "100%", marginInline: '34%'}}>
        <Typography variant="h1">
          Bem Vindo a Home Page
        </Typography>
      </Box>
    </Grid>
  );
};

export default Home;
