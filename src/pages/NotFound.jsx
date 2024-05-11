import NotFoundImage from '../assets/notfound.png'

const NotFound = () => {
    return (
        <div className="flex justify-center items-center h-[100vh]">
            <img className='h-full' src={NotFoundImage} alt="not-found-image" />
        </div>
    );
};

export default NotFound;