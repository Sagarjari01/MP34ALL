import React from 'react'
import Card from './musicComponent/Card'
import data from '../shared/json/covers.json'
const CardGrid = () => {
  return (
    <div className='grid gap-4 pt-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 '>
        {
            data.map((obj)=>
                <Card data={obj} />
            )
        }
    </div>
  )
}

export default CardGrid