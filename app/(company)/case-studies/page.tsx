import Banner from '@/app/components/commons/Banner';
import caseBg from '../../assets/images/banner-case.png';

const CaseStudies: React.FC = () => {
    return <>
        <Banner
            imgSrc={caseBg.src}
            title="Success Stories - Real Case Studies"
            description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a'
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

export default CaseStudies;