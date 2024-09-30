import React, { useContext } from 'react'
import { AppContext } from '../Context/appContext'
const Myappointment = () => {

  const {doctors}=useContext(AppContext)
  return (
    <div>
      <p>My Appointment</p>
      <div>
        {doctors.slice(0,2).map((item,index)=>(
          <div key={index}>
          <div>
            <img src={item.image} alt=""/>
          </div>

          <div>
          <p>{item.name}</p>
          <p>{item.speciality}</p>
          <p>address</p>
          <p>{item.address}</p>
          <p><span>Date & Time:21, september,2024 | 8:30pm</span></p>
          </div>
          <div></div>
          <div>
          <button>Pay Online </button>
          <button>Cancel Appointment</button>
          </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Myappointment
