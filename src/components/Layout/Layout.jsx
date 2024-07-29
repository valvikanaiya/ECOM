import { Suspense } from "react";
import { Box, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Loader from "../Loader/Loader";

const Layout = () => {
  return (
    <Box
      bgcolor={"background.default"}
      container
      component="main"
      sx={{ height: "100vh" }}>
      <Grid height={"100dvh"} container columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={3} bgcolor={"#263238"}>
          <Navigation />
        </Grid>
        <Grid item xs={9}>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Layout;
