import { fetchAPI } from '../[lang]/utils/fetch-api';

async function getHomepage(): Promise<
  StrapiServerResponseType<HomepageResponseType>
  > {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

    if (!token) throw new Error('The Strapi API Token environment variable is not set.');

    const path = '/homepage';
    const options = { headers: { Authorization: `Bearer ${token}` } };

    const urlParamsObject = {
        populate: {
            banner: {
                fields: ['heading', 'description'],
                populate: {
                    link: {
                        fields: ['text', 'url', 'isExternal'],
                    },
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
        },
    };

    const response = await fetchAPI<HomepageResponseType>(
        path,
        urlParamsObject,
        options,
    );

    return response;
}

export default getHomepage;
