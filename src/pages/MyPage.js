import React from 'react';
import { useNavigate } from 'react-router-dom';
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
  AdImg,
  AccountInfoBtn,
  ProfileImg,
  NameWrapper,
} from 'styles/my/MyPage-styled';
import img_creditItem1 from 'assets/images/credit_item1.png';
import img_creditItem2 from 'assets/images/credit_item2.png';
import img_creditItem3 from 'assets/images/credit_item3.png';
import img_creditItem4 from 'assets/images/credit_item4.png';
import img_creditItem5 from 'assets/images/credit_item5.png';
import img_creditItem6 from 'assets/images/credit_item6.png';
import img_creditItem7 from 'assets/images/credit_item7.png';
import img_creditItem8 from 'assets/images/credit_item8.png';
import img_ad1 from 'assets/images/advertise_img1.jpg';
import img_ad2 from 'assets/images/advertise_img2.jpg';
import img_ad3 from 'assets/images/advertise_img3.jpg';
import img_ad4 from 'assets/images/advertise_img4.jpg';
import img_accountInfoBtn from 'assets/images/account_info_btn.png';

const createCreditItem = (img, title, description, price) => ({
  img,
  title,
  description,
  price,
});

// 아이템 데이터 배열 생성 함수
const createCreditItems = () => [
  [
    createCreditItem(
      img_creditItem1,
      '괄사&마사지오일',
      '[랠리] 콤부차(10p) 4종 택 1',
      '5500 크레딧'
    ),
    createCreditItem(
      img_creditItem2,
      '콤부차',
      '[메디테라피,벨레다] 속살 괄사&아니카 마사지',
      '3500 크레딧'
    ),
  ],
  [
    createCreditItem(
      img_creditItem3,
      '요가링',
      '[센시안] 요가링(1p)',
      '3500 크레딧'
    ),
    createCreditItem(
      img_creditItem4,
      '마시지 도구',
      '[마이롤러] 마이 마사지테라피볼 피넛형',
      '6500 크레딧'
    ),
  ],
  [
    createCreditItem(
      img_creditItem5,
      '마사지 도구',
      '[마이웨잇] 지압버섯',
      '6500 크레딧'
    ),
    createCreditItem(
      img_creditItem6,
      '홈트밴드',
      '[마이웨잇] 마이 홈트밴드 세트',
      '18500 크레딧'
    ),
  ],
  [
    createCreditItem(
      img_creditItem7,
      '마사지 오일',
      '[메디테라피] 인더 포레스트 히노키 바디오션',
      '12500 크레딧'
    ),
    createCreditItem(
      img_creditItem8,
      '수면안대',
      '[바른생각] 눈편한생각(5p)',
      '3500 크레딧'
    ),
  ],
];

// 아이템 데이터 배열 생성
const creditItems = createCreditItems();

// 광고 이미지 배열
const adImages = [img_ad1, img_ad2, img_ad3, img_ad4];

// 랜덤 광고 이미지 선택 함수
const getRandomAdImage = () => {
  const randomIndex = Math.floor(Math.random() * adImages.length);
  return adImages[randomIndex];
};

function MyPage() {
  const navigate = useNavigate();

  const handleAccountInfoClick = () => {
    navigate('/account-info');
  };

  return (
    <>
      <ProfileWrapper>
        <ProfileImg></ProfileImg>
        <NameWrapper>
          <UserName>홍길동님</UserName>
          <PartnerName>길동홍님의 배우자</PartnerName>
        </NameWrapper>
        <AccountInfoBtn
          src={img_accountInfoBtn}
          onClick={handleAccountInfoClick}
        ></AccountInfoBtn>
      </ProfileWrapper>
      <CreditWrapper>
        <HoldCredit>현재 보유 크레딧</HoldCredit>
        <CreditBox>
          <NumOfCredit>3500</NumOfCredit>
          <Credit>크레딧</Credit>
        </CreditBox>
      </CreditWrapper>
      <AdImg src={getRandomAdImage()} alt="Advertisement"></AdImg>
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
