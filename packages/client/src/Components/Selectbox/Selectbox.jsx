import React from 'react'
import './selectbox.css'
const Selectbox = () => {
  return (
    <select className="selectbox" name="filter" id="filter">
          <option value="">All</option>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
    </select>
  )
}

export default Selectbox
