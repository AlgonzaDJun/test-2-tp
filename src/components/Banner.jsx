import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Banner = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="relative max-h-64">
      <Slider {...settings}>
        {data
          ? data.banner.map((item, index) => (
              <div key={index}>
                <img src={item} />
              </div>
            ))
          : null}
      </Slider>
      <div className="absolute text-techno-hijau right-0 mr-2 font-medium text-sm">
        View All <span className="text-black ml-2">{">"}</span>
      </div>
    </div>
  );
};

export default Banner;
