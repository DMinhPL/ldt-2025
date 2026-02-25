
import React, { type HTMLAttributes } from 'react';
import mainBg from '../../assets/images/bg1.png';
import homeBannerImg from '../../assets/images/home-banner.png';
import useHeaderHeight from '../../hooks/useHeaderHeight';
import type { ThemeBackground } from '../../stores';
import { getStrapiMedia } from '../../utils/api-helpers';

interface Props {
  title: string;
  description?: string;
  actionHTML?: string;
  titleStyles?: HTMLAttributes<HTMLHeadingElement>['className'];
  imgSrc?: string;
  hasTheme?: boolean;
  theme: ThemeBackground; // align with ThemeBackground if needed
}

const Banner: React.FC<Props> = ({
  title, description, actionHTML, titleStyles, imgSrc, hasTheme, theme,
}) => {
  const headerHeight = useHeaderHeight();
  const themeBackground = theme;

  const headingStyles = `${titleStyles || 'lg:max-w-[576px]'} text-raisin-black text-3xl lg:text-4xl xl:text-[55px] max-w-[570px] mx-auto lg:mx-0 font-bold opacity-0 animate-fade-in-up`;

  return (
    <div
      className="banner"
      style={themeBackground === 'primary' || hasTheme ? {
        backgroundImage: `url(${mainBg.src})`,
        width: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        paddingTop: headerHeight,
      } : { paddingTop: headerHeight }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row py-9 items-center">
          <div className="left lg:max-w-7/12 w-full mt-10 lg:mt-0">
            <h2 className={headingStyles}>
              {title}
            </h2>
            {
              description && <p className="text-lg mt-4 lg:mt-7 max-w-142.5 xl:max-w-160.25 mx-auto lg:mx-0 opacity-0 animate-fade-in-up">{description}</p>
            }
            {actionHTML && <div className="mt-5 lg:mt-9 lg:block flex justify-center w-full max-w-47.75" dangerouslySetInnerHTML={{ __html: actionHTML }}></div>}
          </div>
          <div className="right lg:max-w-5/12 w-full">
            <div className="thumbnail max-w-64.75 lg:max-w-96 xl:max-w-121.5 mx-auto lg:mr-0 lg:ml-auto opacity-0 animate-fade-in aspect-486/483 w-full">
              <img src={getStrapiMedia(imgSrc || '') || homeBannerImg.src} alt="banner" width={486} height={483} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
