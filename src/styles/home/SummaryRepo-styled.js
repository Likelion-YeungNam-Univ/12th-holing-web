import styled from 'styled-components';

export const SumRepoContainer = styled.div`
  width: 453px;
  height: 396px;
  border-radius: 13px;
  border: 3px;
  /* display: flex;
  text-align: center; */
  background-color: #ffffff;
  border-color: #dddddd;
  margin: auto;
  box-shadow: 0px 0px 5px 0px #0000001a;
  padding-top: 44px;
  padding-left: 40px;
`;

export const SumRepoHeader = styled.div`
  width: 368px;
  height: 51px;
  font-family: pretendard;
  margin-bottom: 25px;
`;

export const SumRepoTitle = styled.div`
  font-weight: 700;
  font-size: 28px;
  color: #9180ff;
  align-content: center;
  margin-bottom: 5px;
`;

export const SumRepoDisc = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 16.71px;
`;

export const RankContainer = styled.div`
  width: 254px;
  height: 102px;
`;

export const RankWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Rank = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 16.71px;
  color: #9180ff;
  margin-bottom: 5px;
`;

export const RankDesc = styled.div`
  width: 392px;
  height: 78px;

  font-family: Pretendard;
  font-size: 28px;
  font-weight: 700;
  line-height: 39.2px;
  text-align: left;

  span {
    text-decoration: underline;
    color: #5643d1;
    text-decoration-color: #5643d1;
  }
`;

export const Divider = styled.div`
  width: 90%;
  height: 1px;
  background-color: #ccc;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0;
`;
