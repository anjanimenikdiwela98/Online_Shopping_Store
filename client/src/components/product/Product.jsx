import React from 'react';
import data from '../../data/items';
import { useParams } from 'react-router-dom';

export default function Product(props) {
  const{id} =useParams
    const { product, onAdd } = props;
    let xc = data.productList.filter((item) =>{
      return item.id === id
    })
    return (
      <div>
        <img className="small" src={xc.imageSrc} alt={xc.imageAlt} />
        <h3>{xc.name}</h3>
        <p>{xc.description}</p>
        <div>${xc.price}</div>
        <div>
          <button onClick={() => onAdd(product)}>Add To Cart</button>
        </div>
      </div>
    );
}
