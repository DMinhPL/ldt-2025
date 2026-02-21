type SystemLanguageEnum = 'en' | 'vi-VN';

interface StrapiServerResponseType<T> {
  data: T;
  meta?: StrapiMetaType;
}

interface StrapiMetaType {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  }
}

interface StrapiServerErrorType {
  message: string;
  name: string;
  status: number
}

interface SEOResponseType {
  id: number;
  title: string;
  description: string;
  keywords: string;
  slug: string;
  caniconical_url: string;
  og_title: string;
  og_description: string;
  og_image: string;
  og_type: string;
}

interface StrapiLinkComponentResponseType {
  id: number;
  isExternal?: boolean;
  text: string;
  url: string;
  icons?: ThumbnailComponentResponseType;
}

interface StrapiOptionValueComponentResponseType {
  label: string;
  value: string;
}

interface ThumbnailComponentResponseType {
  id: number;
  url: string;
  alternativeText?: string;
  documentId: string;
}

interface LinkComponentResponseType {
  id: number;
  isExternal?: boolean;
  text: string;
  url: string;
}

interface BlocksContentResponseType {
  heading: string;
  description: string;
  tag?: string;
  thumbnail: ThumbnailComponentResponseType;
}

interface HomepageResponseType {
  banner: {
    id: number;
    description: string;
    heading: string;
    link: LinkComponentResponseType;
    thumbnail: ThumbnailComponentResponseType;
    longDescription?: string;
  };
  blocks: BlocksContentResponseType[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  id: number;
  seo: SEOResponseType;
}

interface ContactPageResponseType {
  id: number;
  documentId: string;
  title: string;
  description: string;
  tag: string;
  seo: SEOResponseType;
}

interface ChatAIPageResponseType {
  banner: {
    id: number;
    description: string;
    heading: string;
    link: LinkComponentResponseType;
    thumbnail: ThumbnailComponentResponseType;
  };
  blocks: BlocksContentResponseType;
  why_block: {
    id: number;
    heading: string;
    services: {
      id: number;
      title: string;
      description: string;
      icon: ThumbnailComponentResponseType;
    }[]
  };
  seo: SEOResponseType;
}

interface CaseStudyPageResponseType {
  banner: {
    id: number;
    description: string;
    heading: string;
    link: LinkComponentResponseType;
    thumbnail: ThumbnailComponentResponseType;
  };
  seo: SEOResponseType;
}

interface CaseStudyPostListType {
  id: number;
  title: string;
  description: string;
  thumbnail: ThumbnailComponentResponseType;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  documentId: string;
  isHot?: boolean;
  slug: string;
}

interface AboutPageResponseType {
  banner: {
    id: number;
    description: string;
    heading: string;
    link: LinkComponentResponseType;
    thumbnail: ThumbnailComponentResponseType;
    longDescription?: string;
  };
  blocks: BlocksContentResponseType[];
  seo: SEOResponseType;
  why_block_options: BlocksContentResponseType[];
}

interface CaseStudyPostDetailType {
  documentId: string;
  id: number;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  tag: string;
  thumbnail: ThumbnailComponentResponseType;
  contents: {
    id: number;
    description: string;
    heading: string;
    tag: string;
    thumbnail: ThumbnailComponentResponseType;
  }[];
  isHot?: boolean;
  slug: string;
}

type UpdatedStrapiLinkComponentResponseType = Omit<StrapiLinkComponentResponseType, 'icons'> & {
  icons?: string;
};

interface GeneralResponseType {
  id: number;
  documentId: string;
  sitename: string;
  email: string;
  phone: string;
  address: string;
  seo: SEOResponseType;
  logo: ThumbnailComponentResponseType;
  schedule_block: {
    id: number;
    heading: string;
    description: string;
    cta: StrapiLinkComponentResponseType;
  },
  socials: UpdatedStrapiLinkComponentResponseType[];
  budget_options: StrapiOptionValueComponentResponseType[];
  source_options: StrapiOptionValueComponentResponseType[];
}

interface LocalesResponseType {
  id: number;
  documentId: string;
  name: string;
  code: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  isDefault?: boolean;
}

interface ContactPostParamsType {
  name: string;
  email: string;
  phone: string;
  detail: string;
  company_name: string;
  budget: string;
  source: string;
}

interface ContactPostResponseType {
  id: number;
  documentId: string;
  name: string;
  email: string;
  company_name: string;
  phone: string;
  detail: string;
  budget: string;
  source: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}
