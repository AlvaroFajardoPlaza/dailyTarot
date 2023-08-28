import CardSpread from "./components/CardSpread"
import 'bootstrap/dist/css/bootstrap.min.css';
import CardState from "./context/CardContext/CardState";

function App() {

  return (
    <>
      <CardState>

        <div className='container'>
          <h1>Daily Tarot</h1>
          <CardSpread />
        </div>

      </CardState>
    </>
  )
}

export default App
