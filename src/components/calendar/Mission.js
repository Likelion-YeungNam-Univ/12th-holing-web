import React from 'react';
import {
  MissionTitleWrapper,
  MissionTitle1,
  MissionTitle2,
  MissionTitle3,
  MissionTitleRow,
  MissionCard,
  MissionItem,
  MissionDiscription,
  MissionRefresh,
  MissionItemWrapper,
  CreditBox,
} from '../../style/Mission-styled';

const Mission = () => {
  return (
    <>
      <MissionTitleWrapper>
        <MissionTitle1>당신의 짝꿍을 위한</MissionTitle1>
        <MissionTitleRow>
          <MissionTitle2>미션</MissionTitle2>
          <MissionTitle3>을 수행해보세요</MissionTitle3>
        </MissionTitleRow>
      </MissionTitleWrapper>
      <MissionCard>
        <CreditBox>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
          >
            <circle cx="10" cy="9.5" r="9.5" fill="#ADA1FF" />
            <circle cx="10.0092" cy="9.50941" r="7.13196" fill="white" />
            <path
              d="M11.9075 8.06994C11.7759 7.23916 11.1011 6.73549 10.1739 6.7303C8.93955 6.73549 8.12211 7.62859 8.12211 9.21227C8.12211 10.8323 8.95052 11.689 10.163 11.6942C11.0682 11.689 11.7484 11.2217 11.9075 10.4065L13.5753 10.4169C13.3943 11.8085 12.1599 13.0754 10.141 13.0754C8.01788 13.0754 6.44336 11.6579 6.44336 9.21227C6.44336 6.75626 8.04531 5.34912 10.141 5.34912C11.9734 5.34912 13.3559 6.34087 13.5753 8.06994H11.9075Z"
              fill="#ADA1FF"
            />
          </svg>
           1
        </CreditBox>
        <MissionItemWrapper>
          <MissionItem>짝꿍에게 해주기</MissionItem>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="58"
            height="60"
            viewBox="0 0 58 60"
            fill="none"
          >
            <path
              d="M45.9166 0H12.0834C5.41326 0.00832031 0.00804297 5.59992 0 12.5V47.5001C0.00804297 54.4001 5.41326 59.9918 12.0834 60H45.9167C52.5867 59.9918 57.9921 54.4001 58 47.5V12.5C57.9921 5.59992 52.5867 0.00832031 45.9166 0ZM48.3334 20.1975L25.9695 43.3325C24.0823 45.2856 21.0221 45.2862 19.1341 43.3339L19.1327 43.3325L9.66663 33.5426C8.72096 32.5643 8.72096 30.9783 9.66663 30.0001C10.6123 29.0219 12.1454 29.0218 13.091 30.0001L22.5546 39.7901L44.9209 16.655C45.8666 15.6803 47.397 15.6831 48.3393 16.6612C49.2816 17.6395 49.2789 19.2227 48.3334 20.1975Z"
              fill="#9180FF"
            />
          </svg>
        </MissionItemWrapper>

        <MissionDiscription>
          건강한 체중을 유지하고, 체중 변화를 효과적으로 관리하기 위해 아침에...
        </MissionDiscription>
        <MissionRefresh>새로고침</MissionRefresh>
      </MissionCard>
    </>
  );
};

export default Mission;
