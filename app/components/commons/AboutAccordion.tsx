'use client';
import React, { useState } from 'react';
import PlusMinusIcon from '../atoms/PlusMinusIcon';

interface AccordionItem {
    title: string;
    content: string;
}

const accordionData: AccordionItem[] = [
    {
        title: "Best IT solutions provider agency",
        content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        title: "Professional & Experienced team member",
        content:
            "Our team consists of experienced professionals who bring innovative solutions to IT problems and ensure seamless operations for businesses.",
    },
    {
        title: "Our main goal: how to succeed in IT business",
        content:
            "We aim to help businesses thrive by leveraging cutting-edge technologies, strategic planning, and data-driven decision-making.",
    },
    {
        title: "We started our journey since 2015",
        content:
            "Since 2015, we have been committed to delivering top-notch IT services and solutions, helping businesses scale and succeed.",
    },
];

const AboutAccordion: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const getNextIndex = () => {
        const nextIndex = ((openIndex ?? 0) + 1) % accordionData.length;
        return nextIndex === 0 ? 1 : nextIndex;
    };

    return (
        <div className="w-full">
            {accordionData.map((item, index) => (
                <div key={index} className="overflow-hidden">
                    <button
                        className={`${index === 0 || (getNextIndex() === index && openIndex === index - 1) ? "border-t " : ""}w-full flex justify-between items-center border-green-ryb border-b p-4 bg-white hover:bg-green-100 text-licorice text-xl font-bold`}
                        onClick={() => toggleAccordion(index)}
                    >
                        <p className='text-left'>{item.title}</p>
                        <PlusMinusIcon isOpen={openIndex === index} />
                    </button>
                    <div
                        className={`transition-all duration-300 ${openIndex === index ? "max-h-96 p-4 bg-green-50" : "max-h-0 p-0 overflow-hidden"
                            }`}
                    >
                        <p className="text-lg">{item.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AboutAccordion;