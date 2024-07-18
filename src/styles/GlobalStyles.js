import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
  text-decoration: none;
  list-style: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #000000;
}
body{
  padding-top: 98px; // 상단바의 높이만큼 body가 겹쳐짐 이슈 해결
  padding-bottom: 88px; // 하단바도 동일이슈 해결
}

// TODO : 대표 색상 작성 예정
`;

export default GlobalStyles;
