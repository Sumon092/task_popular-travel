import Hr from "../UI/Hr/Hr";


const Footer = () => {
    const date = new Date()
    const newDate = date.getFullYear()
    return (
        <div className="max-h-screen">
            <div className="flex justify-center text-xl font-roboto font-medium text-gray-500 items-center h-20">
                <Hr />
                <p className=""> &copy; Copyright @{newDate} Popular Travel Ltd, All Rights Reserved.</p>
            </div>
        </div>

    );
};

export default Footer;