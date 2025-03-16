import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
    title: string;
    description: string;
    thumbnail: string;
    id: number;
    isMain?: boolean;
}

const CaseStudyCard: React.FC<Props> = ({
    title, description, thumbnail, id, isMain,
}) => {
    const cardStyles = classNames('study-card', {
        'md:flex': isMain,
    });

    const thumbnailStyles = classNames('thumbnail', {
        'md:w-6/12 lg:w-8/12': isMain,
    });

    const infoStyles = classNames('info', {
        'mt-3 lg:mt-10': !isMain,
        'md:w-6/12 lg:w-4/12 md:px-5 md:py-2 lg:p-10 mt-3 md:mt-0': isMain,
    });

    return (
        <div className={cardStyles}>
            <Link href={`/case-studies/${id}`} title={title} className={thumbnailStyles}>
                <Image src={thumbnail} alt={title} className="w-full object-cover" width={isMain ? 866 : 418} height={isMain ? 447 : 216} />
            </Link>
            <div className={infoStyles}>
                <div className="tag text-usafa-blue text-md lg:text-lg font-medium">
                    Case studies
                </div>
                <h3 className="font-bold text-lg lg:text-2xl mt-1 line-clamp-3">
                    <Link href={`/case-studies/${id}`} title={title}>
                        {title}
                    </Link>
                </h3>
                <p className="text-base lg:text-lg mt-1 lg:mt-3 line-clamp-3">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default CaseStudyCard;
