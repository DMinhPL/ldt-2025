import { fetchAPI } from '../[lang]/utils/fetch-api';

async function getHomepage(): Promise<StrapiServerResponseType<HomepageResponseType>> {
    const path = '/homepage';

    const urlParamsObject = {
        populate: {
            banner: {
                fields: ['heading', 'description'],
                populate: {
                    link: {
                        fields: ['text', 'url', 'isExternal'],
                    },
                    thumbnail: {
                        fields: ['*'],
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
        },
    };

    return fetchAPI<HomepageResponseType>(
        path,
        urlParamsObject,
    );
}

export default getHomepage;
