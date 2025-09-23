"use client";

import { Box, Typography, Stack, Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";

export default function CustomerService() {
  return (
    <Box
      id="services"
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 3, md: 6 },
        textAlign: "center",
        mt: 8,
        boxShadow: 3,
        background: "linear-gradient(135deg, #f9fafb 0%, #ffffff 100%)",
        direction: "rtl",
      }}
    >
      {/* العنوان */}
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 3 }}>
        خدمة العملاء
      </Typography>

      {/* الوصف */}
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{
          maxWidth: 700,
          mx: "auto",
          mb: 6,
          fontSize: { xs: "1rem", md: "1.2rem" },
          lineHeight: 1.8,
        }}
      >
        نحن هنا دائمًا لخدمتكم على مدار الساعة. يمكنك التواصل معنا عبر الواتساب لأي
        استفسارات أو مساعدة عاجلة، كما يمكنك الاتصال المباشر للتحدث مع أحد
        ممثلي خدمة العملاء بكل سهولة وسرعة. هدفنا هو ضمان راحتكم والإجابة عن
        جميع أسئلتكم في أي وقت.
      </Typography>

      {/* أزرار التواصل */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={4} // المسافة بين الزرارين
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 2 }}
      >
        {/* زر واتساب */}
        <Button
          component="a"
          href="https://wa.me/201234567890"
          target="_blank"
          sx={{
            backgroundColor: "#25D366",
            color: "#fff",
            fontSize: { xs: "0.9rem", sm: "1rem" },
            px: 4,
            py: 1.5,
            borderRadius: 3,
            transition: "0.3s",
            display: "flex",
            alignItems: "center",
            gap: 1.5, // المسافة بين الأيقونة والنص
            "&:hover": {
              backgroundColor: "#1ebe5b",
              transform: "scale(1.05)",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            },
          }}
        >
          <WhatsAppIcon />
          واتساب
        </Button>

        {/* زر التليفون */}
        <Button
          component="a"
          href="tel:201234567890"
          sx={{
            backgroundColor: "#ff7f32",
            color: "#fff",
            fontSize: { xs: "0.9rem", sm: "1rem" },
            px: 4,
            py: 1.5,
            borderRadius: 3,
            transition: "0.3s",
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            "&:hover": {
              backgroundColor: "#e86f22",
              transform: "scale(1.05)",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            },
          }}
        >
          <PhoneIcon />
          اتصل بنا
        </Button>
      </Stack>
    </Box>
  );
}
