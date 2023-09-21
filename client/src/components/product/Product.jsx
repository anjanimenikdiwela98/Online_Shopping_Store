import React from 'react';
import data from '../../data/items';
import { useParams } from 'react-router-dom';

export default function Product(props) {
  const { id } = useParams
  const { onAdd } = props;
  let xc = data.productList.filter((item) => {
    return item.id === id
  })
  return (
    <div>
      {xc.map((item) => (
        <div key={item.id}>
          <img className="small" src={item.imageSrc} alt={item.imageAlt} />
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <div>${item.price}</div>
          <div>
            <button variant="primary" onClick={() => onAdd(item)}>Add To Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}
