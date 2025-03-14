import React from 'react';
import aiModuleImg from '../../assets/images/ai-module.png';
import Image from 'next/image';

const AIModuleIframe: React.FC = () => {
    return (
        <div className="iframe flex justify-center">
            <Image src={aiModuleImg.src} alt="banner" width={1200} height={750} />
        </div>
    );
};

export default AIModuleIframe;