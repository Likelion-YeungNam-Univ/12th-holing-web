import styled from 'styled-components';

// 공통 속성 변수
const BtnStyles = `
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  width: 496px;
  height: 76px;
  font-size: 25px;
  font-weight: 600;
  line-height: 29.83px;
  text-align: left;
  border-radius: 13px;
  margin: auto;
  margin-bottom: 0px;
`;

export const Header = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 23.87px;
  text-align: center;
  color: #b9bec9;
  margin-top: 69px;
  margin-bottom: 9px;
`;

export const Title = styled.div`
  font-size: 40px;
  font-weight: 600;
  line-height: 47.73px;
  text-align: center;
  margin-bottom: 50px;

  span {
    color: #9180ff;
  }
`;

export const CloseBtn = styled.div`
  ${BtnStyles}
  background: #f5f5f5;
  color: #5643d1;
  border: 1px solid #5643d1;
  /* margin-left: 52px; */
  margin-top: 25px;
  margin-bottom: 40px;
`;

export const ConnectWrapper = styled.div`
  width: 496px;
  min-height: 200px; /* Increase the minimum height */
  border-radius: 30px;
  background: #ebecee;
  padding: 20px 30px;
  /* margin-left: 52px; */
  margin-bottom: 39px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between;
  align-items: center;  */
`;

export const ConnectHeader = styled.div`
  display: block;
  margin-bottom: auto; /* Push UrlWrapper to the bottom */
`;

export const ConnectTitle = styled.div`
  color: #5643d1;
  font-size: 26px;
  font-weight: 700;
`;

export const ConnectDesc = styled.div`
  width: 316px;
  margin-top: 11px;
  margin-bottom: 15px;
`;

export const CodeTitle = styled.div`
  font-size: 40px;
  font-weight: 600;
  text-align: center;
  margin-top: 95px;
`;

export const CodeDesc = styled.div`
  color: #5b5b5b;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  margin-top: 9px;
`;

export const CodeInputBox = styled.input`
  width: 494px;
  /* margin-left: 52px; */
  text-align: left;
  margin-top: 48px;
  border: none;
  border-bottom: 1px solid #b9bec9;
  padding-bottom: 10px;
  font-size: 28px;
  font-weight: 500;
  &::placeholder {
    color: #ddd;
  }
  &:focus {
    outline: none;
  }
`;

export const Wrapper = styled.div`
  width: 600px;
  margin: 0 auto;

  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  height: 100vh;
  margin: 0 auto -100px auto;
`;

export const NextBtn = styled.div`
  cursor: pointer;
  border-radius: 13px;
  background: #9180ff;
  color: #fff;
  text-align: center;
  font-size: 25px;
  font-weight: 600;
  padding: 23px 0px;
  width: 496px;
  /* margin-left: 52px; */
  position: absolute;
  bottom: 66px;
  margin-bottom: 20px;
`;

export const ConnectBtn = styled.img`
  cursor: pointer;
  border-radius: 13px;
  background: #9180ff;
  color: #fff;
  text-align: center;
  font-size: 25px;
  font-weight: 600;
  padding: 23px 0px;
  width: 83px;
  height: 86px;
  display: flex;
  /* margin-left: 52px; */
  bottom: 66px;
`;

export const IntroWrapper = styled.div`
  padding-bottom: 40px;
`;

export const UrlWrapper = styled.div`
  color: #5b5b5b;
  /* display: flex; */
  justify-content: center;
  text-align: center;
  font-size: 17px;
  font-weight: 500;
  border-radius: 8px;
  background: #fff;
  width: 426px;
  height: fit-content;
  padding: 20px;

  margin-top: auto; /* Push UrlWrapper to the bottom */
`;

export const ConnectContainer = styled.div`
  display: flex;
  flex-direction: row;

  gap: 20px; /* Optional: Adjust the spacing between items */

  width: 496px;

  border-radius: 30px;
  background: #ebecee;
  padding: 20px 30px;
  /* margin-left: 52px; */
  margin-bottom: 39px;
  display: flex;
  /* flex-direction: column; */
`;

// export const Container = styled.div`
//   align-items: center;
//   display: flex;
//   flex-direction: column;
// `;
