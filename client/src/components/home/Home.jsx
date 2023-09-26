import React from 'react';
import './Home.scss';
import { Link } from "react-router-dom";

const callouts = [
	{
		name: 'Desk and Office',
		description: 'Work from home accessories',
		imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
		imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
		href: '#',
	},
	{
		name: 'Self-Improvement',
		description: 'Journals and note-taking',
		imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
		imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
		href: '#',
	},
	{
		name: 'Travel',
		description: 'Daily commute essentials',
		imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
		imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
		href: '#',
	},
]

export default function Home() {
	return (
		<>
			<div class="hero">
				<div class="container">
					<div class="row justify-content-between">
						<div class="col-lg-5">
							<div class="intro-excerpt">
								<h6>10% OFF YOUR FIRST ORDER</h6>
								<h1>Reasonable Price</h1>
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
					{/* <div className="bg-gray-100"> */}
						<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
							<div className="mx-auto max-w-2xl py-4">
								<h2 className="text-2xl font-bold text-gray-900">Collections</h2>

								<div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
									{callouts.map((callout) => (
										<div key={callout.name} className="group relative">
											<div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
												<img
													src={callout.imageSrc}
													alt={callout.imageAlt}
													className="h-full w-full object-cover object-center"
												/>
											</div>
											<h3 className="mt-6 text-sm text-gray-500">
												<a href={callout.href}>
													<span className="absolute inset-0" />
													{callout.name}
												</a>
											</h3>
											<p className="text-base font-semibold text-gray-900">{callout.description}</p>
										</div>
									))}
								</div>
							</div>
						</div>
					{/* </div> */}
				</div>
			</div>
		</>
	)
}
