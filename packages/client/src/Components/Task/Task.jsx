import React from 'react'
import './Task.css'
import { PenButtoms,TrashButtoms} from '../Buttons/Buttoms'

const Task = () => {
  return (
    <div className='container'>
      <ul>
          <li><input type="checkbox" name="Task1" id="1" />
          <input type="text" size={42}  className="place" value={'Learn javascript'}/><PenButtoms/><TrashButtoms/></li>
          <li><input type="checkbox" name="Task2" id="2" />
          <input type="text" size={42}  className="place"/><PenButtoms/><TrashButtoms/></li>
          <li><input type="checkbox" name="Task3" id="3" />
          <input type="text" size={42}  className="place"/><PenButtoms/><TrashButtoms/></li>
      </ul>
    </div>
  )
}

export default Task
