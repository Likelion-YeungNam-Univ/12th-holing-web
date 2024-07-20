import styled, { css } from 'styled-components';
import LeftImg from 'assets/images/report_left.png';
import CenterImg from 'assets/images/report_center.png';
import RightImg from 'assets/images/report_right.png';


// 공통속성 스타일링
const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GotoTestWrapper = styled.div`
  width: 100%;
  background-color: #F5F5F5;
  padding: 28px;
  margin-top: 20px;
`
export const TopTitle = styled.p`
  font-size: 32px;
  font-weight: 700;
  line-height: 44px;
  text-align: left;
  padding-top: 20px;
`
export const TitleText = styled.div`
  width: 100%;
`
export const HigLight = styled.span`
  font-size: 32px;
  font-weight: 700;
  line-height: 44px;
  color: #9180FF;  
  text-decoration: underline;
  text-underline-offset : 5px;
`

export const IconsWrapper = styled.div`
  ${flexCenter}
  width: 496px;
  height: 147px;
  gap: 45px;
  margin: 28px auto;
`

// 버튼 공통 스타일링
const btnStyle = css`
  ${flexCenter};
  gap: 0px;
  border-radius: 13px;
  border: 1px solid #ADA1FF;
  opacity: 0px;
  background-color: #E4E0FF;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px 0;
  position: relative; // 배경 이미지를 위해 상대 위치 지정
`;
// 공통 이미지 스타일링
const IconImage = css`
  background-size: 110%;
  opacity: 0.30;
  position: absolute;
  /* background-repeat: no-repeat; */
`;


// 왼쪽아이콘
export const LeftIcon = styled.div`
  ${btnStyle}
  width: 102px;
  height: 97px;
  overflow: hidden;
`;
export const LeftIconImage = styled.div`
  background-image: url(${LeftImg});
  ${IconImage};
  width: 120px;
  height: 120px;
  top: -10px;
  left: -27px;
`;


// 중간아이콘
export const CenterIcon = styled.div`
  ${btnStyle}
  width: 155px;
  height: 147px;
  border-radius: 19.7px;
  border: 1.52px solid #ADA1FF;
  overflow: hidden;
`
export const CenterIconImage = styled.div`
  background-image: url(${CenterImg});
  ${IconImage};
  width: 218px;
  height: 218px;
  top: -20px;
  left: -60px;
  gap: 0px;
  opacity: 0px;
`;


// 오른쪽아이콘
export const RightIcon = styled.div`
  ${btnStyle}
  width: 102px;
  height: 97px;
  background: #FFFFFF; 
  border: 1px solid #B9BEC9; 
  overflow: hidden;
`
export const RightIconImage = styled.div`
  background-image: url(${RightImg});
  ${IconImage};
  width: 120px;
  height: 120px;
  top: -10px;
  left: -27px;
`;


// ----- 글자스타일링

// 공통 텍스트 스타일링
const TextStyle = css`
  font-weight: 600;
  text-align: center;
  z-index: 1;

`;

// 개별 텍스트 스타일링
export const LeftTop = styled.p`
  ${TextStyle}
  font-size: 10px;
  line-height: 14px;
  color: #5643D1;
`;
export const LeftBottom = styled.p`
  ${TextStyle}
  font-size: 18px;
  line-height: 25.2px;
  color: #5643D1;
`;

export const CenterTop = styled.p`
  ${TextStyle}
  font-size: 13px;
  line-height: 18.2px;
  color: #5643D1;
`;
export const CenterBottom = styled.p`
  ${TextStyle}
  font-size: 27.28px;
  line-height: 38.19px;
  color: #5643D1;
`;

export const RightTop = styled.p`
  ${TextStyle}
  font-size: 10px;
  line-height: 14px;
  color: #8A8A8A;
`;
export const RightBottom = styled.p`
  ${TextStyle}
  font-size: 18px;
  line-height: 25.2px;
  color: #8A8A8A;
`;

// 버튼 스타일링
export const BottomBtn = styled.div`
  display: flex;
  flex-direction: column;
`
export const Btn = styled.button`
  background-color: #9180FF;
  width: Fixed (496px);
  height: 76px;
  padding: 10px;
  border-radius: 13px;
  border: solid #9180FF;

  font-size: 25px;
  font-weight: 600;
  text-align: left;
  color: #ffffff;
  text-align: center;
`

export const BottomText = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 52px;
  text-align: center;
`