import React from 'react';
import Image from 'next/image';

interface ContentImageBlockProps {
    imageSrc: string;
    title: string;
    description: string;
    imagePosition?: 'left' | 'right';
    imageAlt?: string;
    className?: string;
}

const ContentImageBlock: React.FC<ContentImageBlockProps> = ({
    imageSrc,
    title,
    description,
    imagePosition = 'left',
    imageAlt = 'content image',
    className = '',
}) => {
    const imageBlock = (
        <div className="rounded-3xl overflow-hidden flex-1/2 h-full">
            <Image src={imageSrc} className="object-cover w-full" width={641} height={531} alt={imageAlt} />
        </div>
    );

    const contentBlock = (
        <div className="content flex-1/2">
            <div className="max-w-96 mx-auto">
                <h2 className="text-3xl">{title}</h2>
                <p className="text-lg mt-4">{description}</p>
            </div>
        </div>
    );

    return (
        <div className={`flex gap-4 mt-14 ${className}`}>
            {imagePosition === 'left' ? (
                <>
                    {imageBlock}
                    {contentBlock}
                </>
            ) : (
                <>
                    {contentBlock}
                    {imageBlock}
                </>
            )}
        </div>
    );
};

export default ContentImageBlock;
