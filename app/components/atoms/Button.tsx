import React, { HTMLAttributes } from 'react';

interface Props {
    children: React.ReactNode;
    className?: HTMLAttributes<HTMLButtonElement>['className'];
}

const Button: React.FC<Props> = ({ children, className }) => {
    return (
        <button className={`button-base-style${className ? ` ${className}` : ''}`}>
            {children}
        </button>
    );
};

export default Button;