import React from 'react'
import Emoji from '../assets/guy_behind_laptop_emoji.png'

const Home: React.FC = () => {
  return (
    <div className='space-y-4'>
      <div className='flex'>
        software engineer @ RedpointHQ
      </div>

      <div className='flex mt-4'>
        <a
          href="https://www.redpointhq.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline hover:text-blue-600"
        >
          https://www.redpointhq.com/
        </a>
      </div>

      <div className='flex justify-center'>
        <img src={Emoji} alt="Guy behind laptop" className="w-100 h-auto" />
      </div>


    </div>
  )
}

export default Home
