/* eslint-disable react/prop-types */
const Button = ({ label, className, onClick, type }) => {
    return (
        <button type={type} onClick={onClick} className={`border-2 border-blue-900 rounded-sm text-sm font-roboto px-2 flex justify-center items-center bg-secondary whitespace-nowrap text-primary font-semibold ${className}`}>
            {label}
        </button>
    );
};

export default Button;