/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ height: "350px" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardMedia
          component="img"
          height="194"
          sx={{ objectPosition: "center", objectFit: "contain" }}
          image={product.image}
          alt="Paella dish"
        />
        <Box>
          <CardContent>
            <Typography gutterBottom variant="p" component="div">
              {product.title.slice(0, 25) + "..."}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`$ ${product.price}`}
            </Typography>
          </CardContent>
          <CardActions>
            <Link to={`products/${product.id}`}>View</Link>
          </CardActions>
        </Box>
      </Box>
    </Card>
  );
};

export default ProductCard;
