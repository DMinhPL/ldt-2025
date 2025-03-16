import React from 'react';
import Image from 'next/image';
import aiModuleImg from '../../assets/images/ai-module.png';

const AIModuleIframe: React.FC = () => (
    <div className="iframe flex justify-center">
        <Image src={aiModuleImg.src} alt="banner" width={1200} height={750} />
    </div>
);

export default AIModuleIframe;
