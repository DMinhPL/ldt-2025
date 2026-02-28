import { fetchAPI } from '../utils/fetch-api';

async function getGeneral(locale?: SystemLanguageEnum): Promise<StrapiServerResponseType<GeneralResponseType>> {
  const path = '/general';

  const urlParamsObject = {
    locale: locale || 'en',
    fields: ['sitename', 'email', 'phone', 'address'],
    populate: {
      seo: {
        fields: [
          'title',
          'description',
          'keywords',
          'slug',
          'canonical_url',
          'og_title',
          'og_description',
          'og_image',
          'og_type',
        ],
        populate: {
          image: {
            fields: ['url'],
          },
        },
      },
      logo: {
        fields: ['url', 'alternativeText'],
      },
      schedule_block: {
        fields: ['heading', 'description'],
        populate: {
          cta: {
            fields: ['text', 'url'],
          },
        },
      },
      socials: {
        populate: {
          fields: ['*'], // Optional: if you want all fields, leave it empty or remove `fields`
        },
      },
      budget_options: {
        populate: {
          fields: ['*'], // Optional: if you want all fields, leave it empty or remove `fields`
        },
      },
      source_options: {
        populate: {
          fields: ['*'], // Optional: if you want all fields, leave it empty or remove `fields`
        },
      },
    },
  };

  return fetchAPI<GeneralResponseType>(
    path,
    urlParamsObject,
  );
}

export async function getLocales(): Promise<LocalesResponseType[]> {
  const path = '/i18n/locales';

  return fetchAPI<LocalesResponseType[], null, LocalesResponseType[]>(
    path,
  );
}

export default getGeneral;
