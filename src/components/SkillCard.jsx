import React from 'react'

const SkillCard = ({skill}) => {
  return (
    <div className='h-[47vh] w-[30vw] bg-gray-400 flex items-center justify-center flex-shrink-0'>
        <div className='h-[35vh] w-[25vw] bg-slate-200 flex items-center justify-center'>
        <h1 className='text-4xl'>{skill}</h1>
        </div>
    </div>
  )
}

export default SkillCard