import classNames from 'classnames';
import React from 'react';
import useMatchHeight from '../../hooks/useMatchHeight';
import { getStrapiMedia } from '../../utils/api-helpers';
import { useTranslatedPath } from '../../i18n/utils';

interface Props {
  title: string;
  description: string;
  thumbnail: string;
  slug: string;
  isMain?: boolean;
  isSlider?: boolean;
  currentLang: SystemLanguageEnum;
}

const CaseStudyCard: React.FC<Props> = ({
  title, description, thumbnail, slug, isMain, isSlider, currentLang
}) => {
  const translatePath = useTranslatedPath(currentLang);

  const cardStyles = classNames('study-card', {
    'md:flex': isMain,
  });

  const thumbnailStyles = classNames('thumbnail', {
    'md:w-6/12 lg:w-8/12': isMain,
  });

  const infoStyles = classNames('info', {
    'mt-3 lg:mt-10': !isMain,
    'md:w-6/12 lg:w-4/12 md:px-5 md:py-2 lg:p-10 mt-3 md:mt-0': isMain,
  });
  useMatchHeight('.case-title');
  const url = translatePath('/case-studies') + '/' + slug;

  return (
    <div className={cardStyles}>
      <a href={url} title={title} className={thumbnailStyles}>
        <img src={getStrapiMedia(thumbnail)} alt={title} className={`w-full object-cover aspect-661/342${isMain ? ' lg:max-w-211.25' : ''}`} width={isMain ? 866 : 418} height={isMain ? 447 : 216} />
      </a>
      <div className={infoStyles}>
        <div className="tag text-usafa-blue lg:text-lg font-medium">
          Case studies
        </div>
        <h3 className={`case-title font-bold text-xl lg:text-2xl mt-1 ${isSlider ? 'line-clamp-2' : 'line-clamp-3'}`}>
          <a href={url} title={title}>
            {title}
          </a>
        </h3>
        <p className={`text-base lg:text-lg mt-1 lg:mt-3 ${isMain ? 'line-clamp-6' : 'line-clamp-4'}`}>
          {description}
        </p>
      </div>
    </div >
  );
};

export default CaseStudyCard;
