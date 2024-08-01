import React, { useState, useMemo } from 'react'
import './App.css'

const App = () => {

  const [height, setHeight] = useState(150);
  const [weight, setWeight] = useState(200);

  function onWeightChange(event) {
    setWeight(event.target.value);
  }

  function onHeightChange(event) {
    setHeight(event.target.value);    
  }

  const output = useMemo(() => {
    const calculateHeight = height/100;
    return (weight/(calculateHeight*calculateHeight)).toFixed(1);
  }, [weight, height])

  return (
    <main>
      <h1>PICKY TELLS BMI</h1>
      <div className='input-section'>
        <p className='slider-weight'>Weight: {weight} kg</p>
        <input type='range' className='input-slider' step="1" min="30" max="300" onChange={onWeightChange} />
        <p className='slider-height'>Height: {height} cm</p>
        <input type='range' className='input-slider' step="1" min="100" max="300" onChange={onHeightChange} />
      </div>

      <div className='output-section'>
        <p>Your BMI is: </p>
        <p className='output'> {output} </p>
      </div>
      </main>
  )
}

export default App
