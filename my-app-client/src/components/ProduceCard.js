import React from 'react';

const ProduceCard = ({ produce }) => {
  const renderProduce = produce.map(produce =>
      <div>
        <h4 key={produce.id}> {produce.name} </h4>
        <p>Price: ${produce.price} cents per pound</p>
        <p>Availability: {produce.inventory} pounds</p>
      </div>
    );

  return (
    <div>
      {renderProduce}
    </div>
  );

}

export default ProduceCard;