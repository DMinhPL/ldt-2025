import React from "react";

interface FloatingLabelInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}

const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({
    label,
    type = "text",
    name,
    value,
    onChange,
    error,
    id,
    ...props
}) => {
    return (
        <div className="floating-input">
            <div className="relative mt-6">
                <input
                    {...props}
                    type={type}
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="w-full border-b border-ash-grey pt-3 text-raisin-black pb-2 focus:ring-0 focus:outline-none peer placeholder:text-transparent" placeholder="name" />
                <label htmlFor={id} className="pointer-events-none absolute left-0 top-3 -translate-y-4 bg-white text-sm duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-silver-chalice peer-focus:-translate-y-4 peer-focus:text-sm">
                    {label}
                </label>
            </div>
            {
                error && <p className="text-red-500 text-sm mt-1">{error}</p>
            }
        </div>
    );
};

export default FloatingLabelInput;
