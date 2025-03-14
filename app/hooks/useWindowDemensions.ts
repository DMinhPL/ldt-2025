import { useEffect, useState } from 'react';

interface InnertWindow {
  width: number;
  height: number;
}

const useWindowDimensions = (): InnertWindow => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return (): void => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return { width, height };
};

export default useWindowDimensions;
