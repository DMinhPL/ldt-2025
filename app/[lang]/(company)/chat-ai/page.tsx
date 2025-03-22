import getChatAIPage from '@/app/api/chatAi';
import Button from '@/app/components/atoms/Button';
import AIModuleIframe from '@/app/components/commons/AIModuleIframe';
import Banner from '@/app/components/commons/Banner';
import WhyBlockItem from '@/app/components/templates/WhyBlockItem';
import Image from 'next/image';

export default async function ChatAI() {
    const { data: { banner, blocks, why_block } } = await getChatAIPage();
    const whyBlocks = why_block.services.map((item) => ({
        title: item.title,
        description: item.description,
        icon: <Image src={item.icon.url} alt={item.icon.alternativeText || ''} width={110} height={109} />,
    }));

    return (
        <>
            <Banner
                imgSrc={banner.thumbnail.url}
                title={banner.heading}
            />
            {/* Who we are  */}
            <section id="who" className="py-15 lg:pt-[80px] lg:pb-0">
                <div className="container mx-auto">
                    <div className="content text-center">
                        <h2 className="text-3xl lg:text-[40px] xl:text-[55px] text-raisin-black">
                            {blocks.heading}
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
                            {why_block.heading}
                        </h2>
                        <div className="info lg:w-8/12 lg:pl-10 xl:pl-20 mt-9 lg:mt-0">
                            <div className="grid lg:grid-cols-3 gap-4">
                                {
                                    whyBlocks.map((item, index) => (
                                        <WhyBlockItem key={index} {...item} />
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
}
