import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const KakaoCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKakaoLogin = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');

      if (code) {
        try {
          const response = await axios.post(
            'http://localhost:8080/auth/token',
            { code }
          );
          const { access_token } = response.data;
          document.cookie = `ACCESS_TOKEN=${access_token}; path=/`;
          navigate('/');
        } catch (err) {
          console.error(err);
        }
      }
    };

    handleKakaoLogin();
  }, [navigate]);

  return <div>로그인하는 중</div>;
};

export default KakaoCallback;
