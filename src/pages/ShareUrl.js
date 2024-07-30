import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ShareUrlPtn from 'components/login/ShareUrlPtn';

function ShareUrl() {
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const codeFromUrl = searchParams.get('code');
    if (codeFromUrl) {
      localStorage.setItem('code', codeFromUrl);
    }
  }, [location.search]);

  return <ShareUrlPtn />;
}

export default ShareUrl;
