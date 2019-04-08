import React from 'react'

function DrumBeat({color}) {
  return(
    <div
      className='key-inlay fall-off-screen'
      style={{
        backgroundColor: color,
        borderColor: color,
        boxShadow: `0 0 1rem ${color}`
      }}
      />
  )
}
export default DrumBeat
