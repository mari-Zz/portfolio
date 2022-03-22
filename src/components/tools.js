import Slider from "react-slick";

function Tools() {
  let img = [];
  for (let i = 1; i <= 11; i++) {
    img.push(
      <img
        src={"./img/" + i + ".png"}
        alt={"./img/" + i + ".png"}
        className="img-size"
      />
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
    <>
      <div className="container mt">
        <h1 className="medium-size-font font ms-3">Tools I've used..</h1>
      </div>
      <Slider {...settings}>
        {img.map((img) => {
          return (
            <div key={img} className="tools mt-5 ">
              {img}
            </div>
          );
        })}
      </Slider>
    </>
  );
}

export default Tools;
