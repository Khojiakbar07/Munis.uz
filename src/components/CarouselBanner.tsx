import { Carousel } from "antd";
import { useTranslation } from "react-i18next";

import image1 from "../assets/Banner/Banner-1.webp";
import image2 from "../assets/Banner/Banner-2.webp";
import image3 from "../assets/Banner/Banner-3.jpg";
import image4 from "../assets/Banner/Banner-4.jpg";
import image5 from "../assets/Banner/Banner-5.jpg";
import image6 from "../assets/Banner/Banner-6.avif";

const carouselData = [
  { id: 1, title: "carousel.title1", subtitle: "carousel.subtitle1", description: "carousel.description1", img: image2 },
  { id: 2, title: "carousel.title2", subtitle: "carousel.subtitle2", description: "carousel.description2", img: image1 },
  { id: 3, title: "carousel.title3", subtitle: "carousel.subtitle3", description: "carousel.description3", img: image3 },
  { id: 4, title: "carousel.title4", subtitle: "carousel.subtitle4", description: "carousel.description4", img: image4 },
  { id: 5, title: "carousel.title5", subtitle: "carousel.subtitle5", description: "carousel.description5", img: image5 },
  { id: 6, title: "carousel.title5", subtitle: "carousel.subtitle5", description: "carousel.description5", img: image6 },
];

const CarouselBanner = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full items-center justify-center min-h-screen overflow-hidden">
      <Carousel autoplay dotPosition="bottom" className="h-screen">
        {carouselData.map((slide) => (
          <div key={slide.id}>
            <div className="relative w-full h-screen">
              {/* Background Image */}
              <img
                src={slide.img}
                alt={t(slide.title)}
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-opacity-50" />
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 drop-shadow-lg">
                  {t(slide.title)}
                </h1>
                <h2 className="text-xl md:text-3xl text-white mb-4 drop-shadow-md">
                  {t(slide.subtitle)}
                </h2>
                <p className="text-base md:text-lg text-gray-300 mb-4 max-w-xl hidden md:block">
                  {t(slide.description)}
                </p>
                <button className="py-3 px-8 bg-[#17776a] text-white text-lg font-bold rounded-full hover:bg-[#145d4d] transition">
                  {t("carousel.moreInfo", "Batafsil")}
                </button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselBanner;
