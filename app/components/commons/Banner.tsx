/* eslint-disable @next/next/no-img-element */

'use client';

import React, { HTMLAttributes } from 'react';
import useHeaderHeight from '@/app/hooks/useHeaderHeight';
import { useAppContext } from '@/app/context/AppContext';
import mainBg from '../../assets/images/bg1.png';
import homeBannerImg from '../../assets/images/banner-home.png';

interface Props {
    title: string;
    description?: string;
    action?: React.ReactNode;
    titleStyles?: HTMLAttributes<HTMLHeadingElement>['className'];
    imgSrc?: string;
}

const Banner: React.FC<Props> = ({
    title, description, action, titleStyles, imgSrc,
}) => {
    const headerHeight = useHeaderHeight();
    const { themeBackground } = useAppContext();

    const headingStyles = `${titleStyles || 'lg:max-w-[576px]'} text-raisin-black text-3xl lg:text-4xl xl:text-[55px] max-w-[570px] mx-auto lg:mx-0 font-bold opacity-0 animate-fade-in-up`;

    return (
        <div
            className="banner"
            style={themeBackground === 'primary' ? {
                backgroundImage: `url(${mainBg.src})`,
                width: '100%',
                height: '100%',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                paddingTop: headerHeight,
            } : { paddingTop: headerHeight }}
        >
            <div className="container mx-auto">
                <div className="flex flex-col-reverse lg:flex-row py-9 items-center">
                    <div className="left lg:max-w-7/12 w-full mt-2 lg:mt-0">
                        <h2 className={headingStyles}>
                            {title}
                        </h2>
                        {
                            description && <p className="text-lg mt-4 lg:mt-7 max-w-[570px] xl:max-w-[641px] mx-auto lg:mx-0 opacity-0 animate-fade-in-up">{description}</p>
                        }
                        {action && <div className="mt-5 lg:mt-9 lg:block flex justify-center">{action}</div>}
                    </div>
                    <div className="right lg:max-w-5/12 w-full">
                        <div className="thumbnail max-w-[259px] lg:max-w-96 xl:max-w-[486] mx-auto lg:mr-0 lg:ml-auto opacity-0 animate-fade-in">
                            <img src={imgSrc || homeBannerImg.src} alt="banner" width={486} height={483} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
