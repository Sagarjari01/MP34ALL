import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeMusic, readyToPlay } from '../../../store/slices/musicSlice'

const Album = ({data}) => {
  const dispatch = useDispatch()
  const stateData = useSelector((state)=>state.Music)
  const handleTrack = () =>{
    if(!stateData.IsMusicReady){
      dispatch(readyToPlay(true))
    }
    dispatch(changeMusic(data.id))
  }
  return (
    <div onClick={()=>handleTrack(data.id)} className=' cursor-pointer hover:bg-[#EADBC8] p-2 flex items-center justify-between '>
      <div className='flex items-center space-x-4'>
        <h3 className='font-semiboldd text-lg'>{data.id}</h3>
        <img className='w-10 h-10' src={data.img} alt={data.title} />
        <div>
          <p className='font-medium'>{data.title}</p>
          <p className='font-normal'>Mitraz</p>   
        </div>

      </div>
      <p className='font-normal'>{data.title}</p>
      <p className='font-normal'>{data.length}</p>
    </div>
  )
}

export default Album