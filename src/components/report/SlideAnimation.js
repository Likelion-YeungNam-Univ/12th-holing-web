// ----- Swiper.js 적용 컴포넌트

import { SwiperWrapper } from 'styles/report/SlideItem-styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slides from 'components/report/Slides';

// Swiper 스타일 Import
import 'swiper/css';
import 'swiper/css/navigation';

// 필요모듈 import
import { Navigation } from 'swiper/modules';

export default function SlideAnimation() {
  return (
    <SwiperWrapper>
      <Swiper navigation={true} 
              modules={[Navigation]}
              slidesPerView= {2} // 화면에 보여질 slide 갯수
      >
        {/* TODO : 추후 props로 Slides컴포넌트 연결 예정 */}
        <SwiperSlide><Slides></Slides></SwiperSlide>
        <SwiperSlide><Slides></Slides></SwiperSlide>
        <SwiperSlide><Slides></Slides></SwiperSlide>
        <SwiperSlide><Slides></Slides></SwiperSlide>
        <SwiperSlide><Slides></Slides></SwiperSlide>
      </Swiper>
    </SwiperWrapper>
  );
}


