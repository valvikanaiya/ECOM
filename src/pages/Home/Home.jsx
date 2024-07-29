import { useEffect, useState } from "react";
import axiosInstance from "../../utils/axious";
import {
  Box,
  Fab,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { api } from "@utils/api";
import ProductCard from "@components/ProductCard/ProductCard";
import AddProduct from "@components/AddProduct/AddProduct";
import Loader from "@components/Loader/Loader";
import { ProductContainer } from "./Home.style";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setPoducts] = useState([]);
  const [sort, setSort] = useState(null);

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const result = await axiosInstance.get(api.allProducrs, {
        params: { sort },
      });
      setPoducts(result.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setSort(e.target.value);
  };

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort]);

  if (isLoading) return <Loader />;

  return (
    <Box p={2} sx={{ maxHeight: "100dvh", overflowY: "auto" }}>
      <Box mb={2}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Sort</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sort}
            label="Sort"
            onChange={handleChange}>
            <MenuItem value={null}>Ascending</MenuItem>
            <MenuItem value={"desc"}>Descending</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <ProductContainer mt={2} container spacing={2}>
        {products &&
          products.length > 0 &&
          products.map((item) => (
            <Grid key={item.title} xs={4} item>
              <ProductCard product={item} />
            </Grid>
          ))}
      </ProductContainer>
      <Fab
        color="primary"
        aria-label="add"
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
        }}>
        <AddProduct />
      </Fab>
    </Box>
  );
};

export default Home;
