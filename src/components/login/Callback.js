// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { setCookie, getCookie } from 'apis/Cookies';

// const client_id = process.env.REACT_APP_REST_API_KEY;
// const redirect_uri = process.env.REACT_APP_REDIRECT_URI;
// // const server_url = process.env.REACT_APP_API_URL;

// const Callback = () => {
//   const location = useLocation(); // 현재 위치 객체를 가져옵니다.
//   const [code, setCode] = useState(null);

//   useEffect(() => {
//     const apiUrl = process.env.REACT_APP_API_URL;
//     const endPoint = '/auth/sign-in';
//     const searchParams = new URLSearchParams(location.search);

//     // const accessToken = getCookie('accessToken');

//     // if (code && (!accessToken || accessToken === 'undefined')) {
//     //   console.log('test');
//     //   handleGetToken(code);
//     // }
//   }, []);

//   // const handleGetToken = async () => {
//   //   const access_token = await getToken();

//   //   if (code) {
//   //     setCookie('cookieToken', code, {
//   //       path: '/',
//   //       maxAge: 60 * 60 * 24,
//   //     });
//   //   }
//   // };

//   const requestBody = {
//     gender: 'MALE',
//     isPeriod: false,
//   };

//   const url = `${apiUrl}${endPoint}`;
//   axios
//     .post(url, requestBody, {
//       headers: {
//         Accept: '*/*',
//         'Content-Type': 'application/json',
//       },
//       params: {
//         code: code,
//       },
//     })
//     .then((response) => {
//       // console.log('Data posted successfully:', response.data);
//       // console.log('아무거나');
//       // console.log('Response Headers:');
//       // sessionStorage.setItem('jwtToken : ', response.headers['Authorization']);
//       // response.headers.forEach((value, key) => {
//       //   console.log(`${key}: ${value}`);
//       // });
//       // return response.json();
//       // handleGetToken(code);
//     })
//     .catch((error) => {
//       console.error('Error posting data:', error);
//     });

//   return <button onClick={() => code && fetchAccessToken(code)}>POST</button>;
// };

// export default Callback;
