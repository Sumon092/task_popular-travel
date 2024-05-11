/* eslint-disable react/prop-types */
const Container = ({ children }) => {
    return (
        <div className="max-w-[1536px] mx-[160px] mt-2">
            {children}
        </div>
    );
};

export default Container;