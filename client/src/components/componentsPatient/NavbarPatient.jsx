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
                            <Logout />
                        </nav>


                       
                    </div>
                </div>
            </header>
        </>
  )
}

export default NavbarPatient
