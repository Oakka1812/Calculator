import React from 'react'
import '../css/Button.css'

const Button = ({buttonHandler}) => {
  return (
    <div className='btn-container'>
      <div className="btn-group">
        <button className='btn' onClick={(e) => buttonHandler(e.target.innerText)}>C</button>
        <button className='btn' onClick={(e) => buttonHandler(e.target.innerText)}>(</button>
        <button className='btn' onClick={(e) => buttonHandler(e.target.innerText)}>)</button>
        <button className='btn' onClick={(e) => buttonHandler(e.target.innerText)}>Back</button>
      </div>
      <div className="btn-group">
        <button className='btn' onClick={(e) => buttonHandler(e.target.innerText)}>7</button>
        <button className='btn' onClick={(e) => buttonHandler(e.target.innerText)}>8</button>
        <button className='btn' onClick={(e) => buttonHandler(e.target.innerText)}>9</button>
        <button className='btn' onClick={(e) => buttonHandler(e.target.innerText)}>+</button>
      </div>
      <div className="btn-group">
        <button className='btn' onClick={(e) => buttonHandler(e.target.innerText)}>4</button>
        <button className='btn' onClick={(e) => buttonHandler(e.target.innerText)}>5</button>
        <button className='btn' onClick={(e) => buttonHandler(e.target.innerText)}>6</button>
        <button className='btn' onClick={(e) => buttonHandler(e.target.innerText)}>-</button>
      </div>
      <div className="btn-group">
        <button className='btn' onClick={(e) => buttonHandler(e.target.innerText)}>1</button>
        <button className='btn' onClick={(e) => buttonHandler(e.target.innerText)}>2</button>
        <button className='btn' onClick={(e) => buttonHandler(e.target.innerText)}>3</button>
        <button className='btn' onClick={(e) => buttonHandler(e.target.innerText)}>*</button>
      </div>
      <div className="btn-group">
        <button className='btn' onClick={(e) => buttonHandler(e.target.innerText)}>.</button>
        <button className='btn' onClick={(e) => buttonHandler(e.target.innerText)}>0</button>
        <button className='btn' onClick={(e) => buttonHandler(e.target.innerText)}>00</button>
        <button className='btn' onClick={(e) => buttonHandler(e.target.innerText)}>/</button>
      </div>
      <div className="btn-group">
        <button className='btn btn-name'>OAKKA</button>
        <button className='btn-calculate' onClick={(e) => buttonHandler(e.target.innerText)}>=</button>
       
      </div>
    </div>
  )
}

export default Button
