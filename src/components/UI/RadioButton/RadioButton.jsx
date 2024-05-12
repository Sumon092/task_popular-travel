/* eslint-disable react/prop-types */


const RadioButton = ({ register, fieldName, type, label }) => {
    const handleDoubleClick = () => {
        const radioBtn = document.getElementById(fieldName);
        if (radioBtn) {
            radioBtn.checked = !radioBtn.checked;
        }
    };

    return (
        <div className="max-w-32 pl-1 py-[-1] h-7  flex items-center gap-2">
            <input type={type} id={fieldName}  {...register(fieldName)} onDoubleClick={handleDoubleClick} />
            <label htmlFor={fieldName} className="text-gray-600 font-roboto text-sm cursor-pointer">{label}</label>
        </div>
    );
};

export default RadioButton;