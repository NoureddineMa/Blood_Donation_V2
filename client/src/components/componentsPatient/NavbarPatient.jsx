import React from 'react'
import { Link } from 'react-router-dom'
import Logout from '../Logout'

function NavbarPatient() {
  return (
    <>
            <header aria-label="Site Header" class="shadow-sm">
                <div class="mx-auto max-w-screen-xl p-4">
                    <div class="flex items-center justify-between gap-4 lg:gap-10">
                        <div class="flex lg:w-0 lg:flex-1">
                            <Link to="/patientpage">
                            <h2 className='text-red-700 font-bold'>Blood Donation</h2>
                           </Link>
                        </div>

                        <nav
                            aria-label="Site Nav"
                            class="hidden gap-8 text-sm font-medium md:flex"
                        >
                            <Link className="text-gray-500 hover:text-red-600"><Logout /></Link>
                        </nav>


                        <div class="lg:hidden">
                            <button class="rounded-lg bg-gray-100 p-2 text-gray-600" type="button">
                                <span class="sr-only">Open menu</span>
                                <svg
                                    aria-hidden="true"
                                    class="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewbox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M4 6h16M4 12h16M4 18h16"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
  )
}

export default NavbarPatient
