import React from 'react';
import Button from '../atoms/Button';

interface CTASectionProps {
    title?: string;
    description?: string;
    buttonText?: string;
    className?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
    title = 'Want to chat about your dream project?',
    description = 'Schedule a free project consultation with one of our solutions architects today!',
    buttonText = 'Schedule Now!',
    className = '',
}) => (
    <section className={`py-[80px] bg-floral-white ${className}`}>
        <div className="container mx-auto">
            <div className="content text-center">
                <h2 className="text-3xl lg:text-[40px] text-raisin-black">
                    {title}
                </h2>
                <p className="text-licorice text-lg mt-2">
                    {description}
                </p>
                <div className="cta flex justify-center mt-[29px]">
                    {/* Note: Button width (191px) matches design system. Consider moving to CSS variable in future */}
                    <Button className="max-w-[191px]">
                        {buttonText}
                    </Button>
                </div>
            </div>
        </div>
    </section>
);

export default CTASection;
