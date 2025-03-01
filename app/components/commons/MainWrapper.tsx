'use client';
import useHeaderHeight from '@/app/hooks/useHeaderHeight';
import React from 'react';

interface Props {
    children: React.ReactNode
}

const MainWrapper: React.FC<Props> = ({ children }) => {
    const headerHeight = useHeaderHeight();

    return (
        <main style={{ marginTop: `${headerHeight}px` }}>
            {children}
        </main>
    );
};

export default MainWrapper;