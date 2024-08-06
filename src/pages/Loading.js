import React from 'react';
import { Wrapper } from 'styles/Loading-styled';
import loadingGif from 'assets/images/loading.gif';
import { getUserInfo } from 'apis/my/userInfoGet';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Loading() {
  const navigate = useNavigate();
  const [selfTest, setSelfTest] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUserInfo()
      .then((response) => {
        const data = response.data;
        setSelfTest(data.isSelfTested);
      })
      .catch((error) => {
        //console.error('Error fetching user data:', error);
      });
  }, []);

  useEffect(() => {
    if (selfTest !== null) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        if (selfTest) {
          navigate('/home');
        } else {
          navigate('/userinfo');
        }
      }, 2000); // 2 seconds delay

      // Cleanup the timer if the component unmounts before the timer completes
      return () => clearTimeout(timer);
    }
  }, [selfTest, navigate]);

  return (
    <Wrapper>
      <img src={loadingGif}></img>
    </Wrapper>
  );
}

export default Loading;
