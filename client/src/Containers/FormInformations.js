import React, { useEffect } from 'react'
import CustomLabel from '../components/CustomLabel'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import { Link } from 'react-router-dom'


function FormInformations() {

  
  
  return (
    <>
      <form className="space-y-4 md:space-y-6" action="#">
        <div>
          <CustomLabel for="Adresse" label="Your Adresse" />
          <CustomInput type="Adresse" name="Adresse" placeholder="RUE *** AVENUE **** " />
        </div>
        <div>
          <CustomLabel for="Ville" label="Your Ville" />
          <CustomInput type="Ville" name="Ville" placeholder="RABAT, CASABLANCA, FES , Merrakech ..." />
        </div>
        <div>
          <CustomLabel for="Sex" label="Your Sex" />
          <select class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="Sang_donnateur" required="required">
            <option value="Men"  selected>Men</option>
            <option value="Women">Women</option>
            </select>
        </div>
        <div>
          <CustomLabel for="Age" label="Your Age" />
          <small className='text-red-700'>Please note that individuals under the age of 18 or over the age of 62 are not eligible to donate or receive blood*</small>
          <select class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="Sang_donnateur" required="required">
            <option value="18-23"  selected>18-23</option>
            <option value="24-32<">24-32</option>
            <option value="33-52">33-52</option>
            <option value="52-62">52-62</option>
            </select>
        </div>
        <div>
          <CustomLabel for="BloodNature" label="Your Blodd Nature" />
          <select class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="Sang_donnateur" required="required">
            <option value="" disabled selected> --- Groupe Sanguin --- </option>
            <option value="0-">O-</option>
            <option value="0+">O+</option>
            <option value="B-">B-</option>
            <option value="B+">B+</option>
            <option value="A-">A-</option>
            <option value="A+">A+</option>
            <option value="AB-">AB-</option>
            <option value="AB+">AB+</option>
            </select>
        </div>
        <CustomButton type="submit" content="Submit Informations"  />
      </form>
    </>
  )
}

export default FormInformations