import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/images/logo.png";
import { SVGIcons } from "@/app/utils/icons";
import Button from "../atoms/Button";

/** Reusable Contact Info Component */
const ContactInfo: React.FC<{ title: string; info: { href?: string; icon: string; text: string }[] }> = ({ title, info }) => (
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
    <div>
        <h3 className={`text-lg lg:text-[22px] font-bold ${title ? "" : "opacity-0 pointer-events-none hidden lg:block"}`}>{title || "Placeholder"}</h3>
        <ul className="lg:text-lg lg:mt-5 text-base mt-2 gap-2 flex flex-col">
            {links.map(({ label, href }, index) => (
                <li key={index} className="flex">
                    <Link href={href} className="ml-2 w-full">
                        {label}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);


const Footer: React.FC = () => {
    const socialLinks = [
        { href: "https://www.facebook.com/", icon: SVGIcons.facebook, alt: "Facebook" },
        { href: "https://www.youtube.com/", icon: SVGIcons.youtube, alt: "YouTube" },
        { href: "https://www.google.com/", icon: SVGIcons.google, alt: "Google" },
    ];

    const contactInfo = [
        { href: "", icon: SVGIcons.location, text: "Germany — 785 15h Street, Office 478 Berlin, De 81566" },
        { href: "mailto:info@email.com", icon: SVGIcons.envelop, text: "info@email.com" },
        { href: "tel:123456789", icon: SVGIcons.phone, text: "123456789" },
    ];

    const navLinks = [
        { title: "Links", links: [{ label: "Home", href: "/" }, { label: "Chat AI", href: "/chat-ai" }, { label: "Case Studies", href: "/case-studies" }] },
        { title: "", links: [{ label: "About Us", href: "/about" }, { label: "Contact Us", href: "/contact" }] },
    ];

    return (
        <footer className="bg-white">
            <div className="container mx-auto pt-[50px] pb-5">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    {/* Logo & Socials */}
                    <div>
                        <Link href="/">
                            <Image src={logo} alt="Company Logo" width={121} height={49} />
                        </Link>
                        <div className="flex gap-7 items-center mt-14">
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
                    {navLinks.map(({ title, links }, index) => (
                        <NavLinkList key={index} title={title} links={links} />
                    ))}

                    {/* CTA Button */}
                    <div className="">
                        <h3 className={`text-lg lg:text-[22px] font-bold opacity-0 pointer-events-none`}>Placeholder</h3>
                        <div className="action mt-5 max-w-[191px]">
                            <Button>Get Started</Button>
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

