import { useState } from "react";
import Button from "../components/UI/Button/Button";
import Hr from "../components/UI/Hr/Hr";
import CustomInput from "../components/UI/CustomInput/CustomInput";
import CustomSelect from "../components/UI/CustomSelect/CustomSelect";
import { useForm } from "react-hook-form";
import Checkbox from "../components/UI/Checkbox/Checkbox";
import RadioButton from "../components/UI/RadioButton/RadioButton";
import Table from "../components/UI/Table/Table";
import Data from '../data/data.json'

const MasterPrice = () => {
    const [activeButton, setActiveButton] = useState('oneWay');
    const { register, handleSubmit, reset } = useForm()
    const [data, setData] = useState({})
    console.log(data)
    const onSubmit = (data) => {
        console.log(data)
        setData(Data)
        reset()
    }

    return (
        <>
            {/* Package button family */}
            <div className="flex justify-center my-3">
                <Button onClick={() => setActiveButton('roundTrip')} className={`border-r-0 rounded-r-none ${activeButton === 'roundTrip' ? '!bg-blue-900 !text-white' : ''}`} label={'Round Trip'} />
                <Button onClick={() => setActiveButton('oneWay')} className={`border-r-0 rounded-l-none rounded-r-none ${activeButton === 'oneWay' ? '!bg-blue-900 !text-white' : 'bg-secondary'}`} label={'One Way'} />
                <Button onClick={() => setActiveButton('multiCity')} className={`rounded-l-none ${activeButton === 'multiCity' ? '!bg-blue-900 !text-white' : 'bg-secondary'}`} label={'Multi City'} />
            </div>

            {/* filtering form */}

            <Hr />

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col md:flex-row gap-2 items-center my-1">
                    <CustomInput fieldName='from' register={register} placeholder="LHR" />
                    <CustomInput fieldName='to' register={register} placeholder="CDG" />
                    <CustomInput fieldName='time' register={register} type="datetime-local" />
                    <CustomSelect register={register} fieldName="dIncrease" options={[
                        { label: 'Day -', value: 'day-' }
                    ]} />
                    <CustomSelect className='w-full' register={register} fieldName="dDecrease" options={[
                        { label: 'Day +', value: 'day+' }
                    ]} />
                    <CustomSelect className='md:!w-32' register={register} fieldName="anyTime" options={[
                        { label: 'Any Time', value: 'anyTime' }
                    ]} />
                    <span className="text-xl font-medium">+</span>
                    <CustomSelect register={register} fieldName="person" options={[
                        { label: 'ADT', value: 'person' }
                    ]} />
                    <CustomSelect register={register} fieldName="number" options={[
                        { label: '1', value: '1' }
                    ]} />
                    <span className="text-xl font-medium">+</span>
                </div>
                <Hr />
                <div className="flex flex-col md:flex-row justify-between items-center my-2">
                    <div>
                        <Checkbox label={'Extra options'} type='checkbox' register={register} fieldName={'extOptions'} />
                    </div>
                    <div className="flex flex-col md:flex-row gap-2">
                        <p className="text-md text-gray-600">Environment</p>
                        <RadioButton label={'Dummy'} type='radio' register={register} fieldName={'dummy'} />
                        <RadioButton label={'PDT'} type='radio' register={register} fieldName={'pdt'} />
                    </div>
                    <div>
                        <Button type='submit' label="Select" className="!bg-blue-900 text-white font-roboto px-4" />

                    </div>
                </div>
                <Hr />
            </form>
            <div className="relative mb-8 overflow-x-auto">
                <Table itinerary={data} />
            </div>
        </>

    );
};

export default MasterPrice;
