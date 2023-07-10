function RandomTest() {
  let result = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  }
  for (let i = 0; i < 10000000; i++) {
    const number = getRandomNumber(1, 6)
    result[number] = result[number] + 1
  }

  const valores = Object.values(result)
  const minimo = Math.min(...valores)

  result[1] -= minimo
  result[2] -= minimo
  result[3] -= minimo
  result[4] -= minimo
  result[5] -= minimo
  result[6] -= minimo

  // console.log(minimo);

  return (
    <div className="App">
      <pre>{JSON.stringify(result)}</pre>
    </div>
  )
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export default RandomTest
