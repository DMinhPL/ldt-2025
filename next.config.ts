import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    experimental: {},
    images: {
        domains: [process.env.NEXT_PUBLIC_IMAGE_HOSTNAME || 'localhost', 'stag.longduongthuan.com'], // You can add more domain entries if needed
        remotePatterns: [
            {
                protocol: 'http',
                hostname: process.env.NEXT_PUBLIC_IMAGE_HOSTNAME || 'localhost',
                port: process.env.NEXT_PUBLIC_STRAPI_PORT,
                pathname: process.env.NEXT_PUBLIC_IMAGE_PATH,
            },
            {
                protocol: 'https',
                hostname: process.env.NEXT_PUBLIC_EXTERNAL_IMAGE_HOSTNAME || '',
            },
        ],
    },
};

export default nextConfig;
