import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 600px;
  background-color: #F5F5F5;
  padding-top: 40px;
`
export const ProfileWrapper = styled.div`
  margin: 0 auto;
  width: 496px;
  height: 102px;
  display: flex;
  align-items: center;
`;
export const ProfileImg = styled.img`
  width: 102px;
  height: 102px;
`;
export const NameWrapper = styled.div`
  display: block;
  margin-left: 30px;
`;
export const UserName = styled.div`
  font-size: 32px;
  font-weight: 700;
`;
export const PartnerName = styled.div`
  font-size: 18px;
  font-weight: 500;
`;
export const AccountInfoBtn = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 180px; //폰트 나오면 바꿔야 함
  cursor: pointer;
`;
export const CreditWrapper1 = styled.div`
  margin: 0 auto;
  margin-top: 48px;
  width: 496px;
  height: 122px;
  border-radius: 13px;
  border: 1px solid #ddd;
  background: #9180ff;
  display: flex;
`;
export const CreditWrapper2 = styled.div`
  margin: 0 auto;
  width: 496px;
  height: 122px;
  border-radius: 13px 13px 0 0;
  border: 1px solid #ddd;
  background: #9180ff;
  display: flex;
`;
export const CreditExpandWrapper = styled.div`
  width: 497px;
  height: 322px;
  border-radius: 13px;
  border: 1px solid #ddd;
  border-bottom: 31px solid #9180ff;
  margin: 0 auto;
  margin-top: 48px;
`;
export const CreditDescription = styled.ul`
  margin-left: 45px;
  margin-top: 25px;
  margin-right: 45px;
`;
export const CreditDescriptionList = styled.li`
  list-style-type: disc;
  color: #5b5b5b;
  font-size: 17px;
  font-weight: 400;
`;
export const CreditBoxCol = styled.div`
  width: 212px;
  margin-left: 42px;
`;
export const HoldCredit = styled.div`
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  margin-top: 27px;
`;
export const CreditBoxRow = styled.div`
  width: 212px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`;
export const CreditImg = styled.img`
  width: 46px;
  height: 46px;
`;
export const NumOfCredit = styled.div`
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  line-height: 140%;
  margin-left: 15px;
`;
export const Credit = styled.div`
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  line-height: 140%;
  margin-left: 3px;
`;
export const CreditToggleDownBtn = styled.img`
  margin-left: 140px;
  margin-top: 34px;
  width: 75px;
  height: 75px;
  cursor: pointer;
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
  gap: 30px;
  margin-top: 40px;
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
  cursor: pointer;
`;
