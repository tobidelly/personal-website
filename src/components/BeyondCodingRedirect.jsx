import { useEffect } from 'react';

const BeyondCodingRedirect = () => {
  useEffect(() => {
    window.location.href = '/public/beyond-coding/index.html';
  }, []);

  return null;
};

export default BeyondCodingRedirect;