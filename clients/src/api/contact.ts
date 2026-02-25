import { fetchAPI } from '../utils/fetch-api';

async function postContactService(params: ContactPostParamsType): Promise<StrapiServerResponseType<ContactPostResponseType>> {
  const path = '/contacts';

  return fetchAPI<ContactPostResponseType, ContactPostParamsType>(
    path,
    undefined,
    { method: 'POST' },
    params,
  );
}

export async function getContactPage(locale?: SystemLanguageEnum): Promise<StrapiServerResponseType<ContactPageResponseType>> {
  const path = '/contact-page';

  const urlParamsObject = {
    locale: locale || 'en',
    populate: {
      seo: {
        populate: {
          fields: ['title'],
        },
      },
    },
  };

  return fetchAPI<ContactPageResponseType>(
    path,
    urlParamsObject,
  );
}

export default postContactService;
