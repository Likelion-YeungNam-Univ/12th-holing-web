import React from 'react';
import { useState } from 'react';
import {
  CreditItemTitle,
  CreditItemDescription,
  CreditItemPrice,
  CreditItemExchangeBtn,
  CreditItemWrapper,
  CreditItemImg,
  CreditItemExchangeComment,
  CreditItemExchangeWrapper,
  CreditItemExchangeCheckBtn,
  ExchangedComment,
  TransferComment,
  CloseBtn,
  ExchangeBackground,
  ExchangeImg,
} from 'styles/my/PurchasePopUp-styled';
import img_creditExchangeBtnInactive from 'assets/images/credit_exchange_btn_inactive.svg';
import img_creditExchangeBtnActive from 'assets/images/credit_exchange_btn_active.svg';
import img_creditExchangeBackground from 'assets/images/credit_exchange_background.svg';
import img_creditExchange from 'assets/images/credit_exchange_img.svg';
import { postProduct } from 'apis/my/productPost';

const PuchasePopUpContent = ({ onClose, selectedItem, point }) => {
  const [isExchangeActive, setIsExchangeActive] = useState(false);
  const [isExchanged, setIsExchanged] = useState(false);

  const handleExchangeCheckClick = () => {
    setIsExchangeActive((prev) => !prev);
  };

  const handleExchangeClick = () => {
    // 문자열을 숫자로 변환
    const itemPrice = parseInt(selectedItem.price.replace(/[^0-9]/g, ''), 10);

    if (!isExchangeActive) {
      alert('동의하기 버튼을 체크해주세요.');
      return;
    }
    // 보유 크레딧과 상품 가격 비교
    if (point < itemPrice) {
      alert('보유 크레딧이 부족합니다.');
      return;
    }
    // 교환이 완료된 경우
    setIsExchanged(true);
  };

  const handleClose = () => {
    const product = {
      productPrice: selectedItem.price,
    };

    postProduct(product)
      .then((response) => {
        //console.log('Product exchanged:', response.data);
      })
      .catch((error) => {
        //console.error('Error exchanging product:', error);
      });

    onClose();
  };

  return (
    <>
      {isExchanged ? (
        <>
          <ExchangeBackground
            src={img_creditExchangeBackground}
          ></ExchangeBackground>
          <ExchangeImg src={img_creditExchange}></ExchangeImg>
          <ExchangedComment>
            교환성공!
            <br />
            목표 달성을 축하합니다.
          </ExchangedComment>
          <TransferComment>
            카카오톡 선물하기를 통해 전송되었습니다!
          </TransferComment>
          <CloseBtn onClick={handleClose}>닫기</CloseBtn>
        </>
      ) : (
        <>
          <CreditItemWrapper>
            <CreditItemImg src={selectedItem.img} alt={selectedItem.title} />
            <CreditItemTitle>{selectedItem.title}</CreditItemTitle>
            <CreditItemDescription>
              {selectedItem.description}
            </CreditItemDescription>
            <CreditItemPrice>{selectedItem.price} 크레딧</CreditItemPrice>
            <CreditItemExchangeWrapper>
              <CreditItemExchangeCheckBtn
                src={
                  isExchangeActive
                    ? img_creditExchangeBtnActive
                    : img_creditExchangeBtnInactive
                }
                onClick={handleExchangeCheckClick}
              ></CreditItemExchangeCheckBtn>
              <CreditItemExchangeComment>
                교환을 동의하시겠습니까?
              </CreditItemExchangeComment>
            </CreditItemExchangeWrapper>
          </CreditItemWrapper>
          <CreditItemExchangeBtn onClick={handleExchangeClick}>
            교환하기
          </CreditItemExchangeBtn>
        </>
      )}
    </>
  );
};

export default PuchasePopUpContent;
