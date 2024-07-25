const KakaoLogout = () => {
  const handleLogout = () => {
    localStorage.removeItem('access_token');
  };
  const logoutParam = new URLSearchParams({
    client_id: 'd6f6575143c8fbcb6742cad1756bc92f',
    logout_redirect_uri: '뭐들어가야',
  });

  return (
    <a
      onClick={handleLogout}
      href={`https://kauth.kakao.com/oauth/logout?${logoutParam.toString()}`}
    >
      로그아웃
    </a>
  );
};
export default KakaoLogout;
