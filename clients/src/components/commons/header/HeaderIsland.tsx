import React, { useEffect, useMemo, useState } from 'react';
import { useTranslatedPath, useTranslations } from '../../../i18n/utils';
import useWindowDimensions from '../../../hooks/useWindowDemensions';
import useHeaderHeight from '../../../hooks/useHeaderHeight';
import { openMenu, openMenuStore, toggleMenu, type ThemeBackground } from '../../../stores';
import HeaderMenuItem from '../../molecules/HeaderMenuItem';
import logoImg from '../../../assets/images/logo.png';
import hotlineIcon from '../../../assets/icons/ic_hotline.svg';
import BurgerButton from '../../atoms/BurgerButton';
import { useStore } from '@nanostores/react';
import { getStrapiMedia } from '../../../utils/api-helpers';

interface Props {
  lang: 'en' | 'vi-VN';
  pathname: string;
  theme: ThemeBackground;
  generalData?: GeneralResponseType;
  hotCaseDetail?: CaseStudyPostListType;

  // ✅ receive already-rendered HTML from Astro
  ctaHTML?: string;
}

const HeaderIsland: React.FC<Props> = ({ lang, pathname, theme, generalData, ctaHTML, hotCaseDetail }) => {
  const t = useTranslations(lang);
  const translatePath = useTranslatedPath(lang);

  const headerMenu = useMemo(
    () => [
      { url: translatePath('/'), title: t('menu.home') },
      { url: translatePath('/agentic-ai'), title: t('menu.chatAi') },
      { url: translatePath('/case-studies') + `/${hotCaseDetail?.slug}`, title: t('menu.caseStudies') },
      { url: translatePath('/about'), title: t('menu.aboutUs') },
      { url: translatePath('/contact'), title: t('menu.contact') },
    ],
    [translatePath, t, hotCaseDetail?.slug]
  );

  const { width } = useWindowDimensions();
  const [scrollY, setScrollY] = useState(0);
  const [fixedMenu, setFixedMenu] = useState(false);
  const headerHeight = useHeaderHeight();
  const background = theme === 'primary' ? 'bg-floral-white' : 'bg-floral-white lg:bg-white';
  const $openMenuValue = useStore(openMenuStore);

  const burgerMenuState =
    width < 1024 ? ($openMenuValue ? 'transform translate-x-0' : 'transform translate-x-full') : undefined;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setFixedMenu(currentScrollY > 30);
      setScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  return (
    <header className={`o-header ${fixedMenu ? background : `${background}`} fixed top-0 left-0 w-full z-50`}>
      <div className="container mx-auto xl:max-w-450">
        <div className="wrapper flex items-center py-3 justify-between">
          <BurgerButton isOpen={$openMenuValue} onClick={toggleMenu} />

          <div className="left flex items-center">
            <div className="logo max-w-22.5 lg:max-w-full">
              <a href={translatePath('/')}>
                <img src={generalData?.logo?.url ? getStrapiMedia(generalData.logo.url) : logoImg.src} alt={generalData?.logo?.alternativeText ?? 'logo'} width={115} height={46} />
              </a>
            </div>

            <div
              className={`menu${burgerMenuState ? ` ${burgerMenuState}` : ''} fixed lg:static left-0 w-full h-full bg-white lg:bg-transparent z-50 transition-base-style`}
              style={{ top: `${headerHeight}px` }}
            >
              <ul className="lg:flex lg:items-center lg:gap-2 lg:pl-10 p-4 lg:p-0 xl:gap-3 xl:pl-16">
                {headerMenu.map((item, index) => (
                  <li className="lg:py-0 py-6 border-b border-dashed border-battleship-grey lg:border-none" key={`menu-item-${index}`}>
                    <HeaderMenuItem {...item} pathname={pathname} onClick={() => openMenu(false)} />
                  </li>
                ))}
              </ul>

              <div className="p-4 hotline flex lg:hidden items-center">
                <img src={hotlineIcon.src} alt="hotline" width={18} height={18} className="mr-1" />
                <p className="text-lg">
                  {t('general.hotline')}:{" "}
                  <a href={`tel:${generalData?.phone}`} className="font-bold text-usafa-blue">
                    {generalData?.phone}
                  </a>
                </p>
              </div>

              {/* ✅ Astro CTA injected */}
              <div className="button p-4 lg:hidden max-w-50" dangerouslySetInnerHTML={{ __html: ctaHTML ?? '' }} />
            </div>
          </div>

          <div className="right hidden lg:flex items-center xl:min-w-125">
            <div className="contact">
              <div className="hotline flex items-center">
                <img src={hotlineIcon.src} alt="hotline" width={18} height={18} className="mr-1" />
                <p className="text-base xl:text-lg">
                  {t('general.hotline')}:{" "}
                  <a href={`tel:${generalData?.phone}`} className="font-bold text-usafa-blue">
                    {generalData?.phone}
                  </a>
                </p>
              </div>
            </div>

            {/* ✅ Astro CTA injected */}
            <div className="button xl:ml-12.5 ml-7 w-full max-w-47.75" dangerouslySetInnerHTML={{ __html: ctaHTML ?? '' }} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderIsland;