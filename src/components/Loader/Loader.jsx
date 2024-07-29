import { Box, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <Box
      height={"100dvh"}
      width={"100%"}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <CircularProgress />
    </Box>
  );
};

export default Loader;
