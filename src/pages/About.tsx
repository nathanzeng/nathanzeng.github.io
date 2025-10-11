import React from 'react'
import Bird from '../assets/transparent_bird.png'

const About: React.FC = () => {
  return (
    <div className='space-y-4'>
      <div className='text-left'>
        I enjoy playing badminton in my free time
      </div>

      <div className='flex justify-center'>
        <img src={Bird} alt="badminton bird" className="w-100 h-auto" />
      </div>
    </div>
  )
}

export default About
