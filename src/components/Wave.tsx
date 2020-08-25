import React, { useState } from 'react'

interface WaveProps {}

const Wave: React.FC<WaveProps> = ({}) => {
  const [waves, setWaves] = useState(0)
  const label = `👋 ${waves} ${waves === 1 ? 'wave' : 'waves'}`
  return (
    <button
      className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      onClick={() => setWaves(waves + 1)}
    >
      {label}
    </button>
  )
}

export default Wave
