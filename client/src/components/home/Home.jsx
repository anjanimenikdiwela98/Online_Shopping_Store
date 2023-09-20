import React from 'react';
import './Home.scss';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import data from '../../data/items';

const products = data;
export default function Home(props) {
  const { onAdd } = props;
  return (
    <>
      <main className="product-container">
        <div className="row">
          {products.productList?.map((product) => (
          <div  key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-3">
              <Card>
                <Card.Img className="card-img" variant="top" src={product.imageSrc} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>
                    {product.description}
                  </Card.Text>
                  <div className="button-set">
                    <Button variant="primary"><a href={'/product/' + product.id}>More</a></Button>
                    <Button variant="secondary" onClick={() => onAdd(product)}><i class="fa fa-cart-plus" aria-hidden="true"></i></Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
            ))}
        </div>
      </main>
    </>
  )
}
