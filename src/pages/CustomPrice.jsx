
import Footer from "../components/Footer/Footer";
import Hr from "../components/UI/Hr/Hr";

const CustomPrice = () => {
    return (
        <>
            <div className=''>
                <p className="px-24 text-start my-2 font-roboto font-bold text-3xl text-black">{'Custom Price'}</p>
                <Hr className="!border-t-gray-500" />
            </div>
            <div className="flex justify-center items-center h-[70vh]">
                <h2 className="text-5xl font-roboto">Under Construction</h2>
            </div>
            <Footer />
        </>

    );
};

export default CustomPrice;