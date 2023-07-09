import "./App.css"
import Iteration01 from './Iteration01/Main.jsx'
import Iteration02 from './Iteration02/Main.jsx'
import Iteration03 from './Iteration03/Main.jsx'

function App() {
  return (
    <div className="App">
      {false && <Iteration01 />}
      {false && <Iteration02 />}
      {true && <Iteration03 />}
    </div>
  )
}

// https://github.com/jBenitoLopez/lab-react-training-vite

export default App
