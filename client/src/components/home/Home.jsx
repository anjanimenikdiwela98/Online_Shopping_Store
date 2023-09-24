import React from 'react';
import './Home.scss';
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <>
    <div class="hero">
				<div class="container">
					<div class="row justify-content-between">
						<div class="col-lg-5">
							<div class="intro-excerpt">
								<h1>Modern Interior <span clsas="d-block">Design Studio</span></h1>
								<p class="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
								<p>
                  {/* <a href="" class="btn btn-secondary me-2">Shop Now</a> */}
                  <Link to="/products">Shop Now</Link>
                </p>
							</div>
						</div>
						<div class="col-lg-7">
							<div class="hero-img-wrap">
								{/* <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg" class="img-fluid"/> */}
							</div>
						</div>
					</div>
				</div>
			</div>
    </>
  )
}
