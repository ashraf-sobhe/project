"use client";
import { Box, Typography, Card, CardContent } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const Testimonials = () => {
  const reviews = [
    {
      text: "أفضل مطعم جربته، الطعام لذيذ والخدمة أكثر من رائعة.",
      name: "أحمد محمد",
    },
    {
      text: "تجربة ممتازة جدًا، الأجواء رائعة والأسعار مناسبة للجميع.",
      name: "سارة علي",
    },
    {
      text: "الجودة ممتازة، المكان مريح وسأكرر الزيارة قريبًا بالتأكيد.",
      name: "خالد حسن",
    },
  ];

  return (
    <Box id="testimonials" sx={{ py: 8, backgroundColor: "#fdf6e3" }}>
      {/* العنوان */}
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        gutterBottom
        sx={{ mb: 6 }}
      >
        رأي عملائنا
      </Typography>

      {/* البوكسات */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 4,
          flexWrap: "wrap",
        }}
      >
        {reviews.map((review, index) => (
          <Box
            key={index}
            sx={{
              flex: "1 1 300px",
              maxWidth: "350px",
            }}
          >
            <Card
              sx={{
                p: 3,
                textAlign: "center",
                height: "100%",
                borderRadius: 4,
                boxShadow: 6,
                backgroundColor: "#fff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardContent>
                {/* النجوم */}
                <Box sx={{ mb: 2 }}>
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} sx={{ color: "#FFD700" }} />
                  ))}
                </Box>

                {/* الكلام */}
                <Typography
                  variant="body1"
                  sx={{
                    fontStyle: "italic",
                    mb: 3,
                    minHeight: "60px",
                  }}
                >
                  "{review.text}"
                </Typography>

                {/* الاسم */}
                <Typography variant="subtitle1" fontWeight="bold">
                  {review.name}
                </Typography>

                {/* زبون دائم */}
                <Typography variant="caption" color="text.secondary">
                  زبون دائم
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Testimonials;
