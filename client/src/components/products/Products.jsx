import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import './Products.scss';

export default function Products(props) {
    const { onAdd,products } = props;
  return (
    <main className="product-container">
    <div className="row">
      {products.map((product) => (
      <div  key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-3">
          <Card>
            <Card.Img className="card-img" variant="top" src={product.imageSrc} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                {product.description}
              </Card.Text>
              <div className="button-set">
                <Button variant="primary">
                  <Link to="/product">More</Link>
                  {/* <a href={'product/' + product.id}>More</a> */}
                </Button>
                <Button variant="secondary" onClick={() => onAdd(product)}><i class="fa fa-cart-plus" aria-hidden="true"></i></Button>
              </div>
            </Card.Body>
          </Card>
        </div>
        ))}
    </div>
  </main>
  )
}
