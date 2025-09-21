"use client";

import dynamic from "next/dynamic";
import { Box, Typography, Button, Container } from "@mui/material";
import Image from "next/image";

// أيقونات React Icons مع تعطيل SSR لتجنب مشاكل البناء
const FaTruck = dynamic(() => import("react-icons/fa").then((mod) => mod.FaTruck), { ssr: false });
const FaUtensils = dynamic(() => import("react-icons/fa").then((mod) => mod.FaUtensils), { ssr: false });
const FaMoneyBillWave = dynamic(() => import("react-icons/fa").then((mod) => mod.FaMoneyBillWave), { ssr: false });

export default function HeroSection() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "90vh",
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
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.55)",
        }}
      />

      {/* المحتوى */}
      <Container
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          color: "white",
        }}
      >
        {/* العنوان */}
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: "bold",
            mb: 2,
            fontSize: { xs: "2rem", md: "3rem" },
            lineHeight: 1.6,
          }}
        >
          مطعم <span style={{ color: "#FFB300" }}>سناك هب</span>
        </Typography>

        {/* الوصف */}
        <Typography
          variant="h6"
          sx={{
            mb: 10,
            maxWidth: "700px",
            margin: "0 auto",
            fontSize: { xs: "1.1rem", md: "1.4rem" },
            lineHeight: 2,
            fontWeight: 500,
          }}
        >
          حيث يلتقي الطعم الأصيل مع الجودة الفاخرة. تجربة طعام فريدة، خدمة
          سريعة، وأجواء لا تُنسى.
        </Typography>

        {/* المميزات باستخدام FlexBox */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            alignItems: "center",
            gap: 6,
            mt: 6,
            mb: 10,
            textAlign: "center",
          }}
        >
          <Box>
            <FaTruck size={50} color="white" style={{ marginBottom: "16px" }} />
            <Typography variant="subtitle1" fontWeight="bold">
              توصيل سريع
            </Typography>
          </Box>

          <Box>
            <FaUtensils size={50} color="white" style={{ marginBottom: "16px" }} />
            <Typography variant="subtitle1" fontWeight="bold">
              أكلات متنوعة
            </Typography>
          </Box>

          <Box>
            <FaMoneyBillWave size={50} color="white" style={{ marginBottom: "16px" }} />
            <Typography variant="subtitle1" fontWeight="bold">
              أسعار مناسبة
            </Typography>
          </Box>
        </Box>

        {/* زرار الطلب */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FFB300",
            "&:hover": { backgroundColor: "#F57C00" },
            borderRadius: "0px",
            padding: { xs: "20px 50px", md: "18px 40px" },
            fontSize: { xs: "1.35rem", md: "1.25rem" },
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
