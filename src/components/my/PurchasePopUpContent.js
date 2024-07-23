import React from 'react';
import {
  CreditItemTitle,
  CreditItemDescription,
  CreditItemPrice,
  CreditItemExchangeBtn,
  CreditItemWrapper,
  CreditItemImg,
} from 'styles/my/PurchasePopUp-styled';

const PuchasePopUpContent = ({ onClose, selectedItem }) => {
  return (
    <>
      <CreditItemWrapper>
        <CreditItemImg src={selectedItem.img} alt={selectedItem.title} />
        <CreditItemTitle>{selectedItem.title}</CreditItemTitle>
        <CreditItemDescription>
          {selectedItem.description}
        </CreditItemDescription>
        <CreditItemPrice>{selectedItem.price}</CreditItemPrice>
      </CreditItemWrapper>
      <CreditItemExchangeBtn>교환하기</CreditItemExchangeBtn>
    </>
  );
};

export default PuchasePopUpContent;
