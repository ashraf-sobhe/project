"use client";

import { useState } from "react";
import { Box, Typography, Tabs, Tab, TextField } from "@mui/material";
import ProductCard from "./ProductCard";
import { foods, drinks, desserts } from "../components/products/data";

const allProducts = [...foods, ...drinks, ...desserts];

export default function ProductTabs() {
  const [tab, setTab] = useState(0);
  const [search, setSearch] = useState("");

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  const getProductsForTab = () => {
    let products = [];
    switch (tab) {
      case 0:
        products = allProducts;
        break;
      case 1:
        products = foods;
        break;
      case 2:
        products = drinks;
        break;
      case 3:
        products = desserts;
        break;
      default:
        products = allProducts;
    }
    return products.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  };

  return (
    <Box id="products" sx={{ px: 2, py: 4 }}>
      <Typography variant="h3" fontWeight="bold" mb={4} align="center">
        قائمة الطعام
      </Typography>

      {/* شريط البحث والتابات */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "stretch", md: "center" },
          justifyContent: "space-between",
          mb: 3,
          gap: 2,
        }}
      >
        <TextField
          variant="outlined"
          placeholder="ابحث عن منتج..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            flex: 1,
            maxWidth: 350,
            "& .MuiOutlinedInput-root": {
              borderRadius: 3,
              boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
            },
            "& .MuiOutlinedInput-input": {
              padding: "10px",
            },
          }}
        />

        <Tabs
          value={tab}
          onChange={handleChange}
          sx={{
            direction: "rtl",
            "& .MuiTab-root": {
              textTransform: "none",
              borderRadius: 2,
              mx: 0.5,
              px: 2,
              py: 1,
              fontWeight: "bold",
              transition: "0.3s",
              "&:hover": { backgroundColor: "#f0f0f0" },
            },
            "& .Mui-selected": {
              backgroundColor: "#ddd",
            },
          }}
        >
          <Tab label="الكل" />
          <Tab label="المأكولات" />
          <Tab label="المشروبات" />
          <Tab label="الحلويات" />
        </Tabs>
      </Box>

      {/* عرض المنتجات باستخدام CSS Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          },
          gap: 3,
          direction: "rtl",
        }}
      >
        {getProductsForTab().map((product) => (
          <Box key={product.name}>
            <ProductCard product={product} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
