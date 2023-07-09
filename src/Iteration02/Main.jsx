import { Greetings } from './Greetings'
import './Styles.css'

function Main(params) {
  return (
    <div className='main'>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
    </div>
  )
}

export default Main