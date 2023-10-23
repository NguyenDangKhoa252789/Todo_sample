import Navbar from "./navbar";
import { Box, Grid } from "@components/mui-components";
import Header from "./header";
import Footer from "./footer";
const MainLayout = (props) => {
  const { children } = props ?? {};
  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={2}>
          <Navbar />
        </Grid>
        <Grid item xs={10}>
          <Box>{children}</Box>
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </Box>
  );
};
export default MainLayout;
