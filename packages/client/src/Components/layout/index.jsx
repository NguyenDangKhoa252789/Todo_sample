import { Box, Grid } from "@components/mui-components";
import Header from "./header";
import Footer from "./footer";
import { CssBaseline } from "@mui/material";
const MainLayout = (props) => {
  const { children } = props ?? {};
  return (
    <Box>
      <CssBaseline />
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ minHeight: "37rem" }}>{children}</Box>
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </Box>
  );
};
export default MainLayout;
