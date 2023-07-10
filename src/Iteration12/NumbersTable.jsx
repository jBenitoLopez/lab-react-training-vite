import './Styles.css';

function NumbersTable({limit}) {

  let numberJsx = [];
  for (let number = 1; number <= limit; number++) {
    const item = <div key={number} className={'square ' + (number%2===0?'even':'odd')}>{number}</div>
    numberJsx.push(item)   
  }

  return (
    <div className='ntable'>
     {numberJsx.map((item) => item)}
    </div>
  )
}

export default NumbersTable