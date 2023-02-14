import React from 'react'

function CustomButton(props) {
  return (
    <button type={props.type} class="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">{props.content}</button>
)
}
export default CustomButton