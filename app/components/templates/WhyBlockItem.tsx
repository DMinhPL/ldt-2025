'use client';

import React from 'react';
import useMatchHeight from '@/app/hooks/useMatchHeight';

interface Props {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const WhyBlockItem: React.FC<Props> = ({ icon, title, description }) => {
    useMatchHeight('.icon');
    useMatchHeight('.why-heading');

    return (
        <div className="gap-5 flex flex-col lg:block items-center mb-2 lg:mb-0">
            <div className="icon">
                {icon}
            </div>
            <div className="mt-3 text-center lg:text-left">
                <h3 className="text-xl font-bold why-heading">{title}</h3>
                <p className="text-lg">{description}</p>
            </div>
        </div>
    );
};

export default WhyBlockItem;
