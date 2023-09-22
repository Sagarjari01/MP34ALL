import React from 'react'
import NavigationBar from './NavigationBar'
import Album from './musicComponent/Album'
import data from '../shared/json/albums.json'

const AlbumList = () => {
  const RenderList = () =>{
    return(
      data.map((item)=><Album data={item} />)
    )
  }
  return (
    <div className=' w-full rounded-[30px] p-8 '>
      <NavigationBar />
      <div className='pt-4'>
        {RenderList()}

      </div>
    </div>
  )
}

export default AlbumList