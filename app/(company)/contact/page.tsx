'use client';

import MapEmbed from '@/app/components/atoms/MapEmbed';
import ContactForm, { ContactFormType } from '@/app/components/commons/ContactForm';
import { ContactInfo } from '@/app/components/commons/Footer';
import useHeaderHeight from '@/app/hooks/useHeaderHeight';
import { contactInfo, socialLinks } from '@/app/utils/statics';
import Image from 'next/image';

const Contact: React.FC = () => {
    const headerHeight = useHeaderHeight();
    const handleFormSubmit = (data: ContactFormType) => {
        console.log('Form Submitted:', data);
    };

    return (
        <>
            <div className="container mx-auto">
                <div className="flex flex-wrap lg:flex-row flex-col-reverse pt-[30px] pb-10 lg:py-[80px] max-w-[1200px] mx-auto" style={{ marginTop: headerHeight }}>
                    <div className="form w-full lg:w-1/2 xl:w-7/12 mt-12 lg:mt-0">
                        <ContactForm onSubmit={handleFormSubmit} />
                    </div>
                    <div className="form w-full lg:w-1/2 xl:w-5/12 lg:pl-10 xl:pl-14">
                        <h2 className="text-lg font-semibold text-usafa-blue uppercase">Contact us</h2>
                        <h3 className="text-[30px] lg:text-3xl xl:text-4xl font-bold lg:mt-5">Let’s Get in touch</h3>
                        <p className="mt-3 lg:mt-4">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,
                        </p>
                        <div className="pt-[18px] pb-10 lg:py-10 border-b border-green-ryb">
                            <ContactInfo title="Office" info={contactInfo} />
                        </div>
                        <div className="mt-7 lg:mt-6">
                            <h4 className="font-bold text-xl">Follow us on social media</h4>
                            <div className="flex gap-7 items-center mt-4">
                                {socialLinks.map(({ href, icon, alt }) => (
                                    <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
                                        <Image src={icon} alt={alt} width={20} height={20} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="iframe">
                <MapEmbed
                    width="100%"
                    title="contact map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26123235.510472964!2d9.924607258362428!3d36.941237265383926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a85172a2cc0fcb%3A0xc8da42005936b9be!2sGermany%20Business%20Services!5e0!3m2!1svi!2s!4v1741406502662!5m2!1svi!2s"
                />
            </div>
        </>
    );
};

export default Contact;
