import { fetchAPI } from '../[lang]/utils/fetch-api';

async function getChatAIPage(): Promise<StrapiServerResponseType<ChatAIPageResponseType>> {
    const path = '/chat-ai';

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
            populate: {
                thumbnail: {
                    fields: ['url', 'alternativeText'],
                },
            },
            why_block: {
                populate: {
                    services: {
                        fields: ['title', 'description'],
                        populate: {
                            icon: {
                                fields: ['url', 'alternativeText'],
                            },
                        },
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

    return fetchAPI<ChatAIPageResponseType>(
        path,
        urlParamsObject,
    );
}

export default getChatAIPage;
