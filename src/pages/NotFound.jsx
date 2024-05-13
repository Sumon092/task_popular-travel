import { Link } from 'react-router-dom';
import NotFoundImage from '../assets/notfound.png'


const NotFound = () => {

    return (
        <div className="flex flex-col justify-center items-center h-[100vh] relative">
            <img className='h-full' src={NotFoundImage} alt="not-found-image" />
            <Link className='absolute top-8' to="/">
                <button
                    className="bg-primary rounded-md px-4 py-2 text-lg font-poppins font-bold text-white"
                    type="primary"

                >
                    Back To Home
                </button>
            </Link>
        </div>
    );
};

export default NotFound;