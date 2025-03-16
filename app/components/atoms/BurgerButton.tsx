import React from 'react';

interface Props {
    onClick: (open: boolean) => void;
    isOpen: boolean;
}

const BurgerButton: React.FC<Props> = ({ onClick, isOpen }) => (
    <button
        type="button"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 group lg:hidden"
        onClick={() => onClick(!isOpen)}
    >
        <div
            className={`relative flex overflow-hidden items-center justify-center w-[40px] h-[40px] transform transition-all ring-gray-300 hover:ring-8 ${isOpen ? 'ring-2' : ''} ring-opacity-30 duration-200`}
        >
            <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                <div
                    className={`bg-licorice h-[2px] w-7 transform transition-all duration-300 origin-left ${isOpen ? 'translate-y-6 delay-100' : ''}`}
                />
                <div
                    className={`bg-licorice h-[2px] w-7 rounded transform transition-all duration-300 ${isOpen ? 'translate-y-6 delay-75' : ''}`}
                />
                <div
                    className={`bg-licorice h-[2px] w-7 transform transition-all duration-300 origin-left ${isOpen ? 'translate-y-6' : ''}`}
                />

                <div
                    className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 flex w-0 ${isOpen ? 'translate-x-0 w-12' : ''}`}
                >
                    <div
                        className={`absolute bg-licorice h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 ${isOpen ? 'rotate-45' : ''}`}
                    />
                    <div
                        className={`absolute bg-licorice h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 ${isOpen ? '-rotate-45' : ''}`}
                    />
                </div>
            </div>
        </div>
    </button>
);

export default BurgerButton;
