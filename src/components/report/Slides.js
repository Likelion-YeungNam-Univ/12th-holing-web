import React from 'react'
import {ContentWrapper, SlideTop, SlideBottom, Week, MoreBtn, Rank, OverView, Content, } from '../../styles/report/SlideItem-styled';

function Slides() {
  return (
    <>
     {/* 현재 주차 컴포넌트 */}
      <ContentWrapper>
          <Content>
              <SlideTop>
                <Week>몇주차</Week> 
                <MoreBtn>더보기</MoreBtn> 
              </SlideTop> 
              <SlideBottom>
                <Rank>Top1</Rank> 
                <OverView>지난주보다~~해요</OverView>
              </SlideBottom> 
          </Content>
      </ContentWrapper>

     {/* TODO : 이전주차 컴포넌트 */}
    </>
  )
}
export default Slides;
