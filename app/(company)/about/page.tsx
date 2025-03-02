import Banner from '@/app/components/commons/Banner';
import React from 'react';
import aboutBg from '../../assets/images/banner-about.png';
import whatWeDoImg from '../../assets/images/whatwedo.png';
import whyChooseUsImg from '../../assets/images/whyChooseUs.png';
import Image from 'next/image';
import AboutAccordion from '@/app/components/commons/AboutAccordion';
import Button from '@/app/components/atoms/Button';

const About = () => {
    return <>
        <Banner
            imgSrc={aboutBg.src}
            titleStyles='lg:max-w-[790px]'
            title="Accelerating your business through innovative motion IT Solutions problems."
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a"
        />
        {/* Who we are  */}
        <section id="who" className='py-10 lg:py-[80px]'>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="content">
                        <h4 className="text-usafa-blue font-semibold text-xl">WHO WE ARE</h4>
                        <h2 className="text-xl lg:text-[40px] xl:text-[55px] text-raisin-black">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                        </h2>
                    </div>
                    <div className="content pl-0 lg:pl-10 xl:pl-20">
                        <h4 className="text-usafa-blue font-semibold text-xl opacity-0 pointer-events-none hidden lg:block">placeholder</h4>
                        <p className="text-licorice text-lg lg:mt-2 max-w-[920px]">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a
                        </p>
                    </div>
                </div>
            </div>
        </section>
        {/* What we do  */}
        <section id="what" className='py-10 lg:py-[80px]'>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="content">
                        <Image src={whatWeDoImg.src} alt="banner" width={763} height={501} />
                    </div>
                    <div className="content pl-0 lg:pl-10 xl:pl-20">
                        <h4 className="text-usafa-blue font-semibold text-xl">WHAT WE DO</h4>
                        <h2 className="text-xl lg:text-[40px] xl:text-[55px] text-raisin-black">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                        </h2>
                        <p className="text-licorice text-lg mt-2 max-w-[920px]">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make aLorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                            ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                        </p>
                    </div>
                </div>
            </div>
        </section>
        {/* Why choose us  */}
        <section id="why" className='py-[42px] bg-floral-white'>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
                    <div className="content">
                        <h4 className="text-usafa-blue font-semibold text-xl">WHY CHOOSE US</h4>
                        <h2 className="text-xl lg:text-[40px] xl:text-[55px] text-raisin-black mb-9">
                            We are expert in IT solutions Services
                        </h2>
                        <AboutAccordion />
                    </div>
                    <div className="content pl-0 lg:pl-10 xl:pl-20 mt-4 lg:mt-0 mx-auto lg:mx-0">
                        <Image src={whyChooseUsImg.src} alt="banner" width={543} height={541} />
                    </div>
                </div>
            </div>
        </section>
        {/* Want to chat  */}
        <section id="wantTo" className='py-[80px] bg-floral-white'>
            <div className="container mx-auto">
                <div className="content text-center">
                    <h2 className="text-3xl lg:text-[40px] text-raisin-black">
                        Want to chat about your dream project?
                    </h2>
                    <p className="text-licorice text-lg mt-2">
                        Schedule a free project consultation with one of our solutions architects today!
                    </p>
                    <div className="cta flex justify-center mt-[29px]">
                        <Button className='max-w-[191px]'>
                            Schedule Now!
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    </>
};

export default About;