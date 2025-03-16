'use client';

import Image from 'next/image';
import Banner from '@/app/components/commons/Banner';
import AIModuleIframe from '@/app/components/commons/AIModuleIframe';
import useMatchHeight from '@/app/hooks/useMatchHeight';
import Button from '@/app/components/atoms/Button';
import chatAIBg from '../../../assets/images/banner-ai.png';
import robotIc from '../../../assets/icons/ic_robot.svg';
import telesaleIc from '../../../assets/icons/ic_telesales.svg';
import starThumbIc from '../../../assets/icons/ic_starThumb.svg';

const whyBlocks = [
    {
        icon: <Image src={robotIc} alt="icon" width={110} height={109} />,
        title: 'Automate Customer Support',
        description: 'Automate Customer Support Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s',
    },
    {
        icon: <Image src={telesaleIc} alt="icon" width={100} height={109} />,
        title: 'Assist Developers',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s',
    },
    {
        icon: <Image src={starThumbIc} alt="icon" width={106} height={107} />,
        title: 'Personalized User Experience',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s',
    },
];

const ChatAI = () => {
    useMatchHeight('.icon');
    useMatchHeight('.why-heading');

    return (
        <>
            <Banner
                imgSrc={chatAIBg.src}
                title="Chat AI – Experience Cutting-Edge Artificial Intelligence"
            />
            {/* Who we are  */}
            <section id="who" className="py-15 lg:pt-[80px] lg:pb-0">
                <div className="container mx-auto">
                    <div className="content text-center">
                        <h2 className="text-3xl lg:text-[40px] xl:text-[55px] text-raisin-black">
                            Experience Chat LDT AI Now
                        </h2>
                        <AIModuleIframe />
                    </div>
                </div>
            </section>
            {/* Why choose  */}
            <section id="why" className="py-15 lg:py-[70px] bg-[#51AA350D]">
                <div className="container mx-auto">
                    <div className="content flex flex-wrap">
                        <h2 className="text-3xl text-center lg:text-left lg:text-[40px] text-raisin-black lg:w-4/12 w-full">
                            Why Should You Use Chat AI?
                        </h2>
                        <div className="info lg:w-8/12 lg:pl-10 xl:pl-20 mt-9 lg:mt-0">
                            <div className="grid lg:grid-cols-3 gap-4">
                                {
                                    whyBlocks.map((item, index) => (
                                        <div key={index} className="gap-5 flex flex-col lg:block items-center mb-2 lg:mb-0">
                                            <div className="icon">
                                                {item.icon}
                                            </div>
                                            <div className="mt-3 text-center lg:text-left">
                                                <h3 className="text-xl font-bold why-heading">{item.title}</h3>
                                                <p className="text-lg">{item.description}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="content mt-10 lg:mt-20">
                        <h2 className="text-3xl text-center lg:text-[40px] text-raisin-black">
                            Want to chat about your dream project?
                        </h2>
                        <p className="text-licorice text-lg mt-2 text-center">
                            Schedule a free project consultation with one of our solutions architects today!
                        </p>
                        <div className="cta max-w-[191px] mx-auto mt-6">
                            <Button>
                                Schedule Now!
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ChatAI;
