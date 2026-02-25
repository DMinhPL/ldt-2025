import { fetchAPI } from '../utils/fetch-api';

async function getAboutPage(locale?: SystemLanguageEnum): Promise<StrapiServerResponseType<AboutPageResponseType>> {
  const path = '/about';

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
      why_block_options: {
        populate: '*',
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
