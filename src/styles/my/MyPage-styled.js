import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  margin: 0 auto;
  margin-top: 72px;
  width: 496px;
  height: 102px;
  display: flex;
  align-items: center;
`;
export const ProfileImg = styled.div`
  width: 102px;
  height: 102px;
  background-color: red;
`;
export const NameWrapper = styled.div`
  display: block;
  margin-left: 30px;
`;
export const UserName = styled.div`
  font-size: 32px;
`;
export const PartnerName = styled.div`
  font-size: 18px;
  font-weight: 500;
`;
export const AccountInfoBtn = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 180px; //폰트 나오면 바꿔야 함
`;
export const CreditWrapper = styled.div`
  margin: 0 auto;
  margin-top: 48px;
  width: 496px;
  height: 122px;
  border-radius: 13px;
  border: 1px solid #ddd;
`;
export const HoldCredit = styled.div`
  color: #9180ff;
  font-size: 14px;
  font-weight: 700;
  margin-top: 15px;
  margin-left: 42px;
`;

export const CreditBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 42px;
  margin-top: 7px;
`;

export const NumOfCredit = styled.div`
  color: #5643d1;
  font-size: 32px;
  font-weight: 700;
  line-height: 140%;
`;
export const Credit = styled.div`
  color: #5b5b5b;
  font-size: 18px;
  font-weight: 500;
  line-height: 140%;
  margin-left: 9px;
`;

export const AdImg = styled.img`
  width: 600px;
  height: 373px;
  margin-top: 48px;
`;

export const CreditItemBoxRow = styled.div`
  margin: 0 auto;
  width: 498px;
  display: flex;
  justify-content: center;
  padding: 10px;
  gap: 30px;
`;

export const CreditItemBox = styled.div`
  width: 233px;
  height: 380px;
  border-radius: 13px;
  border-color: black;
`;

export const CreditItem = styled.div`
  width: 233px;
  height: 233px;
  border-radius: 13px;
  border: 1px solid #b9bec9;
  background: #faf9f7;
`;

export const CreditItemTitle = styled.div`
  color: #9180ff;
  font-size: 14px;
  font-weight: 700;
  margin-top: 7px;
`;

export const CreditItemDescription = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.28px;
  margin-top: 5px;
  width: 235px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const CreditItemPrice = styled.div`
  color: #000;
  font-size: 22px;
  font-weight: 600;
  margin-top: 7px;
  width: 235px;
`;

export const CreditItemExchangeBtn = styled.div`
  border-radius: 21px;
  background: #9180ff;

  color: #fff;
  font-size: 15px;
  font-weight: 700;
  line-height: 140%;

  width: 100px;
  height: 29px;

  display: flex;
  padding: 4px 15px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  margin-top: 7px;
`;
