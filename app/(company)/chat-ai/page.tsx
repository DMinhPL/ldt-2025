import Banner from '@/app/components/commons/Banner';
import chatAIBg from '../../assets/images/banner-ai.png';

const ChatAI = () => {
    return <>
        <Banner
            imgSrc={chatAIBg.src}
            title="Chat AI – Experience Cutting-Edge Artificial Intelligence"
        />
        {/* Who we are  */}
        <section id="who" className='py-10 lg:py-[80px]'>
            <div className="container mx-auto">
                <div className="content text-center">
                    <h2 className="text-xl lg:text-[40px] xl:text-[55px] text-raisin-black">
                        Experience Chat LDT AI Now
                    </h2>
                </div>
            </div>
        </section>
    </>
};

export default ChatAI;