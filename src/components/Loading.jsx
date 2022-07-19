import React from 'react'
import { BallTriangle } from 'react-loader-spinner'
const Loading = () => {
  return (
    <div className='flex justify-center items-center'>
      <BallTriangle
        height={550} width={80}
        color="#00BFFF"
        ariaLabel="loading-indicator"
      />
    </div>
  )
}

export default Loading