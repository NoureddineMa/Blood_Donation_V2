import React from 'react'
import Logo from '../../Assets/images/logo.png'
import { Link } from 'react-router-dom'
import './HeroSection.css'


function HeroSection() {

  return (
    <div className="bg-white all">
  <header className="absolute inset-x-0 top-0 z-50">
    <nav className="flex items-center justify-between p-6 lg:px-11" aria-label="Global">
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5">
         <img src={Logo} style={{ width: '5rem'}} alt="" />
        </a>
      </div>
      <div className="flex lg:hidden">
        <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
          <span className="sr-only">Open main menu</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
     
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <Link to="/login">
            <button className='bg-red-600 border-2 border-red-600 px-6 py-2 mx-2 rounded-lg text-white'>Se Connecter</button>
        </Link>
        <Link to="/register">
            <button className='border-2 border-red-600 px-6 py-2 rounded-lg text-red-600'>Créer un compte</button>
        </Link>
      </div>
    </nav>
    {/* Mobile menu, show/hide based on menu open state. */}
    <div className="lg:hidden" role="dialog" aria-modal="true">
      {/* Background backdrop, show/hide based on slide-over state. */}
      <div className="fixed inset-0 z-50" />
      <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt />
          </a>
          <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
            <span className="sr-only">Close menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Product</a>
              <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Features</a>
              <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Marketplace</a>
              <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Company</a>
            </div>
            <div className="py-6">
              <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div className="relative isolate px-6 pt-9 lg:px-8">
    <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
      <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}} />
    </div>
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
        Blood Donation
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Sauvez des vies en donnant du <span className='text-red-600'>sang</span> </h1>
        <p className="mt-6 text-center text-lg leading-0 text-gray-600">Bienvenue sur notre site dédié à la collecte de sang. Si vous êtes un donneur ou un patient ayant besoin de sang, vous êtes au bon endroit. Chez <span className='text-red-500'>Blood Donation</span>, nous sommes déterminés à sauver des vies en br encourageant les dons de sang réguliers.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link to="/login">
            <button className='bg-red-600 border-2 border-red-600 px-6 py-2 mx-2 rounded-lg text-white'>Se Connecter</button>
        </Link>           <Link to="/register">
            <button className='border-2 border-red-600 px-6 py-2 rounded-lg text-red-600'>Créer un compte</button>
        </Link>
        </div>
      </div>
    </div>
   
  </div>

</div>
  )
}

export default HeroSection
