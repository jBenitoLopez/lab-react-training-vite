import Random from './Random'
import './Styles.css'

function Main(params) {
  return (
    <div className='main'>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
    </div>
  )
}

export default Main