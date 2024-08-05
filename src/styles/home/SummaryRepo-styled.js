import styled from 'styled-components';

export const SumRepoContainer = styled.div`
  width: 453px;
  height: 396px;
  border-radius: 13px;
  border: 3px;
  background-color: #ffffff;
  border-color: #dddddd;
  margin: auto;
  margin-bottom: 22px;
  border-width: 1px;
  border-style: solid;
  padding-top: 44px;
  padding-left: 40px;
  padding-right: 40px;
  position: relative;
`;

export const SumRepoHeader = styled.div`
  width: 368px;
  height: 51px;
  margin-bottom: 25px;
  position: relative;
  z-index: 10001;
`;

export const SumRepoTitleContainer = styled.div`
  display: flex;
  align-items: center;
`

export const SumRepoTitle = styled.div`
  font-weight: 700;
  font-size: 28px;
  color: #9180ff;
  align-content: center;
  margin-bottom: 5px;
`;

export const RepoIcon = styled.img`
  margin-left: 4px;
`

export const SumRepoDisc = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 16.71px;
  position: relative;
  z-index: 10001;
`;

export const RankContainer = styled.div`
  width: 254px;
  height: 102px;
`;

export const RankWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 10001;
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
  position: relative;
  z-index: 10001;
`;

export const Count = styled.div`
  color: var(--Gray_4, #5b5b5b);
  text-align: right;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ConnectBtn = styled.img`
  margin-top: 88px;
  margin-left: 156px;
  cursor: pointer;
  position: relative;
  z-index: 10001;
`;

export const ConnectDesc = styled.div`
  color: #5b5b5b;
  font-size: 20px;
  font-weight: 500;
  margin-top: 22px;
  text-align: center;
  position: relative;
  z-index: 10001;
`;

export const RepoImg = styled.img`
  position: absolute;
  bottom: 0px;
  right: 0px;
  z-index: 1000;
`
