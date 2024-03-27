import React, { useEffect } from 'react'
import Three from "three";

const Home = () => {
    useEffect(() => {
        const scene=new Three.Scene();

    }, [])
  return (
    <div className='home'>
        <canvas className='homeCanvas'></canvas>
    </div>
  )
}

export default Home