import React from 'react';
import MySummary from 'components/home/mySummary/MySummary';
import SymptomTest from 'components/home/symptomTest/SymptomTest';
import MedicineNote from 'components/home/medicineNote/MedicineNote';
import { Wrapper } from 'styles/home/Home-styled';
import Mission from 'components/home/mission/Mission';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';
import PartnerSummary from 'components/home/partnerSummary/PartnerSummary';
import { SwiperWrapper } from 'styles/home/Swiper-styled';

function Home() {
  return (
    <Wrapper>
      <SwiperWrapper>
        <Swiper
          slidesPerView={1} // 화면에 보여질 slide 갯수
          spaceBetween={10} // 슬라이드 간의 간격
          scrollbar={{ draggable: true }} // 스크롤바 설정
          modules={[Scrollbar]} // Swiper 모듈 적용
        >
          <SwiperSlide>
            <MySummary />
          </SwiperSlide>
          <SwiperSlide>
            <PartnerSummary />
          </SwiperSlide>
        </Swiper>
      </SwiperWrapper>
      {/* <SymptomTest /> */}

      <MedicineNote />
      <Mission />
    </Wrapper>
  );
}

export default Home;
