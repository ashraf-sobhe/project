"use client";

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Product, useCart } from "../context/CartContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        borderRadius: 0,
        boxShadow: 3,
        overflow: "hidden",
      }}
    >
      <CardMedia
        component="img"
        image={product.image}
        alt={product.name}
        sx={{
          height: 200,
          width: "100%",
          objectFit: "cover",
          transition: "transform 0.3s ease, filter 0.3s ease",
          "&:hover": {
            transform: "scale(1.08)",
            filter: "brightness(1.1)",
          },
        }}
      />

      <CardContent
        sx={{
          flexGrow: 1,
          pt: 2,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h6"
          component="div"
          fontWeight="bold"
          sx={{ mb: 1 }}
        >
          {product.name}
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#F57C00", fontWeight: "bold" }}
        >
          {product.price} ج.م
        </Typography>
      </CardContent>

      <CardActions sx={{ p: 1 }}>
        <Button
          variant="contained"
          fullWidth
          onClick={() => addToCart(product)}
          sx={{
            backgroundColor: "#FFB300",
            color: "#fff",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#F57C00",
            },
          }}
        >
          أضف إلى السلة
        </Button>
      </CardActions>
    </Card>
  );
}
