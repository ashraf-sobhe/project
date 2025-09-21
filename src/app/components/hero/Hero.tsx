"use client";

import dynamic from "next/dynamic";
import { Box, Typography, Button, Container } from "@mui/material";
import Image from "next/image";

// أيقونات React Icons مع تعطيل SSR
const FaTruck = dynamic(() => import("react-icons/fa").then((mod) => mod.FaTruck), { ssr: false });
const FaUtensils = dynamic(() => import("react-icons/fa").then((mod) => mod.FaUtensils), { ssr: false });
const FaMoneyBillWave = dynamic(() => import("react-icons/fa").then((mod) => mod.FaMoneyBillWave), { ssr: false });

export default function HeroSection() {
  const features = [
    { icon: FaTruck, text: "توصيل سريع" },
    { icon: FaUtensils, text: "أكلات متنوعة" },
    { icon: FaMoneyBillWave, text: "أسعار مناسبة" },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: { xs: "95vh", md: "90vh" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
      }}
    >
      {/* الخلفية */}
      <Image
        src="/hero.jpg"
        alt="مطعم سناك هب"
        fill
        style={{ objectFit: "cover" }}
        priority
      />

      {/* Overlay */}
      <Box sx={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.55)" }} />

      {/* المحتوى */}
      <Container sx={{ position: "relative", zIndex: 2, textAlign: "center", color: "white", px: { xs: 2, md: 0 }, pt: { xs: 4, md: 0 } }}>
        {/* العنوان */}
        <Typography variant="h2" component="h1" sx={{ fontWeight: "bold", mb: { xs: 1, md: 2 }, fontSize: { xs: "2rem", md: "5rem" }, lineHeight: 1.4 }}>
          مطعم <span style={{ color: "#FFB300" }}>سناك هب</span>
        </Typography>

        {/* الوصف */}
        <Typography variant="h6" sx={{ mb: { xs: 3, md: 10 }, maxWidth: "700px", margin: "0 auto", fontSize: { xs: "1rem", md: "1.4rem" }, lineHeight: 1.8, fontWeight: 500 }}>
          حيث يلتقي الطعم الأصيل مع الجودة الفاخرة. تجربة طعام فريدة، خدمة سريعة، وأجواء لا تُنسى.
        </Typography>

        {/* المميزات */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // عمودي على الموبايل، أفقي على الديسكتوب
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: 4, md: 6 },
            mt: { xs: 2, md: 6 },
            mb: { xs: 4, md: 10 },
          }}
        >
          {features.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  flex: "0 0 auto", // يمنع أي تمدد غير مرغوب فيه
                }}
              >
                <IconComponent size={60} color="white" />
                <Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 1 }}>
                  {item.text}
                </Typography>
              </Box>
            );
          })}
        </Box>

        {/* زر الطلب */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FFB300",
            "&:hover": { backgroundColor: "#F57C00" },
            borderRadius: "0px",
            padding: { xs: "14px 35px", md: "18px 40px" },
            fontSize: { xs: "1.1rem", md: "1.25rem" },
            fontWeight: "bold",
            boxShadow: "0px 6px 14px rgba(0,0,0,0.35)",
          }}
        >
          اطلب الآن
        </Button>
      </Container>
    </Box>
  );
}
