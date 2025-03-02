import React from "react";

const PlusMinusIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
    return (
        <span className="relative w-3 h-3 flex items-center justify-center">
            {/* Horizontal Line */}
            <span className="absolute w-full h-[2px] bg-black transition-all duration-300"></span>
            {/* Vertical Line (Disappears on Open) */}
            <span
                className={`absolute h-full w-[2px] bg-black transition-all duration-300 ${isOpen ? "scale-0" : "scale-100"
                    }`}
            ></span>
        </span>
    );
};

export default PlusMinusIcon;
