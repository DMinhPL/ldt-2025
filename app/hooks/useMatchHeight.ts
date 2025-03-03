import { useEffect } from 'react';

const useMatchHeight = (selector: string) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    const observer = new ResizeObserver(() => {
      let maxHeight = 0;

      elements.forEach((el) => {
        (el as HTMLElement).style.height = 'auto'; // Reset height
        maxHeight = Math.max(maxHeight, (el as HTMLElement).offsetHeight);
      });

      elements.forEach((el) => {
        (el as HTMLElement).style.height = `${maxHeight}px`;
      });
    });

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector]);
};

export default useMatchHeight;
