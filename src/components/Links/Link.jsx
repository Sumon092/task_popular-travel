

/* eslint-disable react/prop-types */
const Link = ({ route, isActive, handleSetActiveRoute }) => {
    const { name, link } = route;
    const handleClick = () => {
        handleSetActiveRoute(name);
    };
    return (
        <li className={`mr-16 flex justify-center items-center ${isActive ? 'bg-teal-800 rounded-full py-1 px-4' : ''}`}>
            <a onClick={handleClick} href={link}>{name}</a>
        </li>
    );
};

export default Link;