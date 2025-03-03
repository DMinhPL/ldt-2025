'use client';
import React from 'react';
import useHeaderHeight from "@/app/hooks/useHeaderHeight";

export default function CaseStudyDetail({ params }: { params: Promise<{ caseStudyId: string }> }) {
    const headerHeight = useHeaderHeight();
    const [id, setId] = React.useState<string | null>(null);

    React.useEffect(() => {
        params.then(data => setId(data.caseStudyId));
    }, [params]);

    return <div style={{ marginTop: `${headerHeight}px` }}>
        <h2 className="font-bold text-5xl text-center max-w-[850px] mx-auto py-9">
            Chat AI solution for Lorem ipsum dolor sit amet, consectetur adipiscing elit. {id}
        </h2>
    </div>;
}