import { fetchAPI } from '../[lang]/utils/fetch-api';

async function getAboutPage(): Promise<StrapiServerResponseType<AboutPageResponseType>> {
    const path = '/about-us';

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
            blocks: {
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

    return fetchAPI<AboutPageResponseType>(
        path,
        urlParamsObject,
    );
}

export default getAboutPage;
