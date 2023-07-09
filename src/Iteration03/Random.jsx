

function Random({ min, max }) {
  const number = getRandomNumber(min, max)

  return (
    <div className='card'>
      <div className='header-4 m-1'>{`Random value between ${min} and ${max} => ${number}`}</div>
    </div>
  )
}


function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export default Random