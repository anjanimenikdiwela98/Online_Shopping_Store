import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import './Products.scss';

// const products = [
//   {
//     id: 1,
//     name: 'Earthen Bottle',
//     href: '#',
//     price: '$48',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
//     imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
//   },
//   {
//     id: 2,
//     name: 'Nomad Tumbler',
//     href: '#',
//     price: '$35',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
//     imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
//   },
//   {
//     id: 3,
//     name: 'Focus Paper Refill',
//     href: '#',
//     price: '$89',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
//     imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
//   },
//   {
//     id: 4,
//     name: 'Machined Mechanical Pencil',
//     href: '#',
//     price: '$35',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
//     imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
//   },
//   // More products...
// ]

export default function Products(props) {
  const { onAdd, products, cartItemCount } = props;
  console.log(products[0])
  return (
    //   <main className="product-container">
    //   <div className="row">
    //     {products.map((product) => (
    //     <div  key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-3">
    //         <Card>
    //           <Card.Img className="card-img" variant="top" src={product.imageSrc} />
    //           <Card.Body>
    //             <Card.Title>{product.name}</Card.Title>
    //             <Card.Text>
    //               {product.description}
    //             </Card.Text>
    //             <div className="button-set">
    //               <Button variant="info">
    //                 {/* <Link to="/product">View Detail</Link> */}
    //                 <a href={'product/' + product.id}>View Detail</a>
    //               </Button>
    //               <Button variant="secondary" onClick={() => onAdd(product,cartItemCount)}><i class="fa fa-cart-plus" aria-hidden="true"></i></Button>
    //             </div>
    //           </Card.Body>
    //         </Card>
    //       </div>
    //       ))}
    //   </div>
    // </main>

    <div className="product-container bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div>
              <a key={product.id} href={'product/' + product.id} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.images[0].src}
                    alt={product.images[0].alt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
              </a>
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <h3 className="mt-2 text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                </div>
                <Button className="h-9" variant="secondary" onClick={() => onAdd(product, cartItemCount)}><i class="fa fa-cart-plus" aria-hidden="true"></i></Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4 w-full">
        <div class="relative p-4 w-full bg-white rounded-lg overflow-hidden shadow hover:shadow-md" style={{minHeight : '160px'}}>
          <div>
            <div class="absolute top-0 right-0 mt-2 mr-2 p-4 z-20 flex justify-between">
              <div class="inline-flex items-center justify-center w-8 h-8 p-2 rounded-full bg-white shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 h-auto fill-current text-red-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>

            <div class="relative block h-full">
              <div class="h-32 bg-gray-100 rounded-lg"></div>
            </div>
          </div>

          <h2 class="mt-2 text-gray-800 text-sm font-semibold line-clamp-1">
            Super Value Pizza
          </h2>

          <p class="mt-2 text-gray-800 text-sm">$12.99</p>

          <button class="mt-4 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md w-full">
            Order
          </button>
        </div>

        <div class="relative p-4 w-full bg-white rounded-lg overflow-hidden shadow hover:shadow-md" style={{minHeight : '160px'}}>
          <div>
            <div class="absolute top-0 right-0 mt-2 mr-2 p-4 z-20 flex justify-between">
              <div class="inline-flex items-center justify-center w-8 h-8 p-2 rounded-full bg-white shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 h-auto fill-current text-red-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>

            <div class="relative block h-full">
              <div class="h-32 bg-gray-100 rounded-lg"></div>
            </div>
          </div>

          <h2 class="mt-2 text-gray-800 text-sm font-semibold line-clamp-1">
            Super Value Pizza
          </h2>

          <p class="mt-2 text-gray-800 text-sm">$12.99</p>

          <button class="mt-4 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md w-full">
            Order
          </button>
        </div>

        <div class="relative p-4 w-full bg-white rounded-lg overflow-hidden shadow hover:shadow-md" style={{minHeight : '160px'}}>
          <div>
            <div class="absolute top-0 right-0 mt-2 mr-2 p-4 z-20 flex justify-between">
              <div class="inline-flex items-center justify-center w-8 h-8 p-2 rounded-full bg-white shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 h-auto fill-current text-red-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>

            <div class="relative block h-full">
              <div class="h-32 bg-gray-100 rounded-lg"></div>
            </div>
          </div>

          <h2 class="mt-2 text-gray-800 text-sm font-semibold line-clamp-1">
            Super Value Pizza
          </h2>

          <p class="mt-2 text-gray-800 text-sm">$12.99</p>

          <button class="mt-4 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md w-full">
            Order
          </button>
        </div>

        <div class="relative p-4 w-full bg-white rounded-lg overflow-hidden shadow hover:shadow-md" style={{minHeight : '160px'}}>
          <div>
            <div class="absolute top-0 right-0 mt-2 mr-2 p-4 z-20 flex justify-between">
              <div class="inline-flex items-center justify-center w-8 h-8 p-2 rounded-full bg-white shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 h-auto fill-current text-red-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>

            <div class="relative block h-full">
              <div class="h-32 bg-gray-100 rounded-lg"></div>
            </div>
          </div>

          <h2 class="mt-2 text-gray-800 text-sm font-semibold line-clamp-1">
            Super Value Pizza
          </h2>

          <p class="mt-2 text-gray-800 text-sm">$12.99</p>

          <button class="mt-4 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md w-full">
            Order
          </button>
        </div>
      </div> */}
    </div>
  )
}
