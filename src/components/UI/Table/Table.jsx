/* eslint-disable react/prop-types */
import React from 'react';
import Button from '../Button/Button';
import './Table.css';

const Table = ({ itinerary }) => {
  // Create an object to group flight offers by price and duration
  const groupedOffers = {};
  itinerary.flightOffer.forEach(flight => {
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
            // Split the key to get price and duration
            const [price, duration] = key.split('_');
            const isLastGroup = index === Object.keys(groupedOffers).length - 1;

            return (
              <React.Fragment key={index}>
                {/* Render table header for each group */}
                <tr>
                  <td colSpan="10">
                    <h3 className='hidden'>Price: {price} | Duration: {duration}</h3>
                  </td>
                </tr>
                {flights.map((flight, index) => (
                  flight.itineraries[0].segments.map((segment, index) => (
                    <tr key={index}>
                      <td>{segment.marketingCarrier + segment.aircraft}</td>
                      <td>{segment.flightNumber}</td>
                      <td>{flight.class[0][0]}</td>
                      <td>{flight.fareBasis[0][0]}</td>
                      <td className='whitespace-nowrap'>{segment.departure.iataCode}-{segment.arrival.iataCode}</td>
                      <td className='whitespace-nowrap'>{segment.departure.at}</td>
                      <td className='whitespace-nowrap'>{segment.arrival.at}</td>
                      <td>{flight.itineraries[0].duration}</td>
                      {/* Render price and select button only once */}
                      {index === 0 && (
                        <>
                          <td>{price} <Button className="!bg-blue-900 text-white" label={'Select'} /></td>
                        </>
                      )}
                      {/* Render '--' if it's the last group and price and duration match */}
                      {isLastGroup && index === flights.length - 1 && (
                        <>
                          <td colSpan="8" className="text-center">--</td>
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
