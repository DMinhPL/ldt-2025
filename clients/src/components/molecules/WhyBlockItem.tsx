import React from 'react';
import useMatchHeight from '../../hooks/useMatchHeight';
import { getStrapiMedia } from '../../utils/api-helpers';

interface Props {
  icon: ThumbnailComponentResponseType;
  title: string;
  description: string;
}

const WhyBlockItem: React.FC<Props> = ({ icon, title, description }) => {
  useMatchHeight('.icon');
  useMatchHeight('.why-heading');

  return (
    <div className="gap-5 flex flex-col lg:block items-center mb-2 lg:mb-0">
      <div className="icon">
        {
          icon &&
          <img
            src={getStrapiMedia(icon.url)}
            alt={icon.alternativeText || ''}
            width={110}
            height={109}
          />
        }
      </div>
      <div className="mt-3 text-center lg:text-left">
        <h3 className="text-xl font-bold why-heading">{title}</h3>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
};

export default WhyBlockItem;
