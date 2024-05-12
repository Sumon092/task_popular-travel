/* eslint-disable react/prop-types */
import React from 'react';
import Button from '../Button/Button';
import './Table.css';

const Table = ({ itinerary }) => {
  // Create an object to group flight offers by price and duration
  const groupedOffers = {};
  itinerary.flightOffer?.forEach(flight => {
    const price = flight.price;
    const duration = flight.itineraries[0].duration;
    const key = `${price}_${duration}`;
    if (!groupedOffers[key]) {
      groupedOffers[key] = [];
    }
    groupedOffers[key].push(flight);
  });

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
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(groupedOffers).map(([key, flights], index) => {

            const [price] = key.split('_');


            return (
              <React.Fragment key={index}>
                {/* Render table header for each group */}
                <tr className='border border-gray-500'>

                </tr>
                {flights.map((flight) => (
                  flight.itineraries[0].segments.map((segment, index) => (
                    <tr key={index}>
                      <td>{segment.marketingCarrier + segment.aircraft}</td>
                      <td>{segment.flightNumber}</td>
                      <td>{flight.class[0][0]}</td>
                      <td>{flight.fareBasis[0][0]}</td>
                      <td className='whitespace-nowrap'>{segment.departure.iataCode}-{segment.arrival.iataCode}</td>
                      <td className='whitespace-nowrap'>{segment.departure.at}</td>
                      <td className='whitespace-nowrap'>{segment.arrival.at}</td>
                      {index === 0 ? (
                        <>
                          <td>{flight.itineraries[0].duration}</td>
                        </>
                      ) : <p className='text-center text-gray-500'>---</p>}
                      {index === 0 && (
                        <>
                          <td>{price}</td>
                        </>
                      )}
                      {index === 0 && (
                        <>
                          <td><Button label={'Select'} className="!bg-blue-900 text-white" /></td>
                        </>
                      )}
                    </tr>
                  ))
                ))}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
