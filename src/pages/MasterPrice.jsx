import { Suspense, lazy, useState } from "react";
import Button from "../components/UI/Button/Button";
import Hr from "../components/UI/Hr/Hr";
import CustomInput from "../components/UI/CustomInput/CustomInput";
import CustomSelect from "../components/UI/CustomSelect/CustomSelect";
import { useForm } from "react-hook-form";
import Checkbox from "../components/UI/Checkbox/Checkbox";
import RadioButton from "../components/UI/RadioButton/RadioButton";
const Table = lazy(() => import("../components/UI/Table/Table"))
import Data from '../data/data.json'
import Container from "../components/Container/Container";
import GlobalLoader from "../components/Shared/Loader/GlobalLoader";
import Footer from "../components/Footer/Footer";

const MasterPrice = () => {
    const [activeButton, setActiveButton] = useState('oneWay');
    const { register, handleSubmit, reset } = useForm()
    const [data, setData] = useState({})
    // eslint-disable-next-line no-unused-vars
    const [selectedDate, setSelectedDate] = useState(new Date());


    const onSubmit = (data) => {
        console.log(data)
        setData(Data)
        reset()
    }

    return (
        <>
            <div className=''>
                <p className="text-start my-2 font-roboto font-bold text-3xl text-black px-24">{'Master Price'}</p>
                <Hr className="!border-t-gray-500" />
            </div>
            <Container>
                {/* Package button family */}
                <div className="flex justify-center my-3">
                    <Button onClick={() => setActiveButton('roundTrip')} className={`border-r-0 rounded-r-none ${activeButton === 'roundTrip' ? '!bg-blue-900 !text-white' : ''}`} label={'Round Trip'} />
                    <Button onClick={() => setActiveButton('oneWay')} className={`border-r-0 rounded-l-none rounded-r-none ${activeButton === 'oneWay' ? '!bg-blue-900 !text-white' : 'bg-secondary'}`} label={'One Way'} />
                    <Button onClick={() => setActiveButton('multiCity')} className={`rounded-l-none ${activeButton === 'multiCity' ? '!bg-blue-900 !text-white' : 'bg-secondary'}`} label={'Multi City'} />
                </div>

                {/* filtering form */}

                <Hr />

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col md:flex-row gap-2 items-center my-3">
                        <CustomInput fieldName='from' register={register} placeholder="LHR" />
                        <CustomInput fieldName='to' register={register} placeholder="CDG" />
                        <CustomInput
                            fieldName='time'
                            register={register}
                            type="datetime-local"
                            value={selectedDate.toISOString()}
                        />
                        <CustomSelect register={register} fieldName="increase" options={[
                            { label: 'Day +', value: 'day+' },
                            { label: '1 day', value: '1' },
                            { label: '2 days', value: '2' },
                            { label: '3 days', value: '3' },
                        ]} />
                        <CustomSelect className='w-full' register={register} fieldName="decrease" options={[
                            { label: 'Day -', value: 'day-' },
                            { label: '1 day', value: '1' },
                            { label: '2 days', value: '2' },
                            { label: '3 days', value: '3' },
                        ]} />

                        <CustomSelect className='md:!w-32' register={register} fieldName="anyTime" options={[
                            { label: 'Any Time', value: 'anyTime' }
                        ]} />
                        <span className="text-xl font-medium">+</span>
                        <CustomSelect register={register} fieldName="person" options={[
                            { label: 'ADT', value: 'ADT' },
                            { label: 'CHD', value: 'CHD' },
                        ]} />
                        <CustomSelect register={register} fieldName="number" options={[
                            { label: '1', value: '1' },
                            { label: '2', value: '2' },
                            { label: '3', value: '3' },
                        ]} />
                        <span className="text-xl font-medium">+</span>
                    </div>
                    <Hr />
                    <div className="flex md:flex-row justify-between items-center my-2">
                        <div>
                            <Checkbox label={'Extra options'} type='checkbox' register={register} fieldName={'extOptions'} />
                        </div>
                        <div className="flex md:flex-row gap-2">
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
                    <Suspense fallback={<GlobalLoader />}><Table itinerary={data} /></Suspense>
                </div>
            </Container>
            <Footer />
        </>


    );
};

export default MasterPrice;
