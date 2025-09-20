"use client";
import Hero from "./components/hero/Hero";
import { Box, Typography } from "@mui/material";
import SearchBar from "./components/SearchBar";
import ProductTabs from "./components/ProductTabs";
import AboutSection from "./components/about/AboutSection";

export default function Home() {
  return (
    <>
      {/* سيكشن الترحيب */}
      <Hero />

      {/* سيكشن قائمة الطعام */}
      <Box sx={{ p: 4, textAlign: "center" }}>
       
        {/* التابات مع المنتجات */}
        <ProductTabs />
        <AboutSection />
      </Box>
    </>
  );
}
