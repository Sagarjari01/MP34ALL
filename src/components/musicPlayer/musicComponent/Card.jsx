import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({data}) => {
    const navigate = useNavigate()
    const spliceString = (item) =>{
        if(item.length>22){
            return (item.substring(0,22)+"...")
        }
    }
    const navigateToRoute = () =>{
        navigate('/albums')
    }
  return (
    <div key={data.id} onClick={navigateToRoute} className=' p-2 px-3 m-1 hover:bg-[#EADBC8] rounded-md w-fit cursor-pointer'>
        <div className=' w-44 h-48 object-cover'>
            <img className=' rounded-md' src={data.img} alt={data.title} />
        </div>
        <h2 className='text-lg font-bold'>{data.title}</h2>
        <p>{spliceString(data.description)}</p>
    </div>
  )
}

export default Card