import qs from 'qs';
import { getStrapiURL } from './api-helpers';

export async function fetchAPI<T, B = null, S = StrapiServerResponseType<T>>(
  path: string,
  urlParamsObject = {},
  options = {},
  body: B = null as B,
): Promise<S> {
  const token = import.meta.env.STRAPI_API_TOKEN;
  if (!token) throw new Error('The Strapi API Token environment variable is not set.');
  try {
    // Merge default and user options
    const mergedOptions = {
      next: { revalidate: 2 },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        // 'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
      credentials: 'include' as RequestCredentials,
      // cache: 'no-store' as RequestCache,
      ...options,
      body: body ? JSON.stringify(body) : undefined,
    };

    // Build request URL
    const queryString = qs.stringify(urlParamsObject);
    const requestUrl = `${getStrapiURL(
      `/api${path}${queryString ? `?${queryString}` : ''}`,
    )}`;
    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions);
    const data = await response.json();
    if (data.error) {
      console.log('Error: ', path, data.error);
    }

    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Please check if your server is running and you set all the required tokens.', { cause: error });
  }
}
