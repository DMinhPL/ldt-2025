import Banner from '@/app/components/commons/Banner';
import caseBg from '../../assets/images/banner-case.png';
import case1Img from '../../assets/images/cs-1.png';
import case2Img from '../../assets/images/cs-2.png';
import case3Img from '../../assets/images/cs-3.png';
import case4Img from '../../assets/images/cs-4.png';
import case5Img from '../../assets/images/cs-5.png';
import CaseStudyCard from '@/app/components/commons/CaseStudyCard';

const caseData = [
    {
        id: 1,
        thumbnail: case1Img.src,
        title: 'Chat AI solution for Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a',
    },
    {
        thumbnail: case2Img.src,
        id: 2,
        title: 'Revolutionizing Human Resource Management: Our Journey in Software Development',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a',
    },
    {
        thumbnail: case3Img.src,
        id: 3,
        title: 'Chat AI solution for Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a',
    },
    {
        thumbnail: case4Img.src,
        id: 4,
        title: 'Revolutionizing Human Resource Management: Our Journey in Software Development',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a',
    },
    {
        thumbnail: case5Img.src,
        id: 5,
        title: 'Chat AI solution for Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a',
    },
    {
        thumbnail: case1Img.src,
        id: 6,
        title: 'Chat AI solution for Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a',
    },
    {
        thumbnail: case3Img.src,
        id: 7,
        title: 'Chat AI solution for Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a',
    },
]

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
                <div className="content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {
                        caseData.map((item, index) => {
                            return (
                                <div
                                    key={item.id}
                                    className={`overflow-hidden ${index === 0 ? "md:col-span-2 lg:col-span-3" : "col-span-1"
                                        }`}
                                >
                                    <CaseStudyCard key={index} {...item} isMain={index === 0} />
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </section>
    </>
};

export default CaseStudies;