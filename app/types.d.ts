interface StrapiServerResponseType<T> {
  data: T;
  meta?: StrapiMetaType;
}

interface StrapiMetaType {
  page: number;
    pageSize: number;
    pageCount: number;
    total: number;
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
  };
  blocks: BlocksContentResponseType[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  id: number;
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
}

interface AboutPageResponseType {
  banner: {
    id: number;
    description: string;
    heading: string;
    link: LinkComponentResponseType;
    thumbnail: ThumbnailComponentResponseType;
  };
  blocks: BlocksContentResponseType[];
  seo: SEOResponseType;
}
