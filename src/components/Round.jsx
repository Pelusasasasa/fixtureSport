import React from 'react'

const Fixture = ({fixture}) => {
  return (
    <p className='bg-slate-500 mx-1.5 hover:cursor-pointer my-1 text-center'>
      {fixture}
    </p>
  )
}

export default Fixture