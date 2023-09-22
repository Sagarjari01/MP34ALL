import React from 'react'
import NavigationBar from './NavigationBar'
import CardGrid from './CardGrid'
const Home = () => {
  return (
    <div className=' w-full rounded-[30px] p-8 '>
        <NavigationBar />
        <CardGrid />
    </div>
  )
}

export default Home