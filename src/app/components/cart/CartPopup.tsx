"use client";

import { Box, Typography, IconButton, Divider, Button, Paper } from "@mui/material";
import { Add, Remove, Close } from "@mui/icons-material";
import { useCart } from "../../context/CartContext";

interface CartPopupProps {
  onClose: () => void;
}

export default function CartPopup({ onClose }: CartPopupProps) {
  const { cart, incrementQuantity, decrementQuantity, removeFromCart } = useCart();

  const total = cart.reduce((sum, p) => sum + (p.price * (p.quantity || 1)), 0);

  return (
    <Paper
      sx={{
        position: "absolute",
        top: 60,
        right: 20,
        width: 350,
        maxHeight: 500,
        overflowY: "auto",
        p: 2,
        boxShadow: 6,
        zIndex: 50,
      }}
    >
      {/* رأس البوب أب */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6" fontWeight="bold">
          السلة
        </Typography>
        <IconButton onClick={onClose}>
          <Close />
        </IconButton>
      </Box>

      <Divider sx={{ mb: 2 }} />

      {/* قائمة المنتجات */}
      {cart.length === 0 ? (
        <Typography align="center">السلة فارغة</Typography>
      ) : (
        cart.map((product) => (
          <Box
            key={product.id}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            <Box>
              <Typography fontWeight="bold">{product.name}</Typography>
              <Typography color="text.secondary">{product.price} ج.م</Typography>
            </Box>

            {/* عداد الكمية */}
            <Box display="flex" alignItems="center">
              <IconButton onClick={() => decrementQuantity(product.id)} size="small">
                <Remove />
              </IconButton>
              <Typography mx={1}>{product.quantity}</Typography>
              <IconButton onClick={() => incrementQuantity(product.id)} size="small">
                <Add />
              </IconButton>
            </Box>

            <Box>
              <Typography>{(product.price * (product.quantity || 1)).toFixed(2)} ج.م</Typography>
            </Box>

            {/* زر حذف */}
            <Button
              color="error"
              size="small"
              onClick={() => removeFromCart(product.id)}
              sx={{ ml: 1 }}
            >
              حذف
            </Button>
          </Box>
        ))
      )}

      <Divider sx={{ mt: 2, mb: 2 }} />

      {/* المجموع الكلي */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography fontWeight="bold">الإجمالي:</Typography>
        <Typography fontWeight="bold">{total.toFixed(2)} ج.م</Typography>
      </Box>

      {/* زر تأكيد الطلب */}
      <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        تأكيد الطلب
      </Button>
    </Paper>
  );
}
