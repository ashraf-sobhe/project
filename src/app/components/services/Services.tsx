"use client";
import { Box, Typography, Button, Stack } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";

export default function CustomerService() {
  return (
    <Box
      sx={{
        py: 10,
        px: 3,
        backgroundColor: "#fdf6e3",
        textAlign: "center",
        mt: 8, // مسافة تفصل السيكشن عن اللي فوقه
      }}
    >
      {/* العنوان */}
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ mb: 3 }}
      >
        خدمة العملاء
      </Typography>

      {/* الوصف */}
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ maxWidth: 600, mx: "auto", mb: 3 }}
      >
        نحن هنا دائمًا لخدمتكم، يمكنك التواصل معنا عبر الواتساب أو الاتصال المباشر للحصول على أي مساعدة أو استفسار.
      </Typography>

      {/* الأزرار */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={3}
        justifyContent="center"
        alignItems="center"
      >
        {/* زر الواتساب */}
        <Button
          variant="contained"
          size="large"
          startIcon={<WhatsAppIcon />}
          sx={{
            backgroundColor: "#25D366",
            "&:hover": { backgroundColor: "#1ebe5b" },
            px: 4,
            py: 1.5,
            fontSize: "1rem",
            borderRadius: 3,
            minWidth: 220,
          }}
          href="https://wa.me/201234567890" // غيّر الرقم هنا
          target="_blank"
        >
          تحدث معنا عبر الواتساب
        </Button>

        {/* زر الاتصال */}
        <Button
          variant="contained"
          size="large"
          startIcon={<PhoneIcon />}
          sx={{
            backgroundColor: "#ff7f32",
            "&:hover": { backgroundColor: "#e86f22" },
            px: 4,
            py: 1.5,
            fontSize: "1rem",
            borderRadius: 3,
            minWidth: 220,
          }}
          href="tel:201234567890" // غيّر الرقم هنا
        >
          اتصل بنا مباشرة
        </Button>
      </Stack>
    </Box>
  );
}
