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
  Wrapper,
} from 'styles/my/AccountInfo-styled';
import { useEffect, useState } from 'react';
import { getUserInfo } from 'apis/my/userInfoGet';

function AccountInfo() {
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [gender, setGender] = useState('');

  useEffect(() => {
    getUserInfo()
      .then((response) => {
        const data = response.data;
        setEmail(data.email);
        setNickname(data.nickname);
        setGender(data.gender);
      })
      .catch((error) => {
        //console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <Wrapper>
      <MyInfoText>내 정보</MyInfoText>
      <EmailRow>
        <EmailText>이메일</EmailText>
        <UserEmail>{email}</UserEmail>
      </EmailRow>
      <PhoneNumberRow>
        <PhoneNumberText>성별</PhoneNumberText>
        <UserPhoneNumber>
          {gender === 'MALE' ? '남자' : gender === 'FEMALE' ? '여자' : ''}
        </UserPhoneNumber>
      </PhoneNumberRow>
      <BirthDaterRow>
        <BirthDateText>닉네임</BirthDateText>
        <UserBirthDate>{nickname}</UserBirthDate>
      </BirthDaterRow>
    </Wrapper>
  );
}

export default AccountInfo;
