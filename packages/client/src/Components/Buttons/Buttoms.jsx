import React from 'react'
import { FaPen } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import './Buttons.css'

function PenButtoms() {
  return (
    <button className='button-pen'><FaPen/></button>
  )
}

function TrashButtoms() {
    return (
      <button className='button-dusbin'><FaTrash/></button>
    )
}


export {PenButtoms,TrashButtoms}
