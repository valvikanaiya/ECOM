import { Box, Button, CardMedia, Chip, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "@utils/axious";
import { api } from "@utils/api";

const ViewPorduct = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const getProduct = async () => {
    const result = await axiosInstance.get(`${api.getProduct}/${id}`);
    setProduct(result.data);
  };

  useEffect(() => {
    getProduct();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return (
    <Box p={2}>
      <Box component="aside">
        {product ? (
          <Grid container columnSpacing={2}>
            <Grid item xs={6}>
              <Box>
                <CardMedia
                  component="img"
                  width={"100%"}
                  height={"400px"}
                  image={product.image}
                  sx={{ objectPosition: "center", objectFit: "contain" }}
                  alt={product.title}></CardMedia>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{display:"flex",gap:2}}>
                <Typography color="text.secondary">${product.price}</Typography>
                <Chip label={product?.category} size="small" />
              </Box>
              <Typography mt={1} variant="h5" color="text.primary">
                {product.title}
              </Typography>
              <Typography mt={2} variant="body2" color="text.secondary">
                {product.description}
              </Typography>
              <Box mt={2} sx={{ display: "flex", gap: 2 }}>
                <Button variant="contained">Update</Button>
                <Button variant="outlined" color="error">
                  Delete
                </Button>
              </Box>
            </Grid>
          </Grid>
        ) : (
          <Box>
            <h1>No Product Found. </h1>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ViewPorduct;
