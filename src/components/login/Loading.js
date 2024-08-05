import React from 'react';
import login_loading from 'assets/images/login_loading.gif';
import { Background } from 'styles/login/Loading-styled';

function Loading() {
  return (
    <Background>
      <img src={login_loading} />
    </Background>
  );
}

export default Loading;
