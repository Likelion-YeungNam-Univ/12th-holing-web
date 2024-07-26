import styled from 'styled-components';

export const SwiperWrapper = styled.div`
  .swiper-scrollbar {
    border-radius: 2px;
    background: var(--Gray_1, #ddd);
    height: 7px; /* 스크롤바의 높이 */

    width: 157px; /* 스크롤바의 전체 너비를 컨테이너의 너비에 맞게 설정 */
    position: absolute; /* 스크롤바를 컨테이너의 하단에 고정 */
    bottom: 0;

    left: 50%; /* 중앙 정렬을 위한 위치 설정 */
    transform: translateX(-50%); /* 중앙 정렬 */
  }

  .swiper-scrollbar-drag {
    border-radius: 2px;
    background: var(--Main_p1, #9180ff);
    height: 7px; /* 드래그 부분의 높이 */
    width: 30px; /* 드래그 부분의 너비 */
  }
`;
