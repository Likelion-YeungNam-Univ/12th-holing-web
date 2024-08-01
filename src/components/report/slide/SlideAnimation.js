// ----- Swiper.js 적용 컴포넌트

import { SwiperWrapper } from 'styles/report/SlideItem-styled';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';  // Swiper 스타일 Import

// 필요모듈 import
import CurrentSlide from './CurrentSlide';
import PastSlide from './PastSlide';

function SlideAnimation({reportSummary}) {

  // TODO : 짝꿍 리포트 요약 조회 HOOK 추가

  return (
    <SwiperWrapper>
      <Swiper
        slidesPerView={2} // 화면에 보여질 slide 갯수
        slidesOffsetAfter={40} // 오른쪽 끝에 여백 추가
      >

      {reportSummary.map((report, index) => (
        // TODO : 짝꿍은 더보기 컴포넌트 제거
        <SwiperSlide key={report.reportId}>
          {index === 0 ? (
            <CurrentSlide reportId={report.reportId} weekOfMonth={report.weekOfMonth} month={report.month} title={report.top1Report.title}/>  
          ) : (
            <PastSlide reportId={report.reportId} weekOfMonth={report.weekOfMonth} month={report.month} title={report.top1Report.title}/>
          )}
        </SwiperSlide>
      ))}
        
      </Swiper>
    </SwiperWrapper>
  );
}

export default SlideAnimation;