import qs from 'qs';
import { getStrapiURL } from './api-helpers';

export async function fetchAPI<T>(
    path: string,
    urlParamsObject = {},
    options = {},
): Promise<StrapiServerResponseType<T>> {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    if (!token) throw new Error('The Strapi API Token environment variable is not set.');

    try {
        // Merge default and user options
        const mergedOptions = {
            next: { revalidate: 60 },
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            ...options,
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
        throw new Error('Please check if your server is running and you set all the required tokens.');
    }
}
