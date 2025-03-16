import { SVGIcons } from './icons';

const socialLinks = [
    {
        href: 'https://www.facebook.com/',
        icon: SVGIcons.facebook,
        alt: 'Facebook',
    },
    { href: 'https://www.youtube.com/', icon: SVGIcons.youtube, alt: 'YouTube' },
    { href: 'https://www.google.com/', icon: SVGIcons.google, alt: 'Google' },
];

const contactInfo = [
    {
        href: '',
        icon: SVGIcons.location,
        text: 'Germany — 785 15h Street, Office 478 Berlin, De 81566',
    },
    {
        href: 'mailto:info@email.com',
        icon: SVGIcons.envelop,
        text: 'info@email.com',
    },
    { href: 'tel:123456789', icon: SVGIcons.phone, text: '123456789' },
];

const navLinks = [
    {
        title: 'Links',
        links: [
            { label: 'Home', href: '/' },
            { label: 'Chat AI', href: '/chat-ai' },
            { label: 'Case Studies', href: '/case-studies' },
        ],
    },
    {
        title: '',
        links: [
            { label: 'About Us', href: '/about' },
            { label: 'Contact Us', href: '/contact' },
        ],
    },
];

export { socialLinks, contactInfo, navLinks };
