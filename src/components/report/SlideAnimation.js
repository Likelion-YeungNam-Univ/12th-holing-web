// ----- Swiper.js 적용 컴포넌트

import { SwiperWrapper } from 'styles/report/SlideItem-styled';
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper 스타일 Import
import 'swiper/css';
import 'swiper/css/navigation';

// 필요모듈 import
import { Navigation } from 'swiper/modules';
import CurrentSlide from './CurrentSlide';
import PastSlide from './PastSlide';

export default function SlideAnimation() {
  return (
    <SwiperWrapper>
      <Swiper navigation={true} 
              modules={[Navigation]}
              slidesPerView= {2} // 화면에 보여질 slide 갯수
              slidesOffsetAfter={40} // 오른쪽 끝에 여백 추가
      >
        {/* TODO : 추후 props로 Slides컴포넌트 연결 예정 */}
        <SwiperSlide><CurrentSlide /></SwiperSlide>
        <SwiperSlide><PastSlide /></SwiperSlide>
        <SwiperSlide><PastSlide /></SwiperSlide>
        <SwiperSlide><PastSlide /></SwiperSlide>
      </Swiper>
    </SwiperWrapper>
  );
}


