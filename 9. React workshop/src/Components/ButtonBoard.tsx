import { useState } from 'react';

import './ButtonBoard.css'

interface IProps {
  numberOfButtons: number
}

function ButtonBoard(props: IProps){
  /*
    This component has a demonstration of mapping multiple duplicate components.
    Notice that in the map function, the buttons have a key property.
    It is required so that React knows which button is which.
  */

  // Example state setup.
  const [currentNumber, setCurrentNumber] = useState<number|null>(null)

  const numberList : number[] = []
  for(let i = 0; i < props.numberOfButtons; i++) numberList.push(i+1) // From 1 to n instead of 0 to n - 1.

  const handleClick = (i: number) => {
    setCurrentNumber(i)
  }

  return(
    <div className="ButtonBoard">
      <h2>
        Below are mapped buttons that can change a component state. &nbsp;
        {currentNumber == null ? 'You have not pressed a button.' : `You have pressed the number ${currentNumber} button!`}
      </h2>
      {numberList.map((o: number,i: number) => {return <button key={i} onClick={() => handleClick(o)}>{o}</button>})}
    </div>
  )
}

export default ButtonBoard;