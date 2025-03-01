'use client';
import { createContext, useContext, useEffect, useState } from "react";
import useWindowDimensions from "../hooks/useWindowDemensions";

export interface AppState {
    openMenu: boolean;
    setOpenMenu: (open: boolean) => void;
}
const AppContext = createContext<AppState>({
    openMenu: false,
    setOpenMenu: () => { }
});

interface Props {
    children: React.ReactNode
}
export const AppProvider: React.FC<Props> = ({ children }) => {
    const [openMenu, setOpenMenu] = useState(false);
    const { width } = useWindowDimensions();

    useEffect(() => {
        if (width >= 1024) setOpenMenu(false);
    }, [width]);

    return (
        <AppContext.Provider value={{ openMenu, setOpenMenu }}>
            {children}
        </AppContext.Provider>
    );
};

// Custom Hook to use Context
export const useAppContext = () => {
    return useContext(AppContext);
};