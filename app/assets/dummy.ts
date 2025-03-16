import mainBg from './images/bg1.png';
import hrBg from './images/bg-hr.png';

const homeDummyData = {
    banner: {
        id: 1,
        description: 'Welcome to our website! Discover amazing content.',
        heading: 'Explore the Best Content',
        link: {
            id: 101,
            isExternal: true,
            text: 'Learn More',
            url: 'https://example.com',
        },
        thumbnail: {
            id: 201,
            url: mainBg.src,
            alternativeText: 'Banner Image',
            documentId: 'doc-001',
        },
    },
    blocks: [
        {
            heading: 'Feature 1',
            description: 'This is a detailed description of feature 1.',
            tag: 'New',
            thumbnail: {
                id: 202,
                url: hrBg.src,
                alternativeText: 'Feature 1 Image',
                documentId: 'doc-002',
            },
        },
        {
            heading: 'Feature 2',
            description: 'This is a detailed description of feature 2.',
            thumbnail: {
                id: 203,
                url: hrBg.src,
                alternativeText: 'Feature 2 Image',
                documentId: 'doc-003',
            },
        },
    ],
    createdAt: '2025-03-16T12:00:00Z',
    updatedAt: '2025-03-16T12:30:00Z',
    publishedAt: '2025-03-16T13:00:00Z',
    id: 1,
};

export default homeDummyData;
