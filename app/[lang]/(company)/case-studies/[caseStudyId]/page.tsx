'use client';

import React from 'react';
import Image from 'next/image';
import useHeaderHeight from '@/app/hooks/useHeaderHeight';
import CTASection from '@/app/components/commons/CTASection';
import ContentImageBlock from '@/app/components/commons/ContentImageBlock';
import csImg from '../../../../assets/images/cs-1.png';

export default function CaseStudyDetail({ params }: { params: Promise<{ caseStudyId: string }> }) {
    const headerHeight = useHeaderHeight();
    const [id, setId] = React.useState<string | null>(null);

    React.useEffect(() => {
        params.then((data) => setId(data.caseStudyId));
    }, [params]);

    return (
        <div style={{ marginTop: `${headerHeight}px` }}>
            <h2 className="font-bold text-3xl lg:text-5xl text-center max-w-[850px] mx-auto py-9">
                Chat AI solution for Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                {' '}
                {id}
            </h2>
            <div className="container mx-auto p-0">
                <Image src={csImg.src} className="object-cover w-full" alt="banner" width={1200} height={750} />
            </div>
            <div className="container mx-auto py-20">
                <div className="overview max-w-[886px] mx-auto">
                    <h2 className="text-[40px]">Overview</h2>
                    <p className="text-lg mt-7">
                        Web Design and Development, consectetur adipiscing elit. Cursus molestie sit lectus eu vel platea tellus amet quam.
                        Metus, ultrices velit quis nisi varius. Parturient gravida odio felis sit at arcu habitant tristique.
                        Malesuada ac mi elit, scelerisque felis eu pharetra. Maecenas eget lorem nisl lectus arcu ac commodo arcu elit.
                        Tempus condimentum aenean neque id vulputate adipiscing facilisis etiam. Web Design and Development,
                        consectetur adipiscing elit. Cursus molestie sit lectus eu vel platea tellus amet quam. Metus, ultrices velit quis nisi varius.
                        Parturient gravida odio felis sit at arcu habitant tristique. Malesuada ac mi elit, scelerisque felis eu pharetra.
                        Maecenas eget lorem nisl lectus arcu ac commodo arcu elit.
                        Tempus condimentum aenean neque id vulputate adipiscing facilisis etiam.
                    </p>
                </div>
                {/* line 1 */}
                <ContentImageBlock
                    imageSrc={csImg.src}
                    imagePosition="left"
                    title="Lorem Ipsum is simply dummy text of the printing and typesetting"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make aLorem Ipsum is simply dummy text of the printing and typesetting industry."
                    imageAlt="case study"
                />
                {/* line 2 */}
                <ContentImageBlock
                    imageSrc={csImg.src}
                    imagePosition="right"
                    title="Lorem Ipsum is simply dummy text of the printing and typesetting"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make aLorem Ipsum is simply dummy text of the printing and typesetting industry."
                    imageAlt="case study"
                />
                {/* line 3 */}
                <ContentImageBlock
                    imageSrc={csImg.src}
                    imagePosition="left"
                    title="Lorem Ipsum is simply dummy text of the printing and typesetting"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make aLorem Ipsum is simply dummy text of the printing and typesetting industry."
                    imageAlt="case study"
                />

            </div>
            <CTASection className="py-14 bg-white-smoke" />
        </div>
    );
}
