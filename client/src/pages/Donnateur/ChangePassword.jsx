import React from 'react'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import CustomLabel from '../../components/CustomLabel'

function ChangePassword() {
  return (
    <>
      <section className=" py-1">
            <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                    <div className="rounded-t bg-white mb-0 px-6 py-6">
                        <div className="text-center flex justify-between">
                            <h6 className="text-red-600 Gray-700 text-xl font-bold">
                                Change Password
                            </h6>
                        </div>
                    </div>
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <form>
                            <div className="flex flex-wrap">
                               
                            <div className="w-full lg:w-4/12 px-4">
                                    <div className="relative w-full mb-3">
                                    <CustomLabel type="text" label="Last Password" />
                                    <CustomInput type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-4/12 px-4">
                                    <div className="relative w-full mb-3">
                                    <CustomLabel type="text" label="New Password" />
                                    <CustomInput type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                                    </div>
                                <CustomButton type="submit" content="Change Password" className="mt-7"/>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ChangePassword