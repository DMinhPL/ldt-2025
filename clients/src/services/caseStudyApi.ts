
export async function fetchCaseStudyList(lang: SystemLanguageEnum): Promise<CaseStudyPostListType[]> {
  const url =
    `${import.meta.env.STRAPI_API_URL}/api/case-study-posts` +
    `?sort=publishedAt:desc` +
    `&locale=${encodeURIComponent(lang)}` +
    `&populate[thumbnail][fields][0]=url` +
    `&populate[thumbnail][fields][1]=alternativeText`;

  const res = await fetch(url);
  const json = await res.json();

  return json?.data ?? [];
}

export async function fetchCaseStudyDetail(lang: SystemLanguageEnum, slug: string): Promise<CaseStudyPostDetailType | null> {
  const url =
    `${import.meta.env.STRAPI_API_URL}/api/case-study-posts` +
    `?locale=${encodeURIComponent(lang)}` +
    `&filters[slug][$eq]=${encodeURIComponent(slug)}` +
    `&populate[contents][populate][thumbnail][fields][0]=url` +
    `&populate[contents][populate][thumbnail][fields][1]=alternativeText` +
    `&populate[thumbnail][fields][0]=url` +
    `&populate[thumbnail][fields][1]=alternativeText` +
    `&sort[0]=publishedAt:desc`;

  const res = await fetch(url);
  const json = await res.json();

  return json?.data?.[0] ?? null;
}