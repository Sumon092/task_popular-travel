/* eslint-disable react/prop-types */
const CustomInput = ({ className, label, placeholder, type, register, fieldName }) => {
    return (
        <div className="w-full">
            <label>{label}</label >
            <div className="w-full h-7 border border-gray-500 rounded-sm flex items-center">
                <input {...register(fieldName)} type={type} placeholder={placeholder} className={`text-md text-gray-800 outline-none pl-1 w-full ${className} `} />
            </div>
        </div>

    );
};

export default CustomInput;