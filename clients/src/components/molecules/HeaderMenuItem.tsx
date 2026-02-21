import React from 'react';

interface Props {
  url: string;
  title: string;
  pathname: string;          // pass from Astro
  onClick?: () => void;      // for closing mobile menu, etc.
}

const HeaderMenuItem: React.FC<Props> = ({ url, title, pathname, onClick }) => {
  const isActive = (() => {
    return pathname === url || pathname === `${url}/`;
  })();

  return (
    <a
      href={url}
      onClick={onClick}
      className={`font-medium ${isActive ? 'text-green-ryb' : 'text-licorice'
      } hover:text-green-ryb text-xl lg:text-base transition-base-style lg:px-2 py-2.5`}
    >
      {title}
    </a>
  );
};

export default HeaderMenuItem;