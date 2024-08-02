import styled, { css } from 'styled-components';
import ActImg from 'assets/images/report_Btn_act.png'
import DisImg from 'assets/images/report_Btn_dis.png'
import PastImg from 'assets/images/report_Btn_past.png'

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
export const TopTitle = styled.span`
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
  flex-direction: column;
  justify-content: space-between;
  padding: 12px 0;
  background-repeat: no-repeat;
  background-size: 100%;
  overflow: hidden;
  width: 102px;
  height: 97px;
`;

// 왼쪽아이콘
export const LeftIcon = styled.div`
  ${btnStyle}
  background-image: url(${PastImg});
`;
// 중간아이콘
// TODO : D-DAY일때 클릭가능 예정
export const CenterIcon = styled.div`
  ${btnStyle}
  background-image: url(${props => props.gotest === 'active' ? ActImg : DisImg});
  border: ${({ gotest }) => gotest === 'active' ? 'none' : '1.52px solid #ADA1FF'};
  border-radius: ${({ gotest }) => gotest === 'active' ? '0' : '19.7px'};
  width: 155px;
  height: 147px;
  /* cursor: ${({ gotest }) => (gotest === 'active' ? 'pointer' : 'not-allowed')}; */
`;
  
// 오른쪽아이콘
export const RightIcon = styled.div`
  ${btnStyle}
  background-image: url(${DisImg});
`

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
  color: ${({ gotest }) => gotest === 'active' ? '#5643D1' : '#8A8A8A'};
`;

export const CenterBottom = styled.p`
  ${TextStyle}
  font-size: 27.28px;
  line-height: 38.19px;
  color: ${({ gotest }) => gotest === 'active' ? '#5643D1' : '#8A8A8A'};
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
export const GotoBtnColored = styled.button`
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
  cursor: pointer;
`
export const GotoBtn = styled.button`
  background-color: #DDDDDD;
  width: Fixed (496px);
  height: 76px;
  padding: 10px;
  border-radius: 13px;
  border: solid #DDDDDD;

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