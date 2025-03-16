import React from 'react';

interface FloatingLabelTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    error?: string;
}

const FloatingLabelTextarea: React.FC<FloatingLabelTextareaProps> = ({
    label,
    name,
    value,
    onChange,
    error,
    id,
    ...props
}) => (
    <div className="floating-textarea">
        <div className="relative mt-6">
            <textarea
                {...props}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                className="w-full border-b border-ash-grey pt-3 text-raisin-black pb-2 focus:ring-0 focus:outline-none peer placeholder-transparent resize-none"
                placeholder="textarea"
                rows={4}
            />
            <label htmlFor={id} className="pointer-events-none absolute left-0 top-3 -translate-y-4 bg-white text-sm duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-silver-chalice peer-focus:-translate-y-4 peer-focus:text-sm">
                {label}
            </label>
        </div>
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
);

export default FloatingLabelTextarea;
