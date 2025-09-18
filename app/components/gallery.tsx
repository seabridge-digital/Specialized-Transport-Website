"use client";

import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = Array.from({ length: 17 }, (_, i) => `/gallery${i + 1}.png`);

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-3xl text-white drop-shadow-lg"
      onClick={onClick}
    >
      ▶
    </div>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-3xl text-white drop-shadow-lg"
      onClick={onClick}
    >
      ◀
    </div>
  );
}

export default function Gallery() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto my-10">
      <Slider {...settings}>
        {images.map((src, idx) => (
          <div key={idx} className="w-full flex justify-center">
            <div className="relative w-full max-w-6xl flex items-center justify-center h-[60vh] bg-black">
              <Image
                src={src}
                alt={`Gallery image ${idx + 1}`}
                fill
                className="object-contain mx-auto max-h-[60vh]"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}