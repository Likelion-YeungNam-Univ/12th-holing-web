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
import styled from 'styled-components';
import PartnerSummary from '../components/home/partnerSummary/PartnerSummary';

const SwiperWrapper = styled.div`
  .swiper-scrollbar {
    border-radius: 2px;
    background: var(--Gray_1, #ddd);
    height: 7px; /* 스크롤바의 높이 */

    width: 157px; /* 스크롤바의 전체 너비를 컨테이너의 너비에 맞게 설정 */
    position: absolute; /* 스크롤바를 컨테이너의 하단에 고정 */
    bottom: 0;

    left: 50%; /* 중앙 정렬을 위한 위치 설정 */
    transform: translateX(-50%); /* 중앙 정렬 */
  }

  .swiper-scrollbar-drag {
    border-radius: 2px;
    background: var(--Main_p1, #9180ff);
    height: 7px; /* 드래그 부분의 높이 */
    width: 30px; /* 드래그 부분의 너비 */
  }
`;

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
      <SymptomTest />
      <MedicineNote />
      <Mission />
    </Wrapper>
  );
}

export default Home;
