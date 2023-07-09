import "./App.css"
import Iteration01 from './Iteration01/Main.jsx'
import Iteration02 from './Iteration02/Main.jsx'

function App() {
  return (
    <div className="App">d
      {false && <Iteration01 />}
      {true && <Iteration02 />}
    </div>
  )
}

// https://github.com/jBenitoLopez/lab-react-training-vite

export default App
