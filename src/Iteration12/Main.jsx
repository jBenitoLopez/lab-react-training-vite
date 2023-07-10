import './Styles.css'

import NumbersTable from './NumbersTable'

function Main() {

  return (
    <div className='main'>
      <NumbersTable limit={12} />
    </div>
  )
}

export default Main