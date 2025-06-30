import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const FormInput: React.FC<InputProps> = ({ label, ...props }) => {
    return (
        <div>
            <label htmlFor={props.id} className="block text-sm font-medium text-gray-700 sr-only">
                {label}
            </label>
            <input
                {...props}
                className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
        </div>
    );
};

export default FormInput; 