'use client';
import React from 'react';
import useHeaderHeight from "@/app/hooks/useHeaderHeight";
import csImg from '../../../assets/images/cs-1.png';
import Image from 'next/image';
import Button from '@/app/components/atoms/Button';

export default function CaseStudyDetail({ params }: { params: Promise<{ caseStudyId: string }> }) {
    const headerHeight = useHeaderHeight();
    const [id, setId] = React.useState<string | null>(null);

    React.useEffect(() => {
        params.then(data => setId(data.caseStudyId));
    }, [params]);

    return <div style={{ marginTop: `${headerHeight}px` }}>
        <h2 className="font-bold text-3xl lg:text-5xl text-center max-w-[850px] mx-auto py-9">
            Chat AI solution for Lorem ipsum dolor sit amet, consectetur adipiscing elit. {id}
        </h2>
        <div className="container mx-auto p-0">
            <Image src={csImg.src} className='object-cover w-full' alt="banner" width={1200} height={750} />
        </div>
        <div className="container mx-auto py-20">
            <div className="overview max-w-[886px] mx-auto">
                <h2 className='text-[40px]'>Overview</h2>
                <p className='text-lg mt-7'>
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
            <div className="flex gap-4 mt-14">
                <div className="rounded-3xl overflow-hidden flex-1/2 h-full">
                    <Image src={csImg.src} className='object-cover w-full' width={641} height={531} alt='idfjlk' />
                </div>
                <div className="content flex-1/2">
                    <div className="max-w-96 mx-auto">
                        <h2 className='text-3xl'>Lorem Ipsum is simply dummy text of the printing and typesetting</h2>
                        <p className='text-lg mt-4'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                            aLorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>
                </div>
            </div>
            {/* line 2 */}
            <div className="flex gap-4 mt-14">
                <div className="content flex-1/2">
                    <div className="max-w-96 mx-auto">
                        <h2 className='text-3xl'>Lorem Ipsum is simply dummy text of the printing and typesetting</h2>
                        <p className='text-lg mt-4'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                            aLorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>
                </div>
                <div className="rounded-3xl overflow-hidden flex-1/2 h-full">
                    <Image src={csImg.src} className='object-cover w-full' width={641} height={531} alt='idfjlk' />
                </div>
            </div>
            {/* line 3 */}
            <div className="flex gap-4 mt-14">
                <div className="rounded-3xl overflow-hidden flex-1/2 h-full">
                    <Image src={csImg.src} className='object-cover w-full' width={641} height={531} alt='idfjlk' />
                </div>
                <div className="content flex-1/2">
                    <div className="max-w-96 mx-auto">
                        <h2 className='text-3xl'>Lorem Ipsum is simply dummy text of the printing and typesetting</h2>
                        <p className='text-lg mt-4'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                            aLorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>
                </div>
            </div>

        </div>
        <div className="content py-14 bg-white-smoke">
            <div className="container mx-auto">
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
    </div>;
}