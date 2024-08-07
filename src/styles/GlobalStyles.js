import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'Pretendard Variable';
  src: local('Pretendard Variable'), url('/assets/fonts/PretendardVariable.woff2') format('woff2-variations');
}
* {
  text-decoration: none;
  list-style: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  padding-top: 98px; // 상단바의 높이만큼 body가 겹쳐짐 이슈 해결
  padding-bottom: 88px; // 하단바도 동일이슈 해결
  font-family: 'Pretendard Variable'; // Pretendard Variable 폰트 적용
}

// TODO : 대표 색상 작성 예정
`;

export default GlobalStyles;
