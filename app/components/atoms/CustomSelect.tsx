import React from 'react';

interface CustomSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    options: { value: string; label: string }[];
    error?: string;
    placeholder?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
    label,
    options,
    name,
    value,
    error,
    id,
    placeholder,
    ...props
}) => (
    <div className="relative mt-4">
        <div className="flex items-center border-b border-ash-grey py-2">
            <p className="text-quartz text-lg w-24 border-r border-quartz">{label}</p>
            <select
                id={id}
                name={name}
                // placeholder={placeholder}
                value={value}
                defaultValue={value}
                className="w-full bg-transparent focus:outline-none text-gray-700 px-6 input-field text-lg"
                {...props}
            >
                <option value="" disabled selected={!value}>
                    {placeholder}
                </option>
                {options.map((option) => (
                    <option key={option.value} value={option.value} className="text-gray-900">
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
);

export default CustomSelect;
