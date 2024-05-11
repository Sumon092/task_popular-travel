import { useState } from "react";
import Button from "../components/UI/Button/Button";

const MasterPrice = () => {
    const [activeButton, setActiveButton] = useState(null);

    return (
        <>
            <div className="flex justify-center my-3">
                <Button onClick={() => setActiveButton('roundTrip')} className={`border-r-0 rounded-r-none ${activeButton === 'roundTrip' ? 'bg-blue-900 !text-white' : ''}`} label={'Round Trip'} />
                <Button onClick={() => setActiveButton('oneWay')} className={`border-r-0 rounded-l-none rounded-r-none ${activeButton === 'oneWay' ? 'bg-blue-900 !text-white' : 'bg-secondary'}`} label={'One Way'} />
                <Button onClick={() => setActiveButton('multiCity')} className={`rounded-l-none ${activeButton === 'multiCity' ? 'bg-blue-900 !text-white' : 'bg-secondary'}`} label={'Multi City'} />
            </div>
        </>

    );
};

export default MasterPrice;
