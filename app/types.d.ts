/* eslint-disable @typescript-eslint/no-explicit-any */
interface StrapiServerResponseType<T> {
  data: T;
  meta: any;
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
