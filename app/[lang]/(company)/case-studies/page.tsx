import getCaseStudyPage, { getCaseStudyList } from '@/app/api/caseStudies';
import Banner from '@/app/components/commons/Banner';
import CaseStudiesPaging from '@/app/components/templates/CaseStudiesPaging';

const CaseStudies: React.FC = async () => {
    const { data: { banner } } = await getCaseStudyPage();
    const { data: caseStudyData, meta } = await getCaseStudyList();
    const caseList = caseStudyData.map((item) => ({
        id: item.id,
        thumbnail: item.thumbnail.url,
        title: item.title,
        description: item.description,
    }));

    return (
        <>
            <Banner
                imgSrc={banner.thumbnail.url}
                title={banner.heading}
                description={banner.description}
            />
            {/* Who we are  */}
            <section id="who" className="py-10 lg:py-[80px]">
                <div className="container mx-auto">
                    <CaseStudiesPaging itemsPerPage={7} data={caseList} meta={meta!} />
                </div>
            </section>
        </>
    );
};

export default CaseStudies;
