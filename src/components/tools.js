import Slider from "react-slick";
import { useTranslation } from "react-i18next";

function Tools({ currentLanguage }) {
  const { t } = useTranslation();

  let img = [];
  for (let i = 1; i <= 11; i++) {
    img.push(
      <img src={"./img/tools/" + i + ".png"} alt={i} className="img-size" />
    );
  }

  let settings = {
    infinite: true,
    speed: 1000,
    cssEase: "linear",
    slidesToShow: 7,
    autoplay: true,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="overflow-hidden">
      <div className="container mt">
        <h1
          className={`medium-size-font ms-3 heading-color ${
            currentLanguage === "en" ? "heading-font" : "heading-font-ge"
          }`}
        >
          {t("tools")}
        </h1>
      </div>
      <Slider {...settings}>
        {img.map((img) => {
          return (
            <div key={img} className="tools mt-2 shadow">
              {img}
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Tools;
