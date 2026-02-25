import { fetchAPI } from '../utils/fetch-api';

async function getHomepage(locale?: SystemLanguageEnum): Promise<StrapiServerResponseType<HomepageResponseType>> {
  const path = '/homepage';

  const urlParamsObject = {
    locale: locale || 'en',
    populate: {
      banner: {
        fields: ['heading', 'longDescription'],
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
