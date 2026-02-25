import { fetchAPI } from '../utils/fetch-api';

async function getChatAIPage(locale?: SystemLanguageEnum): Promise<StrapiServerResponseType<ChatAIPageResponseType>> {
  const path = '/chat-ai';

  const urlParamsObject = {
    locale: locale || 'en',
    populate: {
      banner: {
        fields: ['heading', 'longDescription'],
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
