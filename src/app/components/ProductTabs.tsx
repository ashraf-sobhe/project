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
      <Typography
        variant="h6"
        color="text.secondary"
        mb={4}
        align="center"
        sx={{
          fontSize: { xs: "1.1rem", md: "1.3rem" },
          fontWeight: 400,
        }}
      >
        اكتشف تشكيلتنا المتنوعة من المأكولات والمشروبات والحلويات الشهية
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
        <Tabs
          value={tab}
          onChange={handleChange}
          sx={{
            flex: 1,
            direction: "rtl",
            "& .MuiTabs-indicator": { display: "none" },
            "& .MuiTabs-flexContainer": {
              justifyContent: { xs: "space-between", md: "flex-start" }, // صغير على الموبايل، عادي على الديسكتوب
              gap: { xs: 0, md: 2 }, // أقل فراغ على الموبايل، فراغ أكبر على الديسكتوب
            },
            "& .MuiTab-root": {
              flex: { xs: "1 1 auto", md: "initial" }, // توسّع تلقائي على الموبايل، حجم طبيعي على الديسكتوب
              minWidth: { xs: 70, md: 160 }, // أصغر على الموبايل
              minHeight: { xs: 40, md: 70 }, // أصغر على الموبايل
              fontSize: { xs: "0.7rem", md: "1.1rem" }, // أصغر على الموبايل
              textTransform: "none",
              border: "1px solid #eee",
              borderRadius: 0,
              fontWeight: "bold",
              color: "#555",
              transition: "0.3s",
              "&:hover": {
                backgroundColor: "rgba(255, 179, 0, 0.08)",
                color: "#FF9800",
              },
            },
            "& .Mui-selected": {
              backgroundColor: "rgba(255, 179, 0, 0.15)",
              borderColor: "#FF9800",
              color: "#FF9800",
              boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
            },
          }}
        >
          <Tab label="الكل" />
          <Tab label="المأكولات" />
          <Tab label="المشروبات" />
          <Tab label="الحلويات" />
        </Tabs>

        {/* البحث */}
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
              "& fieldset": { borderColor: "#ddd" },
              "&:hover fieldset": { borderColor: "#FF9800" },
              "&.Mui-focused fieldset": {
                borderColor: "#FF9800",
                borderWidth: 2,
              },
            },
            "& .MuiOutlinedInput-input": { padding: "10px" },
          }}
        />
      </Box>

      {/* عرض المنتجات */}
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
