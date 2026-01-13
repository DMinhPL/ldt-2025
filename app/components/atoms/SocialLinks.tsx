import React from 'react';
import Image from 'next/image';

interface SocialLink {
    href: string;
    icon: string;
    alt: string;
}

interface SocialLinksProps {
    links: SocialLink[];
    className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links, className = '' }) => (
    <div className={`flex gap-7 items-center ${className}`}>
        {links.map(({ href, icon, alt }) => (
            <a
                key={alt}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our ${alt} page`}
                title={alt}
            >
                <Image src={icon} alt={alt} width={20} height={20} />
            </a>
        ))}
    </div>
);

export default SocialLinks;
