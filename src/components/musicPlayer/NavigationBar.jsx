import React from 'react'
import Account from '../shared/svgs/Account'
import Notification from '../shared/svgs/Notification'
import ThemeDay from '../shared/svgs/ThemeDay'
import ThemeNight from '../shared/svgs/ThemeNight'
const NavigationBar = () => {
  return (
    <div className='w-full py-2  flex items-center justify-between'>
        <h2>Notification bar</h2>
        <div className='flex justify-between items-center space-x-4'>
            <Notification />
            {/* <ThemeDay /> */}
            <ThemeNight />
            <Account />
        </div>
        
    </div>
  )
}

export default NavigationBar