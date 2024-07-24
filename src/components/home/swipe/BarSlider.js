import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styled from 'styled-components';
import { Navigation, Pagination } from 'swiper/modules';
import MySummary from '../mySummary/MySummary';
import PartnerSummary from '../partnerSummary/PartnerSummary';

// Swiper 모듈 사용 설정
SwiperCore.use([Navigation, Pagination]);

// 스타일 정의
const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: auto;
`;

const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const BarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

const Bar = styled.div`
  width: 100%;
  height: 5px;
  background-color: #ccc;
  margin: 0 5px;
  transition: background-color 0.3s;

  &.active {
    background-color: #007bff;
  }
`;

function BarSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [<MySummary />, <PartnerSummary />];

  return (
    <Container>
      <SliderWrapper>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>{slide}</SwiperSlide>
          ))}
        </Swiper>
      </SliderWrapper>
      <BarContainer>
        {slides.map((_, index) => (
          <Bar key={index} className={index === activeIndex ? 'active' : ''} />
        ))}
      </BarContainer>
    </Container>
  );
}

export default BarSlider;
