import React from 'react'
import { Link } from 'react-router-dom'


function Card(props) {
  return (
    <div className='border-2 text-center py-7 px-3 mx-2 rounded-lg shadow-md'>
        <img className='py-5' style={{width: '25vh',margin: 'auto'}} src={props.svg} alt="illustration card" />
        <h1 className='text-2xl first-letter:font-bold mb-3'>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={props.onClick} className='bg-red-700 border-2 border-red-700 px-4 rounded-md py-2 mt-5 text-white hover:bg-white hover:text-black'>{props.button}</button>
    </div>
  )
}

export default Card
