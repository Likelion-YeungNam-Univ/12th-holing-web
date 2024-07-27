export const getToken = async () => {
  const search = new URLSearchParams(window.location.href);
  const code = search.get('code');
  if (!code) {
    console.log('No authorization code found in URL');
    return {};
  }
  const param = new URLSearchParams({
    grant_type: 'authorization_code',
    client_id: 'd6f6575143c8fbcb6742cad1756bc92f',
    redirect_uri: 'http://43.201.5.161:8080/auth/token',
    code,
  });
  const response = await fetch('https://kauth.kakao.com/oauth/token', {
    method: 'POST',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
    },
    body: param,
  });

  const result = await response.json();
  console.log('result: ', result);
  return result;
};
