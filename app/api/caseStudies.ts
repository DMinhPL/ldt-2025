import { fetchAPI } from '../[lang]/utils/fetch-api';

async function getCaseStudyPage(): Promise<StrapiServerResponseType<CaseStudyPageResponseType>> {
    const path = '/case-study';

    const urlParamsObject = {
        populate: {
            banner: {
                fields: ['heading', 'description'],
                populate: {
                    thumbnail: {
                        fields: ['url', 'alternativeText'],
                    },
                },
            },
            seo: {
                populate: {
                    fields: ['title'],
                },
            },
        },
    };

    return fetchAPI<CaseStudyPageResponseType>(
        path,
        urlParamsObject,
    );
}

export async function getCaseStudyList(): Promise<StrapiServerResponseType<CaseStudyPostListType[]>> {
    const path = '/case-study-posts';

    const urlParamsObject = {
        populate: {
            thumbnail: {
                fields: ['url', 'alternativeText'],
            },
        },
    };

    return fetchAPI<CaseStudyPostListType[]>(
        path,
        urlParamsObject,
    );
}

export default getCaseStudyPage;
