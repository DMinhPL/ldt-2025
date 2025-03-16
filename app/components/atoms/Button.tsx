import classNames from 'classnames';
import React, { ButtonHTMLAttributes, HTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: HTMLAttributes<HTMLButtonElement>['className'];
    variants?: 'primary' | 'secondary';
    size?: 'base' | 'sm';
}

const getButtonClasses = (
    variants: Props['variants'],
    size: Props['size'],
    disabled: boolean,
    className?: HTMLAttributes<HTMLButtonElement>['className'],
) => {
    const baseClasses = className?.includes('w-') ? 'a-button button-base-style rounded-sm' : 'a-button button-base-style w-full';

    return classNames(
        baseClasses,
        {
            'bg-deep-lemon opacity-30 text-white pointer-events-none border-0': disabled,
            'bg-green-ryb text-white h-[45px] hover:bg-sap-green': !disabled && variants === 'primary',
            'h-[30px]': size === 'sm',
        },
    );
};

const Button: React.FC<Props> = ({
    children, className, variants = 'primary', disabled, size = 'base', type, ...props
}) => {
    const buttonClass = getButtonClasses(variants, size, !!disabled, className);

    return (
        <button type={type} disabled={disabled} className={`${buttonClass} ${className} hover:`} {...props}>
            {children}
        </button>
    );
};

export default Button;
