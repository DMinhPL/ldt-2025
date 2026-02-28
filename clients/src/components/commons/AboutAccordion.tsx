import React, { useState } from 'react';
import PlusMinusIcon from '../molecules/PlusMinusIcon';

interface AccordionItem {
  title: string;
  content: string;
}

interface Props {
  accordionData: AccordionItem[];
}

const AboutAccordion: React.FC<Props> = ({ accordionData }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleAccordion = (index: number) => {
    console.log('Toggling accordion index:', index);
    setOpenIndex(openIndex === index ? null : index);
  };

  const getNextIndex = () => {
    const nextIndex = ((openIndex ?? 0) + 1) % accordionData.length;

    return nextIndex === 0 ? 1 : nextIndex;
  };

  return (
    <div className="w-full">
      {accordionData.map((item, index) => (
        <div key={`accordion-item-${index.toString()}`} className="overflow-hidden">
          <button
            className={`${index === 0 || (getNextIndex() === index && openIndex === index - 1) ? 'border-t ' : ''}w-full flex justify-between items-center border-green-ryb border-b p-4 bg-white hover:bg-green-100 text-licorice text-xl font-bold`}
            onClick={() => toggleAccordion(index)}
          >
            <p className="text-left">{item.title}</p>
            <PlusMinusIcon isOpen={openIndex === index} />
          </button>
          <div
            className={`transition-all duration-300 ${openIndex === index ? 'max-h-96 p-4 bg-green-50' : 'max-h-0 p-0 overflow-hidden'
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
