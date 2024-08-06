// import React from 'react';
// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import {
//   Header,
//   Title,
//   CloseBtn,
//   ConnectWrapper,
//   ConnectTitle,
//   ConnectDesc,
//   ConnectBtn,
//   ConnectHeader,
//   Wrapper,
// } from 'styles/login/SharePtn-styled';
// import ShareLink from 'hooks/login/ShareLink';
// import img_urlCopyBtn from 'assets/images/url_copy_btn.svg';
// import img_codeInsetBtn from 'assets/images/code_insert_btn.svg';
// import { getUserInfo } from 'apis/my/userInfoGet';
// import LogoCenterBar from 'components/comonents/topBar/LogoCenterTopBar';

// function ShareUrlPtn() {
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const navigate = useNavigate();
//   const homeUrl = process.env.REACT_APP_HOME_URL;
//   const closeModal = () => {
//     setModalIsOpen(false);
//   };

//   const [id, setId] = useState('');

//   useEffect(() => {
//     getUserInfo()
//       .then((response) => {
//         const data = response.data;
//         setId(data.socialId);
//       })
//       .catch((error) => {
//         //console.error('Error fetching user data:', error);
//       });
//   }, []);

//   const copyToClipboard = () => {
//     if (id && homeUrl) {
//       const textToCopy = `인증 코드: ${id}\n홈페이지 URL: ${homeUrl}`;
//       navigator.clipboard
//         .writeText(textToCopy)
//         .then(() => {
//           alert('인증 코드와 홈페이지 URL이 클립보드에 복사되었습니다!');
//         })
//         .catch((error) => {
//           //console.error('클립보드 복사 실패:', error);
//         });
//     }
//   };

<<<<<<< HEAD
//   return (
//     <>
//       <LogoCenterBar></LogoCenterBar>
//       <Wrapper>
//         <Header>카톡으로 전송하여</Header>
//         <Title>
//           나의 증상을
//           <br />
//           <span>짝꿍에게 공유</span>해보아요
//         </Title>
//         <ConnectWrapper>
//           <ConnectHeader>
//             <ConnectTitle>짝꿍에게 전달하기</ConnectTitle>
//             <ConnectDesc>
//               홈페이지 URL과 인증코드를 복사하고 카톡으로
//               <br /> 짝꿍에게 전달해요.
//             </ConnectDesc>
//           </ConnectHeader>
//           <ConnectBtn
//             src={img_urlCopyBtn}
//             onClick={copyToClipboard}
//           ></ConnectBtn>
//         </ConnectWrapper>
//         <ConnectWrapper>
//           <ConnectHeader>
//             <ConnectTitle>인증코드 입력하기</ConnectTitle>
//             <ConnectDesc>
//               짝꿍에게 전달받은 인증코드를 입력하고
//               <br /> 짝꿍과 연동해요.
//             </ConnectDesc>
//           </ConnectHeader>
//           <ConnectBtn
//             src={img_codeInsetBtn}
//             onClick={() => navigate('/code-input')}
//           ></ConnectBtn>
//         </ConnectWrapper>
//         <Link to="/">
//           <CloseBtn>닫고 홈화면으로 돌아가기</CloseBtn>
//         </Link>
//         <ShareLink
//           isOpen={modalIsOpen}
//           onRequestClose={closeModal}
//           contentLabel="카카오톡에서 붙여넣기하여 짝꿍과 함께하세요!"
//         />
//       </Wrapper>
//     </>
//   );
// }
=======
  return (
    <>
      <LogoCenterBar></LogoCenterBar>
      <Wrapper>
        <Header>카톡으로 전송하여</Header>
        <Title>
          나의 증상을
          <br />
          <span>짝꿍에게 공유</span>해보아요
        </Title>
        <ConnectWrapper>
          <ConnectHeader>
            <ConnectTitle>짝꿍에게 전달하기</ConnectTitle>
            <ConnectDesc>
              홈페이지 URL과 인증코드를 복사하고 카톡으로
              <br /> 짝꿍에게 전달해요.
            </ConnectDesc>
          </ConnectHeader>
          <ConnectBtn
            src={img_urlCopyBtn}
            onClick={copyToClipboard}
          ></ConnectBtn>
        </ConnectWrapper>
        <ConnectWrapper>
          <ConnectHeader>
            <ConnectTitle>인증코드 입력하기</ConnectTitle>
            <ConnectDesc>
              짝꿍에게 전달받은 인증코드를 입력하고
              <br /> 짝꿍과 연동해요.
            </ConnectDesc>
          </ConnectHeader>
          <ConnectBtn
            src={img_codeInsetBtn}
            onClick={() => navigate('/code-input')}
          ></ConnectBtn>
        </ConnectWrapper>
        <Link to="/home">
          <CloseBtn>닫고 홈화면으로 돌아가기</CloseBtn>
        </Link>
        <ShareLink
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="카카오톡에서 붙여넣기하여 짝꿍과 함께하세요!"
        />
      </Wrapper>
    </>
  );
}
>>>>>>> 3001b0d4d305e85c750606dc40a20c2256c57849

// export default ShareUrlPtn;
