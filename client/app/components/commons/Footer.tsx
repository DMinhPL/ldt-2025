import { contactInfo, navLinks, socialLinks } from "@/app/utils/statics";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../assets/images/logo.png";
import Button from "../atoms/Button";
import LanguageSwitcher from "../atoms/LanguageSwitcher";

/** Reusable Contact Info Component */
export const ContactInfo: React.FC<{ title: string; info: { href?: string; icon: string; text: string }[] }> = ({ title, info }) => (
    <div className="text-raisin-black">
        <h3 className="text-lg lg:text-[22px] font-bold">{title}</h3>
        <ul className="lg:text-lg lg:mt-5 text-base mt-2 gap-2 flex flex-col">
            {info.map(({ href, icon, text }, index) => (
                <li key={index} className="flex">
                    <div className="w-[24px] mt-1.5">
                        <Image src={icon} alt="icon" width={17} height={17} />
                    </div>
                    {href ? (
                        <a href={href} className="ml-2 w-full">
                            {text}
                        </a>
                    ) : (
                        <p className="ml-2 w-full">{text}</p>
                    )}
                </li>
            ))}
        </ul>
    </div>
);

/** Reusable Navigation Links Component with Invisible Title Handling */
const NavLinkList: React.FC<{ title?: string; links: { label: string; href: string }[] }> = ({ title, links }) => (
    <div className="navLink lg:block hidden">
        <h3 className={`text-lg lg:text-[22px] font-bold ${title ? "" : "opacity-0 pointer-events-none lg:block"}`}>{title || "Placeholder"}</h3>
        <ul className="lg:text-lg lg:mt-5 text-base mt-2 gap-2 flex flex-col">
            {links.map(({ label, href }, index) => (
                <li key={`${label}-${index}`} className="flex">
                    <Link href={href} className="lg:ml-2 w-full">
                        {label}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);
/** Reusable Navigation Links Component with Invisible Title Handling */
const NavLinkListMobile: React.FC<{ title?: string; links: { label: string; href: string }[] }> = ({ title, links }) => (
    <div className="navLink lg:w-full w-1/2">
        <h3 className={`text-lg lg:text-[22px] font-bold ${title ? "" : "opacity-0 pointer-events-none lg:block"}`}>{title || "Placeholder"}</h3>
        <ul className="lg:text-lg lg:mt-5 text-base mt-2 gap-2 flex flex-col">
            {links.map(({ label, href }, index) => (
                <li key={`${label}-${index}`} className="flex">
                    <Link href={href} className="lg:ml-2 w-full">
                        {label}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);


const Footer: React.FC = () => {

    return (
        <footer className="bg-white">
            <div className="container mx-auto  pt-9 lg:pt-[50px] pb-5">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    {/* Logo & Socials */}
                    <div className="lg:block flex justify-center items-center flex-col">
                        <Link href="/">
                            <Image src={logo} alt="Company Logo" width={121} height={49} />
                        </Link>
                        <div className="flex gap-7 items-center mt-4 lg:mt-14">
                            {socialLinks.map(({ href, icon, alt }) => (
                                <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
                                    <Image src={icon} alt={alt} width={20} height={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Information */}
                    <ContactInfo title="Office" info={contactInfo} />

                    {/* Navigation Links with Invisible Title Handling */}
                    <div className="flex lg:hidden">
                        {navLinks.map(({ title, links }, index) => (
                            <NavLinkListMobile key={`${title}-${index}`} title={title} links={links} />
                        ))}
                    </div>
                    {navLinks.map(({ title, links }, index) => (
                        <NavLinkList key={`${title}-${index}`} title={title} links={links} />
                    ))}

                    {/* CTA Button */}
                    <div className="lg:block flex flex-row-reverse gap-3.5">
                        <h3 className={`text-lg lg:text-[22px] font-bold opacity-0 pointer-events-none hidden lg:block`}>Placeholder</h3>
                        <div className="action lg:mt-5 max-w-[191px] lg:w-full w-1/2">
                            <Button>Get Started</Button>
                        </div>
                        <div className="lg:mt-2 max-w-[191px] lg:w-full w-1/2">
                            <LanguageSwitcher />
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="relative text-center pt-3 pb-4">
                <div className="border-t border-green-ryb absolute top-0 left-0 w-full h-[1px] opacity-[0.29]"></div>
                <h3 className="text-battleship-grey">©2024 Design by Long duong thuan</h3>
            </div>
        </footer>
    );
};

export default Footer;

