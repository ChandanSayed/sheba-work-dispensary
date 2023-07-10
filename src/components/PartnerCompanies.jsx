import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Autoplay } from 'swiper';

const PartnerCompanies = () => {
  const companyLogos = [
    {
      id: 1,
      img: '/images/company-logos/1.png'
    },
    {
      id: 2,
      img: '/images/company-logos/2.png'
    },
    {
      id: 3,
      img: '/images/company-logos/3.png'
    },
    {
      id: 4,
      img: '/images/company-logos/4.png'
    },
    {
      id: 5,
      img: '/images/company-logos/5.png'
    },
    {
      id: 6,
      img: '/images/company-logos/6.png'
    },
    {
      id: 7,
      img: '/images/company-logos/7.png'
    },
    {
      id: 8,
      img: '/images/company-logos/4.png'
    },
    {
      id: 9,
      img: '/images/company-logos/5.png'
    }
  ];
  return (
    <>
      <Swiper
        slidesPerView={4}
        centeredSlides={false}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false
        }}
        loop={true}
        className="mySwiper px-5"
      >
        {companyLogos.map(logo => {
          return (
            // the slider count must be more than 9 for working it properly
            <SwiperSlide key={logo.id}>
              <img className="shared-logos" src={`${logo.img}`} alt="Company Logo" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default PartnerCompanies;
