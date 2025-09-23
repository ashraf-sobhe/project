"use client";
import { Box, Typography, Card, CardContent } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
    {
      text: "المطعم يهتم بأدق التفاصيل والخدمة فوق الممتازة.",
      name: "منة محمود",
    },
    { text: "من أرقى الأماكن اللي زرتها، الأكل ولا أروع.", name: "يوسف علي" },
    { text: "الأسعار ممتازة مقابل الجودة العالية.", name: "داليا سمير" },
  ];

  return (
    <Box
      id="testimonials"
      sx={{
        py: 10,
        px: { xs: 3, md: 6 },
        background: "linear-gradient(180deg, #f9fafb 0%, #ffffff 100%)",
      }}
    >
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

      {/* السلايدر */}
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        style={{ paddingBottom: "60px" }} // المسافة تحت الكروسات للنقاط
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <Card
              sx={{
                p: 3,
                textAlign: "center",
                borderRadius: 4,
                boxShadow: 4,
                backgroundColor: "#fff",
                maxWidth: 350, // نخلي الكارد أصغر
                mx: "auto",
                height: "100%",
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
                  sx={{ fontStyle: "italic", mb: 3, minHeight: "60px" }}
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
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ستايلات للأسهم والنقط */}
      <style jsx global>{`
        /* النقاط (pagination) */
        .swiper-pagination-bullet {
          background: #ffd700 !important;
          opacity: 0.6;
          margin-bottom: 15px !important; /* زيادة المسافة تحت النقاط */
          width: 12px;
          height: 12px;
        }
        .swiper-pagination-bullet-active {
          background: #ffd700 !important;
          opacity: 1;
          transform: scale(1.4);
        }

        /* الأسهم (navigation arrows) - شكل عصري */
        .swiper-button-next,
        .swiper-button-prev {
          background-color: rgba(255, 215, 0, 0.1); /* خلفية دائرية خفيفة */
          color: #ffd700 !important;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          top: 50%;
          transform: translateY(-50%) scale(1);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background-color: #ffd700;
          color: #fff !important;
          transform: translateY(-50%) scale(1.1);
        }
        .swiper-button-next {
          right: -30px; /* إبعاد أكثر عن الكروسات */
        }
        .swiper-button-prev {
          left: -30px; /* إبعاد أكثر عن الكروسات */
        }
      `}</style>
    </Box>
  );
};

export default Testimonials;
