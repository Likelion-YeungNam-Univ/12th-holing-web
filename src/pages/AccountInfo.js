import React from 'react';
import {
  MyInfoText,
  PhoneNumberText,
  UserPhoneNumber,
  BirthDateText,
  UserBirthDate,
  EmailText,
  UserEmail,
  PhoneNumberRow,
  BirthDaterRow,
  EmailRow,
} from 'styles/my/AccountInfo-styled';
import { useEffect, useState } from 'react';
import { getUserInfo } from 'apis/my/userInfoGet';

function AccountInfo() {
  const [email, setEmail] = useState('');

  useEffect(() => {
    getUserInfo()
      .then((response) => {
        const data = response.data;
        setEmail(data.email);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <>
      <MyInfoText>내 정보</MyInfoText>
      <PhoneNumberRow>
        <PhoneNumberText>휴대폰 정보</PhoneNumberText>
        <UserPhoneNumber>010-0000-0000</UserPhoneNumber>
      </PhoneNumberRow>
      <BirthDaterRow>
        <BirthDateText>생년월일</BirthDateText>
        <UserBirthDate>2000년 00월 00일</UserBirthDate>
      </BirthDaterRow>
      <EmailRow>
        <EmailText>이메일</EmailText>
        <UserEmail>{email}</UserEmail>
      </EmailRow>
    </>
  );
}

export default AccountInfo;
