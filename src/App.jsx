import "./App.css"
import Iteration01 from './Iteration01/Main.jsx'
import Iteration02 from './Iteration02/Main.jsx'
import Iteration03 from './Iteration03/Main.jsx'
import Iteration04 from './Iteration04/Main.jsx'
import Iteration05 from './Iteration05/Main.jsx'

function App() {
  return (
    <div className="App">
      {false && <Iteration01 />}
      {false && <Iteration02 />}
      {false && <Iteration03 />}
      {false && <Iteration04 />}
      {true && <Iteration05 />}
    </div>
  )
}

// https://github.com/jBenitoLopez/lab-react-training-vite

export default App
