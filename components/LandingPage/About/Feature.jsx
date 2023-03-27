import React from 'react'
import Image from 'next/image'
import Result from '../../../public/results.png'
import Trust from '../../../public/trust.png'
import Speed from '../../../public/speed.png'
import Customer from '../../../public/customer.png'
import Security from '../../../public/security.png'
import Access from '../../../public/access.png'

const Feature = () => {
  return (
	<section className="m-4 md:m-8 dark:black dark:text-gray-100">
	<div className="container mx-auto p-4 my-6 space-y-2 text-center">
		<h2 className="text-5xl font-bold">We Look For !!!</h2>
	</div>
	<div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
		<div className="flex flex-col items-center p-4 px-20">
			<Image src={Customer} className='h-10 w-12 bg-black' />
			<h3 className="my-3 text-3xl font-semibold">Customers First</h3>
			<div className="space-y-1 leading-tight text-center">
				<p>Every decision we make is centered around our customer's need and convinience.</p>
				
			</div>
		</div>
		<div className="flex flex-col items-center p-4 px-20">
		<Image src={Security} className='h-10 w-12 bg-black' />
			<h3 className="my-3 text-3xl font-semibold">Security & Safety</h3>
			<div className="space-y-1 leading-tight text-center">
				<p>We follow best practices and implements robust security measures to protect our customer's assets.</p>
			</div>
		</div>
		<div className="flex flex-col items-center p-4 px-20">
		<Image src={Trust} className='h-10 w-12 bg-black' />
			<h3 className="my-3 text-3xl font-semibold">Trust</h3>
			<div className="space-y-1 leading-tight text-center">
				<p>We are known to provide transparent information & honest advice to build trust with our customers.</p>
			</div>
		</div>
		<div className="flex flex-col items-center p-4 px-20">
		<Image src={Access} className='h-10 w-10 bg-black' />
			<h3 className="my-3 text-3xl font-semibold">Accessibility</h3>
			<div className="space-y-1 leading-tight text-center">
				<p>We offer flexible trading options and accessibility to make it easier for customers to trade.</p>
			</div>
		</div>
		<div className="flex flex-col items-center p-4 px-20">
		<Image src={Speed} className='h-10 w-12 bg-black' />
			<h3 className="my-3 text-3xl font-semibold">Speed & Efficiency</h3>
			<div className="space-y-1 leading-tight text-center">
				<p>Our fast and efficient trading services, help customers take advantage of market opportunities.</p>
				
			</div>
		</div>
		<div className="flex flex-col items-center p-4 px-20">
		<Image src={Result} className='h-10 w-10 bg-black' />
			<h3 className="my-3 text-3xl font-semibold">Results</h3>
			<div className="space-y-1 leading-tight text-center">
				<p>We have better track records and provide best results.</p>
				
			</div>
		</div>
	</div>
</section>
  )
}

export default Feature