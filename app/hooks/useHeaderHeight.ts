import { useState, useEffect } from 'react';

const useHeaderHeight = () => {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const onResize = () => {
      const headerElement = document.querySelector('.o-header');
      if (headerElement) {
        setHeaderHeight(headerElement.clientHeight);
      }
    };

    // Initial calculation
    onResize();

    // Listen for scroll events
    window.addEventListener('scroll', onResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('scroll', onResize);
  }, []);

  return headerHeight;
};

export default useHeaderHeight;
