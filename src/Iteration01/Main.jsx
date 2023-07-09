import IdCard from './IdCard'
import './Styles.css'

function Main(params) {
  return (
    <div className='main'>
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14").toJSON()}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11").toJSON()}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
    </div>
  )
}

export default Main