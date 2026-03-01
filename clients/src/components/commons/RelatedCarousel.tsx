import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CaseStudyCard from '../molecules/CaseStudyCard';

interface Props {
  data: CaseStudyPostListType[];
  currentLang: SystemLanguageEnum;
}

const RelatedCarousel: React.FC<Props> = ({ data, currentLang }) => {
  const config = {
    slidesPerView: 2,
    spaceBetween: 29,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 24,
      },
      // when window width is >= 640px
      1080: {
        slidesPerView: 2,
        spaceBetween: 29,
      },
    },
  };

  return (
    <div className="relatedCarousel relative">
      <Swiper
        modules={[Navigation, Pagination]}
        {...config}
      >
        {
          data.map((item) => (
            <SwiperSlide key={item.id}>
              <CaseStudyCard
                title={item.title}
                description={item.description}
                thumbnail={item.thumbnail?.url || ''}
                slug={item.slug}
                isSlider
                currentLang={currentLang}
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
      {
        data.length > 2 && (
          <>
            <div className="swiper-button-prev hidden! lg:block!" />
            <div className="swiper-button-next hidden! lg:block!" />
            <div className="swiper-pagination lg:hidden!" />
          </>
        )
      }
    </div>
  );
};

export default RelatedCarousel;
