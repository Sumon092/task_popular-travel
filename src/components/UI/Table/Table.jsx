/* eslint-disable react/prop-types */
import Button from '../Button/Button';
import './Table.css'
const Table = ({ itinerary }) => {
    itinerary.flightOffer.map(f => f.itineraries.map(i => i.segments.map(segment => console.log(segment))))
    return (
        <div className='my-8'>
            <table className="flight-table">
                <thead>
                    <tr>
                        <th>FLIGHT</th>
                        <th>AIRCRAFT</th>
                        <th>CLASS</th>
                        <th>FARE</th>
                        <th>ROUTE</th>
                        <th>DEPARTURE</th>
                        <th>ARRIVAL</th>
                        <th>DURATION</th>
                        <th>PRICE</th>
                    </tr>
                </thead>
                <tbody>
                    {itinerary.flightOffer.map(f => f.itineraries.map(i => i.segments.map((segment, index) => (
                        <tr key={index}>
                            <td>{segment.marketingCarrier + segment.aircraft}</td>
                            <td>{segment.flightNumber}</td>
                            <td>{f.class[0][0]}</td>
                            <td>{f.fareBasis[0][0]}</td>
                            <td className='whitespace-nowrap'>{segment.departure.iataCode}-{segment.arrival.iataCode}</td>
                            <td className='whitespace-nowrap'>{segment.departure.at}</td>
                            <td className='whitespace-nowrap'>{segment.arrival.at}</td>
                            <td>{i.duration}</td>
                            <td>{f.price}
                                <Button className="!bg-blue-900 text-white" label={'Select'} />
                            </td>
                        </tr>
                    ))))}

                </tbody>
            </table>
        </div >

    );
};

export default Table;
