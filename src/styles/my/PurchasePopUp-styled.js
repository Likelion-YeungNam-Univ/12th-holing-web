import styled from 'styled-components';

export const CreditItemWrapper = styled.div`
  width: 233px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 74px;
  padding-top: 34px;
`;
export const CreditItemImg = styled.img``;
export const CreditItemTitle = styled.div`
  color: #9180ff;
  font-size: 14px;
  font-weight: 700;
  margin-top: 13px;
`;
export const CreditItemDescription = styled.div`
  width: 233px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.28px;
  margin-top: 5px;
  text-align: center;
`;
export const CreditItemPrice = styled.div`
  font-size: 22px;
  font-weight: 600;
  margin-top: 7px;
`;
export const CreditItemExchangeWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: center;
`;
export const CreditItemExchangeCheckBtn = styled.img`
  width: 31px;
  height: 32px;
`;
export const CreditItemExchangeComment = styled.div`
  font-size: 16px;
  font-weight: 500px;
  margin-left: 11px;
`;
export const CreditItemExchangeBtn = styled.button`
  border-radius: 13px;
  font-size: 23px;
  border: none;
  width: 302px;
  height: 53px;
  font-weight: 600;
  background: #9180ff;
  color: #fff;
  margin-left: 39px;
  margin-top: 23px;
  cursor: pointer;
`;
export const ExchangedComment = styled.div`
  color: #000;
  text-align: left;
  font-size: 23px;
  font-weight: 700;
  width: 263px;
  margin: 0 auto;
  margin-top: 94px;
`;
export const TransferComment = styled.div`
  margin: 0 auto;
  margin-top: 9px;
  width: 263px;
  color: #5b5b5b;
  font-size: 13px;
  font-weight: 500;
`;
export const CloseBtn = styled.div`
  width: 302px;
  height: 53px;
  border-radius: 13px;
  background: #e3dfff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #5643d1;
  font-size: 23px;
  font-weight: 600;
  margin: 0 auto;
  margin-top: 29px;
  cursor: pointer;
`;
export const ExchangeBackground = styled.img`
  position: relative;
`;
export const ExchangeImg = styled.img`
  position: absolute;
  top: 151px;
  left: 42px;
`;