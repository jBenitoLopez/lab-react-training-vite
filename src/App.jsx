import "./App.css"
import Greetings from './components/Greetings'
import IdCard from './components/IdCard'

function App() {
  return (
    <div className="App">
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <IdCard
            lastName='Doe'
            firstName='John'
            gender='male'
            height={178}
            birth={new Date("1992-07-14").toJSON()}
            picture="https://randomuser.me/api/portraits/men/44.jpg"
          />
        </div>
        <div className="col-sm-6 mb-3 mb-sm-0">
          <IdCard
            lastName='Delores '
            firstName='Obrien'
            gender='female'
            height={172}
            birth={new Date("1988-05-11").toJSON()}
            picture="https://randomuser.me/api/portraits/women/44.jpg"
          />
        </div>
      </div>
    </div>
  )
}

export default App
