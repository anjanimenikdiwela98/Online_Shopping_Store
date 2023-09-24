import React from 'react';
import './Cart.scss';

export default function Cart(props) {
  const { onRemove, onAdd, cartItems } = props;
  console.log(cartItems)
  // const itemsPrice = cartItems.price;
  // const taxPrice = itemsPrice * 0.14;
  // const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  // const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <>
      {cartItems.length === 0 && <div>Cart is empty</div>}
      <div class="row mb-5">
        <form class="col-md-8" method="post">
          <div class="site-blocks-table">
            <table class="table">
              <thead>
                <tr>
                  <th class="product-thumbnail">Image</th>
                  <th class="product-name">Product</th>
                  <th class="product-price">Price</th>
                  <th class="product-quantity">Quantity</th>
                  <th class="product-total">Total</th>
                  {/* <th class="product-remove">Remove</th> */}
                </tr>
              </thead>
              {cartItems.map((item) => (
                <tbody key={item.id}>
                  <tr>
                    <td class="product-thumbnail">
                      <img src={item.imageSrc} alt={item.imageAlt} class="img-fluid" />
                    </td>
                    <td class="product-name">
                      <h2 class="h5 text-black">{item.name}</h2>
                    </td>
                    <td>{item.price}</td>
                    <td>
                      <div class="input-group mb-3 d-flex align-items-center quantity-container">
                        <div class="input-group-btn">
                          <button class="btn btn-sm btn-primary btn-minus" onClick={() => onRemove(item)}>
                            <i class="fa fa-minus"></i>
                          </button>
                        </div>
                        <input type="text" class="form-control form-control-sm bg-secondary text-center" value={item.quantity} />
                        <div class="input-group-btn">
                          <button class="btn btn-sm btn-primary btn-plus" onClick={() => onAdd(item)}>
                            <i class="fa fa-plus"></i>
                          </button>
                        </div>
                      </div>

                    </td>
                    <td>{item.price}</td>
                    {/* <td><a href="#" class="btn btn-black btn-sm">X</a></td> */}
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </form>
        <div class="col-md-4">
          <div class="row">
            <div class="col-md-12 text-right border-bottom mb-5">
              <h3 class="text-black h4 text-uppercase">Cart Totals</h3>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md-6">
              <span class="text-black">Subtotal</span>
            </div>
            <div class="col-md-6 text-right">
              <strong class="text-black">$230.00</strong>
            </div>
          </div>
          <div class="row mb-5">
            <div class="col-md-6">
              <span class="text-black">Total</span>
            </div>
            <div class="col-md-6 text-right">
              <strong class="text-black">$230.00</strong>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <button class="btn btn-primary btn-lg py-3 btn-block" onclick="window.location='checkout.html'">Proceed To Checkout</button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
