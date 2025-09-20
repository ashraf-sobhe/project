"use client";

import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";
import { Product, useCart } from "../context/CartContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <Card
      sx={{
        width: 250,
        height: 370,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        borderRadius: 3,
        boxShadow: 3,
        transition: "transform 0.2s, box-shadow 0.2s",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: 6,
        },
      }}
    >
      <CardMedia
        component="img"
        image={product.image}
        alt={product.name}
        sx={{
          height: 220,
          width: "100%",
          objectFit: "cover",
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
        }}
      />

      <CardContent sx={{ flexGrow: 1, pt: 1 }}>
        <Typography variant="h6" component="div" fontWeight="bold">
          {product.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {product.price} ج.م
        </Typography>
      </CardContent>

      <CardActions sx={{ p: 1 }}>
      <Button
  variant="contained"
  fullWidth
  onClick={() => addToCart(product)}
  sx={{
    backgroundColor: "#d2b48c", // بيج غامق
    color: "#fff",
    "&:hover": {
      backgroundColor: "#9c7b4c", // أغمق شوية عند الهوفر
    },
  }}
>
  أضف إلى السلة
</Button>
      </CardActions>
    </Card>
  );
}
