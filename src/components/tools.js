import Slider from "react-slick";

function Tools() {
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
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },

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
        <h1 className="medium-size-font heading-font ms-3 heading-color">
          Tools I've used..
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
