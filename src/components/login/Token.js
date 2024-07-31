import { Cookies } from 'react-cookie';
import { setCookie, getCookie } from 'apis/Cookies';

// export const accessToken = getCookie('accessToken');

// if (code && (!accessToken || accessToken === 'undefined')) {
//   console.log('test');
//   handleGetToken(code);
// }

export const handleGetToken = async () => {
  // const access_token = await getToken();

  if (code) {
    setCookie('cookieToken', code, {
      path: '/',
      maxAge: 60 * 60 * 24,
    });
  }
};
