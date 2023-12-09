import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./styles2.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { url } from "../../service/url";

const Gallery2 = ({ data }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="mb-12">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          margin: "20px 0",
        }}
        spaceBetween={10}
        // navigation={true}
        pagination={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {data?.product?.map((c, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-[100%] h-[300px] md:h-[503px]"
            >
              <img
                className="rounded-md h-full w-full "
                src={c?.img}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <div className="w-[100%]">
        {data?.product?.map((c, index) => (
          <SwiperSlide key={index}>
            <div className="h-[100px] md:h-[180px]">
              <img className="rounded-md h-full object-cover w-[260px]" src={c?.img} />
            </div>
          </SwiperSlide>
        ))}
        </div>
      </Swiper>

    </div>
  );
};

export default Gallery2;
