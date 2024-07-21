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
  CreditItemBoxRow,
  CreditItemTitle,
  CreditItemDescription,
  CreditItemExchangeBtn,
  CreditItemPrice,
  CreditItem,
} from '../style/MyPage-styled';
import img_creditItem1 from '../assets/images/credit_item1.png';
import img_creditItem2 from '../assets/images/credit_item2.png';
import img_creditItem3 from '../assets/images/credit_item3.png';
import img_creditItem4 from '../assets/images/credit_item4.png';
import img_creditItem5 from '../assets/images/credit_item5.png';
import img_creditItem6 from '../assets/images/credit_item6.png';
import img_creditItem7 from '../assets/images/credit_item7.png';
import img_creditItem8 from '../assets/images/credit_item8.png';

// 아이템 데이터 배열
const creditItems = [
  [
    {
      img: img_creditItem1,
      title: '괄사&마사지오일',
      description: '[랠리] 콤부차(10p) 4종 택 1',
      price: '5500 크레딧',
    },
    {
      img: img_creditItem2,
      title: '콤부차',
      description: '[메디테라피,벨레다] 속살 괄사&아니카 마사지',
      price: '3500 크레딧',
    },
  ],
  [
    {
      img: img_creditItem3,
      title: '요가링',
      description: '[센시안] 요가링(1p)',
      price: '3500 크레딧',
    },
    {
      img: img_creditItem4,
      title: '마시지 도구',
      description: '[마이롤러] 마이 마사지테라피볼 피넛형',
      price: '6500 크레딧',
    },
  ],
  [
    {
      img: img_creditItem5,
      title: '마사지 도구',
      description: '[마이웨잇] 지압버섯',
      price: '6500 크레딧',
    },
    {
      img: img_creditItem6,
      title: '홈트밴드',
      description: '[마이웨잇] 마이 홈트밴드 세트',
      price: '18500 크레딧',
    },
  ],
  [
    {
      img: img_creditItem7,
      title: '마사지 오일',
      description: '[메디테라피] 인더 포레스트 히노키 바디오션',
      price: '12500 크레딧',
    },
    {
      img: img_creditItem8,
      title: '수면안대',
      description: '[바른생각] 눈편한생각(5p)',
      price: '3500 크레딧',
    },
  ],
];

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
      {creditItems.map((row, rowIndex) => (
        <CreditItemBoxRow key={rowIndex}>
          {row.map((item, itemIndex) => (
            <CreditItemBox key={itemIndex}>
              <CreditItem>
                <img src={item.img} alt={item.title} />
              </CreditItem>
              <CreditItemTitle>{item.title}</CreditItemTitle>
              <CreditItemDescription>{item.description}</CreditItemDescription>
              <CreditItemPrice>{item.price}</CreditItemPrice>
              <CreditItemExchangeBtn>교환하기</CreditItemExchangeBtn>
            </CreditItemBox>
          ))}
        </CreditItemBoxRow>
      ))}
    </>
  );
}

export default MyPage;
