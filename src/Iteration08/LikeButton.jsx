import React, { useState } from 'react'
import './Styles.css'

const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

function LikeButton() {

  const [count, setCount] = useState(0)
  const colorBg = colors[getRandomNumber(0,5)];

  return (
    <div className='likebtn'>
      <button style={{backgroundColor: colorBg}} onClick={() => setCount(count+1)}>{count} Likes</button>
    </div>
  )
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



export default LikeButton