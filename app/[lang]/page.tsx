import Image from 'next/image';
import Link from 'next/link';
import Banner from '../components/commons/Banner';
import Button from '../components/atoms/Button';
import AIModuleIframe from '../components/commons/AIModuleIframe';
import { SVGIcons } from '../utils/icons';
import getHomepage from '../api/homepage';
import { getStrapiMedia } from './utils/api-helpers';

export default async function Home() {
    const { data: { banner, blocks } } = await getHomepage();

    return (
        <>
            <Banner
                imgSrc={getStrapiMedia(banner.thumbnail.url)}
                title={banner.heading}
                description={banner.description}
                action={(
                    <Button className="max-w-[191px]">
                        {banner.link.text}
                    </Button>
                )}
            />
            <section id="ai" className="py-[35px] lg:py-[60px] xl:py-[80px]">
                <div className="container mx-auto">
                    {/* Chat AI  */}
                    <div className="content text-center">
                        <h2 className="text-[30px] lg:text-[55px] text-raisin-black">{blocks[0].heading}</h2>
                        <p className="text-licorice text-lg mt-2 max-w-[641px] mx-auto">
                            {blocks[0].description}
                        </p>
                        <AIModuleIframe />
                    </div>
                    {/* Global HR Management  */}
                    <div className="content mt-12">
                        <h4 className="text-usafa-blue font-semibold text-xl uppercase">{blocks[1].tag}</h4>
                        <h2 className="text-[30px] lg:text-[55px] text-raisin-black font-semibold lg:font-bold">
                            {blocks[1].heading}
                        </h2>
                        <p className="text-licorice text-lg mt-2 max-w-[920px]">
                            {blocks[1].description}
                        </p>
                        <div className="thumbnail max-w-[1100px] xl:max-w-[1280px] mx-auto mt-10">
                            <Image src={getStrapiMedia(blocks[1].thumbnail.url)} width={1356} height={853} alt="banner" />
                        </div>
                        <div className="text-center">
                            <Link href="/case-studies" className="text-green-ryb font-bold text-lg lg:text-xl underline inline-flex items-center gap-2">
                                View more Case studies
                                <Image src={SVGIcons.arrowRight} alt="arrow right" width={19} height={14} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
