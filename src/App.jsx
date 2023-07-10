import { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination } from 'swiper';

import './App.css';
import Notice from './components/Notice';
import LotOne from './components/LotOne';
import LotTwo from './components/LotTwo';
import LotThree from './components/LotThree';
import LotFour from './components/LotFour';
import PartnerCompanies from './components/PartnerCompanies';
import ShebaPointLogo from './components/ShebaPointLogo';

function App() {
  const [d, setD] = useState(new Date());
  let year = d.getFullYear();
  let month = d.getMonth();
  let date = d.getDate();
  let hour = d.getHours();
  let minute = d.getMinutes();
  let sec = d.getSeconds();
  if (month <= 9) {
    month = `0` + month;
  }
  if (date <= 9) {
    date = `0` + date;
  }
  if (hour <= 9) {
    hour = `0` + hour;
  }
  if (minute <= 9) {
    minute = `0` + minute;
  }
  if (sec <= 9) {
    sec = `0` + sec;
  }
  setInterval(() => {
    setD(new Date());
  }, 1000);

  return (
    <div className="container">
      <h2 className="text-center">
        <span className="secondary-color">Welcome</span> to Sheba<span className="secondary-color">Point</span>
      </h2>
      <div className="flex justify-between logo-time-section">
        <div className="left-logo">
          <img src="/images/logo.png" alt="logo" />
        </div>
        <div className="time">
          Date: {`${date}/${month}/${year}`} <span className="secondary-color">({`${hour}:${minute}:${sec}`})</span>
        </div>
      </div>

      <div className="flex">
        <div className="w-50 pb-5">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false
            }}
            pagination={{
              clickable: true
            }}
            navigation={false}
            modules={[Autoplay, Pagination]}
            className="mySwiper pb-5"
          >
            <SwiperSlide>
              <LotOne />
            </SwiperSlide>
            <SwiperSlide>
              <LotTwo />
            </SwiperSlide>
            <SwiperSlide>
              <LotThree />
            </SwiperSlide>
            <SwiperSlide>
              <LotFour />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-50">
          <Notice />
          <ShebaPointLogo />
          <p>
            <span>Our Sub Company:</span> <small>Sheba Interior BD, Sheba Collection, Sheba Tours & Travel</small>{' '}
          </p>
          <PartnerCompanies />
        </div>
      </div>
    </div>
  );
}

export default App;
