import React from 'react';
import {
  ProfileWrapper,
  UserName,
  PartnerName,
  CreditWrapper,
  HoldCredit,
  NumOfCredit,
  Credit,
  CreditBox,
  CreditItemBox,
  CreditItemTitle,
  CreditItemDescription,
  CreditItemExchangeBtn,
  CreditItemPrice,
  CreditItem,
  CreditItemBoxRow,
} from '../style/MyPage-styled';

function MyPage() {
  return (
    <>
      <ProfileWrapper>
        <UserName>홍길동님</UserName>
        <PartnerName>길동홍님의 배우자</PartnerName>
      </ProfileWrapper>
      <CreditWrapper>
        <HoldCredit>현재 보유 크레딧</HoldCredit>
        <CreditBox>
          <NumOfCredit>3500</NumOfCredit>
          <Credit>크레딧</Credit>
        </CreditBox>
      </CreditWrapper>
      <CreditItemBoxRow>
        <CreditItemBox>
          <CreditItem></CreditItem>
          <CreditItemTitle>괄사&마사지오일</CreditItemTitle>
          <CreditItemDescription>
            [랠리] 콤부차(10p) 4종 택 1
          </CreditItemDescription>
          <CreditItemPrice>5500 크레딧</CreditItemPrice>
          <CreditItemExchangeBtn>교환하기</CreditItemExchangeBtn>
        </CreditItemBox>
        <CreditItemBox>
          <CreditItem></CreditItem>
          <CreditItemTitle>콤부차</CreditItemTitle>
          <CreditItemDescription>
            [메디테라피,벨레다] 속살 괄사&아니카 마사지
          </CreditItemDescription>
          <CreditItemPrice>3500 크레딧</CreditItemPrice>
          <CreditItemExchangeBtn>교환하기</CreditItemExchangeBtn>
        </CreditItemBox>
      </CreditItemBoxRow>
    </>
  );
}

export default MyPage;
