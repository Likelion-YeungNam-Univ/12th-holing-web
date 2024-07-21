import styled from 'styled-components';

export const Title = styled.div`
  font-family: Pretendard;
  font-size: 32px;
  font-weight: 700;
  /* display: flex;
  text-align: left; */

  span {
    text-decoration: underline;
    color: #9180ff;
    text-decoration-color: #9180ff;
  }
`;
export const Icon = styled.img`
  display: inline-block; /* 인라인 블록 요소로 설정하여 수평 중앙 정렬 */
  vertical-align: middle; /* 수직 정렬 */
`;

export const Wrapper = styled.div`
  display: flex;
  width: 496px;
  flex-direction: column;
  align-items: flex-start;
  gap: 19px;
  margin: auto;
  margin-top: 25px;
  margin-bottom: 19px;
`;

export const MissionContainer = styled.div`
  width: 100%;
  height: 188px;
  border-radius: 13px;
  background: var(--White-01, #fff);

  align-self: stretch;
`;

export const Desc = styled.div`
  width: 306px;
  height: 50px;

  color: var(--Gray_4, #5b5b5b);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;

  margin-left: 32px;
  margin-top: 24px;
`;

export const Button = styled.div`
  display: flex;
  width: 454px;
  height: 76px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 13px;
  background: var(--Main_p1, #9180ff);

  color: var(--White, var(--White-01, #fff));
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding: 10px;
  margin: 21px;
`;
