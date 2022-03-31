import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './App.css'
import Counter from './counter'
import countReducer from './reducer'


let store = createStore(countReducer)

function App() {
  return (<> <Provider store={store}/>
    <div className="App">
      
      <h1>Practice aobut redux</h1>
      <Counter/>
    </div>
    <Provider/>
    </>
  );
}

export default App;
