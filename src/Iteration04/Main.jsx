import './Styles.css'
import BoxColor from './BoxColor'

function Main(params) {

  return (
    <div className='main'>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
    </div>
  )
}

export default Main