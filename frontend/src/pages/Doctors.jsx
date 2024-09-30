import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../Context/appContext'

const Doctors = () => {

  const { speciality } = useParams()
  const { doctors } = useContext(AppContext)
  const [showfilter,setshowfilter] =useState(false)
  const navigate=useNavigate()

  const [filterDoc,setfilterDoc]=useState([]);

  const applyfilter=()=>{
    if (speciality) {
      setfilterDoc(doctors.filter(doc=>doc.speciality===speciality))
    }else{
      setfilterDoc(doctors)
    }
  }

  useEffect(()=>{
    applyfilter()
  },[doctors,speciality])

  return (
    <div>
        <p className='text-gray-600'>Browse Through the Doctors Specialist...</p>
        <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button onClick={()=>setshowfilter(prev=>!prev)} className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showfilter ? 'bg-primary text-white':''}`}>Filters</button>
          <div className={` flex-col gap-4 text-sm text-gray-600 ${showfilter ? 'flex':'hidden  sm:flex'}`}>
          <p onClick={()=> speciality === 'Gynecologist' ? navigate('/doctors'):navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Gynecologist"? "bg-indigo-100 text-black":""}`}>Gynecologist</p>
            <p onClick={()=> speciality === 'General Physician' ? navigate('/doctors'):navigate('/doctors/General Physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="General Physician"? "bg-indigo-100 text-black":""}`}>General Physician</p>
            <p onClick={()=> speciality === 'Dermatologoist' ? navigate('/doctors'):navigate('/doctors/Dermatologoist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Dermatologoist"? "bg-indigo-100 text-black":""}`}>Dermatologoist</p>
            <p onClick={()=> speciality === 'Pediatricians' ? navigate('/doctors'):navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Pediatricians"? "bg-indigo-100 text-black":""}`}>Pediatricians</p>
            <p onClick={()=> speciality === 'Neurologist' ? navigate('/doctors'):navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Neurologist"? "bg-indigo-100 text-black":""}`}>Neurologist</p>
            <p onClick={()=> speciality === 'Gestroenterologist' ? navigate('/doctors'):navigate('/doctors/Gestroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Gastroenterologist"? "bg-indigo-100 text-black":""}`}>Gastroenterologist</p>
          </div>
          <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
            {
              filterDoc.map((item,index)=>(
                <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                <img className='bg-blue-50' src={item.image} alt="" />
                <div className='p-4'>
                  <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                    <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                  </div>
                  <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                  <p className='text-gray-600 text-sm'>{item.speciality}</p>
                </div>
                </div>
          ))
            }
          </div>
        </div>
    </div>
  )
}



export default Doctors
