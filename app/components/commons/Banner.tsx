'use client';
import React from 'react';
import homeBannerImg from '../../assets/images/banner-home.png';
import Image from 'next/image';
import mainBg from '../../assets/images/bg1.png';
import useHeaderHeight from '@/app/hooks/useHeaderHeight';

interface Props {
    title: string;
    description?: string;
    action?: React.ReactNode;
}

const Banner: React.FC<Props> = ({ title, description, action }) => {
    const headerHeight = useHeaderHeight();

    return (
        <div className='banner' style={{
            backgroundImage: `url(${mainBg.src})`,
            width: '100%',
            height: '100%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            paddingTop: headerHeight
        }}>
            <div className="container mx-auto">
                <div className="flex py-9 items-center">
                    <div className="left lg:max-w-7/12 w-full">
                        <h2 className='text-raisin-black text-4xl xl:text-[55px] max-w-[570px] mx-auto lg:mx-0 lg:max-w-[576px] font-bold text-center lg:text-left opacity-0 animate-fade-in-up'>
                            {title}
                        </h2>
                        {
                            description && <p className='text-lg mt-4 lg:mt-7 max-w-[641px] opacity-0 animate-fade-in-up'>{description}</p>
                        }
                        {action && <div className='mt-5 lg:mt-9 lg:block flex justify-center'>{action}</div>}
                    </div>
                    <div className="right lg:max-w-5/12 w-full hidden lg:block">
                        <div className="thumbnail max-w-96 xl:max-w-[486] mr-0 ml-auto opacity-0 animate-fade-in">
                            <Image src={homeBannerImg} alt="banner" width={486} height={483} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;