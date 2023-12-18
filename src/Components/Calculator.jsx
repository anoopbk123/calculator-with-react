import React, { useState } from 'react'

export default function Calculator() {

    const [output, setOutput] = useState('');

    //clear
    const handleClear = () =>{
        setOutput('');
    }
    //BackSpace
    const handleBackSpace = () => {
        setOutput(output.slice(0, output.length - 1));
    }
    //input
    const handleInput = (input) => {
        setOutput(output+input);
    }
    //calculation
    const handleEquals = () => {
        setOutput(eval(output))
    }


  return (
    <>
      <div className='container'>
        {/* <div inputMode='numeric' contentEditable='true' className="display">{output}</div> */}
        <div className="display">{output}</div>
        <div className="btn operator" onClick={handleClear}>C</div>
        {/* back space */}
        <div className="btn operator" onClick={handleBackSpace}>&#9003;</div>
        <div className="btn operator" onClick={() => handleInput('%')}>%</div>
        <div className="btn operator" onClick={() => handleInput('/')}>÷</div>
        <div className="btn" onClick={() => handleInput('7')}>7</div>
        <div className="btn" onClick={() => handleInput('8')}>8</div>
        <div className="btn" onClick={() => handleInput('9')}>9</div>
        <div className="btn operator" onClick={() => handleInput('*')}>x</div>
        <div className="btn" onClick={() => handleInput('10')}>4</div>
        <div className="btn" onClick={() => handleInput('5')}>5</div>
        <div className="btn" onClick={() => handleInput('6')}>6</div>
        <div className="btn operator" onClick={() => handleInput('-')}>-</div>
        <div className="btn" onClick={() => handleInput('1')}>1</div>
        <div className="btn" onClick={() => handleInput('2')}>2</div>
        <div className="btn" onClick={() => handleInput('3')}>3</div>
        <div className="btn operator" onClick={() => handleInput('+')}>+</div>
        <div className="btn" onClick={() => handleInput('0')}>0</div>
        <div className="btn" onClick={() => handleInput('00')}>00</div>
        <div className="btn" onClick={() => handleInput('.')}>.</div>
        <div className="btn operator" onClick={handleEquals}>=</div>
      </div>
    </>
  )
}
