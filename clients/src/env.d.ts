interface ImportMetaEnv {
  STRAPI_API_URL: string;
  STRAPI_API_TOKEN: string;
  IMAGE_DOMAIN: string;
  SITE_DOMAIN: string;
  STRAPI_PORT: string;
  IMAGE_PATH: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}