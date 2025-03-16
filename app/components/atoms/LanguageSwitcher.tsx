'use client';

import useClickOutside from '@/app/hooks/useClickOutside';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import enFlag from '../../assets/images/en-flag.png';
import vnFlag from '../../assets/images/vn-flag.png';

interface Language {
    code: string;
    name: string;
    flag: string;
}

const languages: Language[] = [
    { code: 'en', name: 'English', flag: enFlag.src },
    { code: 'vn', name: 'Vietnamese', flag: vnFlag.src },
];

const LanguageSwitcher: React.FC = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]);
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownUp, setIsDropdownUp] = useState(false);

    const languageRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const selectLanguage = (lang: Language) => {
        setSelectedLanguage(lang);
        setIsOpen(false);
    };

    useClickOutside(languageRef as React.RefObject<HTMLDivElement>, () => setIsOpen(false));

    useEffect(() => {
        if (isOpen && languageRef.current) {
            const rect = languageRef.current.getBoundingClientRect();
            const spaceBelow = window.innerHeight - rect.bottom;
            const spaceAbove = rect.top;

            // If space below is less than dropdown height (~200px), open upward
            setIsDropdownUp(spaceBelow < 200 && spaceAbove > spaceBelow);
        }
    }, [isOpen]);

    return (
        <div className="relative" ref={languageRef}>
            <button
                type="button"
                onClick={toggleDropdown}
                className="flex items-center gap-2 pl-4 pr-8 py-2 border border-battleship-grey rounded-[5px] bg-white hover:bg-gray-100 w-full"
            >
                <Image src={selectedLanguage.flag} alt={selectedLanguage.code} width={24} height={16} />
                <span className="text-gray-700">{selectedLanguage.name}</span>
                <svg
                    className="w-3 h-3 text-gunmetal absolute right-4 top-1/2 transform -translate-y-1/2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 8"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                    />
                </svg>
            </button>

            {isOpen && (
                <div
                    className={`absolute w-40 bg-white border rounded-md shadow-md ${isDropdownUp ? 'bottom-full mb-2' : 'top-full mt-2'
                    }`}
                >
                    {languages.map((lang) => (
                        <button
                            type="button"
                            key={lang.code}
                            onClick={() => selectLanguage(lang)}
                            className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-100"
                        >
                            <Image src={lang.flag} alt={lang.code} width={24} height={16} />
                            <span className="text-gray-700">{lang.name}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
