import React from 'react';
import './Home.scss';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Home(props) {
  const { product, onAdd } = props;
  return (
    <div>
      <div className="product-container">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
            <Card >
              <Card.Img className="card-img" variant="top" src="https://images.meesho.com/images/products/115216056/kewzd_512.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <div className="button-set">
                  <Button variant="primary">More</Button>
                  <Button variant="secondary" onClick={() => onAdd(product)}><i class="fa fa-cart-plus" aria-hidden="true"></i></Button>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
            <Card >
              <Card.Img className="card-img" variant="top" src="https://img.fruugo.com/product/1/68/707352681_max.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <div className="button-set">
                  <Button variant="primary">More</Button>
                  <Button variant="secondary"><i class="fa fa-cart-plus" aria-hidden="true"></i></Button>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
            <Card >
              <Card.Img className="card-img" variant="top" src="data:image/jpeg;base64,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" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <div className="button-set">
                  <Button variant="primary">More</Button>
                  <Button variant="secondary"><i class="fa fa-cart-plus" aria-hidden="true"></i></Button>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
            <Card >
              <Card.Img className="card-img" variant="top" src="data:image/jpeg;base64,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" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <div className="button-set">
                  <Button variant="primary">More</Button>
                  <Button variant="secondary"><i class="fa fa-cart-plus" aria-hidden="true"></i></Button>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
            <Card >
              <Card.Img className="card-img" variant="top" src="https://www.dsifootcandy.lk/wp-content/uploads/2022/04/Mens-footwear-810x720-5.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <div className="button-set">
                  <Button variant="primary">More</Button>
                  <Button variant="secondary"><i class="fa fa-cart-plus" aria-hidden="true"></i></Button>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
            <Card >
              <Card.Img className="card-img" variant="top" src="https://i.pinimg.com/736x/5f/a4/ef/5fa4efbb185505f3d19ee03a32dcc76a.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <div className="button-set">
                  <Button variant="primary">More</Button>
                  <Button variant="secondary"><i class="fa fa-cart-plus" aria-hidden="true"></i></Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
