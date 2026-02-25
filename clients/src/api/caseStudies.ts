import { fetchAPI } from '../utils/fetch-api';

async function getCaseStudyPage(locale?: SystemLanguageEnum): Promise<StrapiServerResponseType<CaseStudyPageResponseType>> {
  const path = '/case-study';

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

async function getCaseStudyList(
  page: number = 1,
  pageSize: number = 10,
  locale: SystemLanguageEnum = 'en',
): Promise<StrapiServerResponseType<CaseStudyPostListType[]>> {
  const path = '/case-study-posts';

  const urlParamsObject = {
    locale: locale || 'en',
    pagination: {
      page,
      pageSize,
    },
    filters: {
      $or: [
        { isHot: { $ne: true } },
        { isHot: { $null: true } },
      ],
    },
    populate: {
      thumbnail: {
        fields: ['url', 'alternativeText'],
      },
    },
    sort: ['publishedAt:desc'],
  };

  return fetchAPI<CaseStudyPostListType[]>(
    path,
    urlParamsObject,
  );
}

const getHotCaseStudyPost = async (locale?: SystemLanguageEnum) => {
  const res = await fetchAPI<CaseStudyPostListType[]>(
    '/case-study-posts',
    {
      locale: locale || 'en',
      filters: {
        isHot: {
          $eq: true,
        },
      },
      populate: {
        thumbnail: {
          fields: ['url', 'alternativeText'],
        },
      },
      sort: ['publishedAt:desc'],
    },
  );

  return res.data[0];
};

async function getCaseStudyDetail(
  slug: string,
  locale?: SystemLanguageEnum,
): Promise<StrapiServerResponseType<CaseStudyPostDetailType[]>> {
  const path = '/case-study-posts';

  const urlParamsObject = {
    locale: locale || 'en',
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: {
      contents: {
        populate: {
          thumbnail: {
            fields: ['url', 'alternativeText'],
          },
        },
        fields: ['*'],
      },
      thumbnail: {
        fields: ['url', 'alternativeText'],
      },
    },
  };

  return fetchAPI<CaseStudyPostDetailType[]>(path, urlParamsObject);
}

export {
  getCaseStudyPage,
  getCaseStudyList,
  getHotCaseStudyPost,
  getCaseStudyDetail
};
