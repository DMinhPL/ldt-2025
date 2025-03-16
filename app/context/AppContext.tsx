'use client';

import {
    createContext, useContext, useEffect, useState,
} from 'react';
import { usePathname } from 'next/navigation';
import useWindowDimensions from '../hooks/useWindowDemensions';

export interface AppState {
    openMenu: boolean;
    setOpenMenu: (open: boolean) => void;
    themeBackground: 'primary' | 'secondary'
}
const AppContext = createContext<AppState>({
    openMenu: false,
    setOpenMenu: () => { },
    themeBackground: 'primary',
});

interface Props {
    children: React.ReactNode
}
export const AppProvider: React.FC<Props> = ({ children }) => {
    const [openMenu, setOpenMenu] = useState(false);
    const { width } = useWindowDimensions();
    const [themeBackground, setThemeBackground] = useState<'primary' | 'secondary'>('primary');
    const pathname = usePathname();

    useEffect(() => {
        if (width >= 1024) setOpenMenu(false);
    }, [width]);

    useEffect(() => {
        if (pathname === '/') {
            setThemeBackground('primary');
        } else if (
            pathname === '/about'
            || pathname === '/chat-ai'
            || pathname.startsWith('/case-studies/')
        ) {
            setThemeBackground('secondary');
        } else {
            setThemeBackground('primary');
        }
    }, [pathname]);

    useEffect(() => {
        if (themeBackground === 'primary') {
            document.body.classList.add('bg-floral-white');
            document.body.classList.remove('bg-white');
        } else {
            document.body.classList.add('bg-white');
            document.body.classList.remove('bg-floral-white');
        }
    }, [themeBackground]);

    return (
        <AppContext.Provider value={{ openMenu, setOpenMenu, themeBackground }}>
            {children}
        </AppContext.Provider>
    );
};

// Custom Hook to use Context
export const useAppContext = () => useContext(AppContext);
