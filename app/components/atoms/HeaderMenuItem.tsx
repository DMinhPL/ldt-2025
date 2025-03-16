'use client';

import { useAppContext } from '@/app/context/AppContext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface Props {
    url: string;
    title: string;
}

const HeaderMenuItem: React.FC<Props> = ({ url, title }) => {
    const pathName = usePathname();
    const { setOpenMenu } = useAppContext();

    return (
        <Link onClick={() => setOpenMenu(false)} className={`font-medium ${pathName === url ? 'text-green-ryb' : 'text-licorice'} hover:text-green-ryb text-xl lg:text-base transition-base-style lg:px-2 py-2.5`} href={url}>
            {title}
        </Link>
    );
};

export default HeaderMenuItem;
