import classNames from 'classnames';
import React, { type ButtonHTMLAttributes, type HTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: HTMLAttributes<HTMLButtonElement>['className'];
  variants?: 'primary' | 'secondary';
  size?: 'base' | 'sm';
  loading?: boolean;
}

const getButtonClasses = (
  variants: Props['variants'],
  size: Props['size'],
  disabled: boolean,
  className?: HTMLAttributes<HTMLButtonElement>['className'],
) => {
  const baseClasses = className?.includes('w-') ? 'a-button button-base-style rounded-sm px-2' : 'a-button px-2 button-base-style w-full';

  return classNames(
    baseClasses,
    {
      'bg-deep-lemon opacity-30 text-white pointer-events-none border-0': disabled,
      'bg-green-ryb text-white hover:bg-sap-green': !disabled && variants === 'primary',
      'h-[45px]': size === 'base',
      'h-[30px]': size === 'sm',
    },
  );
};

const Button: React.FC<Props> = ({
  children, className, variants = 'primary', disabled, loading = false, size = 'base', type = 'button', onClick, ...props
}) => {
  const isDisabled = disabled || loading;
  const buttonClass = getButtonClasses(variants, size, isDisabled, className);

  return (
    <button
      type={type}
      disabled={isDisabled || loading}
      className={`${buttonClass} ${className}`}
      onClick={onClick}
      {...props}
    >
      {loading ? (
        <div className="flex items-center justify-center h-6">
          <div className="animate-spin rounded-full w-4 h-4 border-4 border-white border-t-transparent" />
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
