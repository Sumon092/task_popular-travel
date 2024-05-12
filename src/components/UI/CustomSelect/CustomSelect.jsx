/* eslint-disable react/prop-types */

import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

const CustomSelect = ({ options, className, onSelect, register, fieldName, disabled, hidden, defaultValue }) => {
    const [localOptionValue, setLocalOptionValue] = useState('');

    const handleOptionChange = (selectedValue) => {
        setLocalOptionValue(selectedValue);

        if (onSelect) {
            onSelect(selectedValue);
        }
    };

    return (
        <div className="border w-full md:min-w-20 pl-1 py-[-1] h-7 border-gray-500 rounded-sm flex items-center">
            <select
                {...register(fieldName)}
                defaultValue={defaultValue}
                className={twMerge("outline-none flex justify-center items-center w-full", className)}
                value={localOptionValue || ''}
                onChange={(e) => handleOptionChange(e.target.value)}
            >
                {options?.map((option, index) => (
                    <option disabled={option.disabled || disabled} hidden={option.hidden || hidden} className='w-full' key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CustomSelect;