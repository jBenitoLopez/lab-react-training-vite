/* eslint-disable no-unused-vars */
import { useState } from 'react'
import '../assets/css/Dice.css'
import diceEmpty from '../assets/images/dice-empty.png'
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
import dice6 from '../assets/images/dice6.png'

const dices = [diceEmpty, dice1, dice2, dice3, dice4, dice5, dice6]


function Dice() {

  let [number, setNumber] = useState(0) ;

  const handlerClick = () => {
    setNumber(0);

    setTimeout(() => {
      setNumber(getRandomNumber(1, 6))
    }, 1000);
    
  }

  return (
    <div className='dice' onClick={handlerClick}>
      <img src={dices[number]} alt={number} />
    </div>
  )
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export default Dice