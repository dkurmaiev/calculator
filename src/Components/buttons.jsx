import React from 'react';

function Buttons(props) {
  return (
    <div className='buttons'>
      <div className='row1'>
        <button className='button button-action' onClick={() => props.handleButtonClick('c')}>c</button>
        <button className='button button-action' onClick={() => props.handleButtonClick('+/-')}>+/-</button>
        <button className='button button-action' onClick={() => props.handleButtonClick('%')}>%</button>
        <button className='button button-calc' onClick={() => props.handleButtonClick('/')}>&#247;</button>
      </div>
      <div className='row2'>
        <button className='button' onClick={() => props.handleButtonClick('7')}>7</button>
        <button className='button' onClick={() => props.handleButtonClick('8')}>8</button>
        <button className='button' onClick={() => props.handleButtonClick('9')}>9</button>
        <button className=' button button-calc' onClick={() => props.handleButtonClick('*')}>x</button>
      </div>
      <div className='row3'>
        <button className='button' onClick={() => props.handleButtonClick('4')}>4</button>
        <button className='button' onClick={() => props.handleButtonClick('5')}>5</button>
        <button className='button' onClick={() => props.handleButtonClick('6')}>6</button>
        <button className='button button-calc' onClick={() => props.handleButtonClick('-')}>-</button>
      </div>
      <div className='row4'>
        <button className='button' onClick={() => props.handleButtonClick('1')}>1</button>
        <button className='button' onClick={() => props.handleButtonClick('2')}>2</button>
        <button className='button' onClick={() => props.handleButtonClick('3')}>3</button>
        <button className='button button-calc' onClick={() => props.handleButtonClick('+')}>+</button>
      </div>
      <div className='row5'>
        <button className='button button-0' onClick={() => props.handleButtonClick('0')}>0</button>
        <button className='button' onClick={() => props.handleButtonClick('.')}>.</button>
        <button className='button button-calc' onClick={() => props.handleButtonClick('=')}>=</button>
      </div>
    </div>
  );
}

export default Buttons;
