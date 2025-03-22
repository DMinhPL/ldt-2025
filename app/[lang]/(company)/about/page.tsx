import getAboutPage from '@/app/api/about';
import Button from '@/app/components/atoms/Button';
import AboutAccordion from '@/app/components/commons/AboutAccordion';
import Banner from '@/app/components/commons/Banner';
import Image from 'next/image';
import React from 'react';
import { getStrapiMedia } from '../../utils/api-helpers';

const About: React.FC = async () => {
    const { data: { banner, blocks } } = await getAboutPage();

    return (
        <>
            <Banner
                imgSrc={banner.thumbnail.url}
                titleStyles="lg:max-w-[790px]"
                title={banner.heading}
                description={banner.description}
            />
            {/* Who we are  */}
            <section id="who" className="py-10 lg:py-[80px]">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="content">
                            <h4 className="text-usafa-blue font-semibold text-xl uppercase">{blocks[0].tag}</h4>
                            <h2 className="text-2xl lg:text-[40px] xl:text-[55px] text-raisin-black mt-2 lg:mt-0">
                                {blocks[0].heading}
                            </h2>
                        </div>
                        <div className="content pl-0 lg:pl-10 xl:pl-20">
                            <h4 className="text-usafa-blue font-semibold text-xl opacity-0 pointer-events-none hidden lg:block">placeholder</h4>
                            <p className="text-licorice text-lg lg:mt-2 max-w-[920px]">
                                {blocks[0].description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* What we do  */}
            <section id="what" className="pt-10 pb-8 lg:py-[80px]">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="content">
                            <Image src={getStrapiMedia(blocks[1]?.thumbnail?.url || '')} alt="banner" width={763} height={501} />
                        </div>
                        <div className="content pl-0 lg:pl-10 xl:pl-20">
                            <h4 className="text-usafa-blue font-semibold text-xl uppercase">{blocks[1].tag}</h4>
                            <h2 className="text-2xl lg:text-[40px] xl:text-[55px] text-raisin-black mt-2 lg:mt-0">
                                {blocks[1].heading}
                            </h2>
                            <p className="text-licorice text-lg mt-2 max-w-[920px]">
                                {blocks[1].description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Why choose us  */}
            <section id="why" className="py-[42px] bg-floral-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
                        <div className="content">
                            <h4 className="text-usafa-blue font-semibold text-xl uppercase">{blocks[2].tag}</h4>
                            <h2 className="text-2xl lg:text-[40px] xl:text-[55px] text-raisin-black mt-2 lg:mt-0 mb-9">
                                {blocks[2].heading}
                            </h2>
                            <AboutAccordion />
                        </div>
                        <div className="content pl-0 lg:pl-10 xl:pl-20 mt-4 lg:mt-0 mx-auto lg:mx-0">
                            <Image src={getStrapiMedia(blocks[2]?.thumbnail?.url || '')} alt="banner" width={543} height={541} />
                        </div>
                    </div>
                </div>
            </section>
            {/* Want to chat  */}
            <section id="wantTo" className="py-[80px] bg-floral-white">
                <div className="container mx-auto">
                    <div className="content text-center">
                        <h2 className="text-3xl lg:text-[40px] text-raisin-black">
                            Want to chat about your dream project?
                        </h2>
                        <p className="text-licorice text-lg mt-2">
                            Schedule a free project consultation with one of our solutions architects today!
                        </p>
                        <div className="cta flex justify-center mt-[29px]">
                            <Button className="max-w-[191px]">
                                Schedule Now!
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
