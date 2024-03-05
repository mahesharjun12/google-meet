import React, {  useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    let [val, setVal] = useState()
    let navigate = useNavigate()
    const joinRoom = useCallback(() => {
        navigate(`/room/${val}`)
    },[val,navigate``])
  return (
    <div>
          <input type="text" name="" placeholder='Enter your room code' onChange={(e) => setVal(e.target.value)} id="" />
          <button onClick={joinRoom}>Join Room</button>
    </div>
  )
}

export default Home
