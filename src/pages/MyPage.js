import React from 'react';
import { useNavigate } from 'react-router-dom';
import MyPageHook from 'hooks/my/MyPageHook';
import {
  ProfileWrapper,
  UserName,
  PartnerName,
  CreditWrapper1,
  CreditWrapper2,
  HoldCredit,
  NumOfCredit,
  Credit,
  CreditBoxRow,
  CreditBoxCol,
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
  CreditImg,
  CreditToggleDownBtn,
  CreditExpandWrapper,
  CreditDescriptionList,
  CreditDescription,
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
import img_profileFemale from 'assets/images/profile_img_female.png';
import img_profileMale from 'assets/images/profile_img_male.png';
import img_credit from 'assets/images/credit_img.svg';
import img_creditToggleDownBtn from 'assets/images/credit_toggle_down_btn.svg';
import img_creditToggleUpBtn from 'assets/images/credit_toggle_up_btn.svg';
import PurchasePopUp from 'components/my/PurchasePopUp';
import { useEffect, useState } from 'react';
import { getUserInfo } from 'apis/my/userInfoGet';

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
      '[메디테라피,벨레다] 속살 괄사&아니카 마사지 오일(100ml)세트',
      '5500'
    ),
    createCreditItem(
      img_creditItem2,
      '콤부차',
      '[랠리] 콤부차(10p) 4종 택 1',
      '3500'
    ),
  ],
  [
    createCreditItem(
      img_creditItem3,
      '요가링',
      '[센시안] 요가링(1p)',
      '3500'
    ),
    createCreditItem(
      img_creditItem4,
      '마시지 도구',
      '[마이롤러] 마이 마사지테라피볼 피넛형',
      '6500'
    ),
  ],
  [
    createCreditItem(
      img_creditItem5,
      '마사지 도구',
      '[마이웨잇] 지압버섯',
      '6500'
    ),
    createCreditItem(
      img_creditItem6,
      '홈트밴드',
      '[마이웨잇] 마이 홈트밴드 세트',
      '18500'
    ),
  ],
  [
    createCreditItem(
      img_creditItem7,
      '마사지 오일',
      '[메디테라피] 인더 포레스트 히노키 바디오일(100ml)',
      '12500'
    ),
    createCreditItem(
      img_creditItem8,
      '수면안대',
      '[바른생각] 눈편한생각(5p)',
      '3500'
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

  const { isModalOpen, selectedItem, openModal, closeModal } = MyPageHook();

  const [nickname, setNickname] = useState('');
  const [mateNickname, setMateNickName] = useState('');
  const [gender, setGender] = useState('');
  const [point, setPoint] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  //계정 정보 클릭 핸들러
  const handleAccountInfoClick = () => {
    navigate('/account-info');
  };

  useEffect(() => {
    getUserInfo()
      .then((response) => {
        const data = response.data;
        setNickname(data.nickname);
        setMateNickName(data.mateNickname);
        setGender(data.gender);
        setPoint(data.point);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <ProfileWrapper>
        <ProfileImg
          src={gender === 'MALE' ? img_profileMale : img_profileFemale}
        ></ProfileImg>
        <NameWrapper>
          <UserName>{nickname} 님</UserName>
          <PartnerName>{mateNickname}님의 짝꿍</PartnerName>
        </NameWrapper>
        <AccountInfoBtn
          src={img_accountInfoBtn}
          onClick={handleAccountInfoClick}
        ></AccountInfoBtn>
      </ProfileWrapper>
      {isExpanded ? (
        <CreditExpandWrapper>
          <CreditWrapper2>
            <CreditBoxCol>
              <HoldCredit>현재 보유 크레딧</HoldCredit>
              <CreditBoxRow>
                <CreditImg src={img_credit}></CreditImg>
                <NumOfCredit>{point}</NumOfCredit>
                <Credit>크레딧</Credit>
              </CreditBoxRow>
            </CreditBoxCol>
            <CreditToggleDownBtn
              src={img_creditToggleUpBtn}
              onClick={toggleExpand}
            ></CreditToggleDownBtn>
          </CreditWrapper2>
          <CreditDescription>
            <CreditDescriptionList>
              코인은 홀링 페이지에서 현금처럼 사용하실 수 있습니다. (배송비
              제외)
            </CreditDescriptionList>
            <CreditDescriptionList>
              짝꿍과의 미션을 통해 크레딧을 받을 수 있습니다.
            </CreditDescriptionList>
            <CreditDescriptionList>
              제품은 교환 협력사에서 발송되는 제품으로, 발송까지 최대 3영업일이
              소요될 수 있습니다.
            </CreditDescriptionList>
          </CreditDescription>
        </CreditExpandWrapper>
      ) : (
        <CreditWrapper1>
          <CreditBoxCol>
            <HoldCredit>현재 보유 크레딧</HoldCredit>
            <CreditBoxRow>
              <CreditImg src={img_credit}></CreditImg>
              <NumOfCredit>{point}</NumOfCredit>
              <Credit>크레딧</Credit>
            </CreditBoxRow>
          </CreditBoxCol>
          <CreditToggleDownBtn
            src={img_creditToggleDownBtn}
            onClick={toggleExpand}
          ></CreditToggleDownBtn>
        </CreditWrapper1>
      )}
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
              <CreditItemPrice>{item.price} 크레딧</CreditItemPrice>
              <CreditItemExchangeBtn onClick={() => openModal(item)}>
                교환하기
              </CreditItemExchangeBtn>
            </CreditItemBox>
          ))}
        </CreditItemBoxRow>
      ))}
      {isModalOpen && (
        <PurchasePopUp
          isOpen={isModalOpen}
          onClose={closeModal}
          selectedItem={selectedItem}
          point={point}
        />
      )}
    </>
  );
}

export default MyPage;
