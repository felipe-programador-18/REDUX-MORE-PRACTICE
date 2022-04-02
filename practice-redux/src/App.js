import React, {Component} from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './App.css'
import Counter from './counter'
import countReducer from './reducer'
import Displaycounter from './Displaycounter' 


let store = createStore(
  countReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

class App extends Component{
  render(){
  return ( 
   <Provider store={store}>
    <div className="App">  
      <h1>Practice aobut redux</h1>
      <Counter/>
      <Displaycounter/>
    </div>
    </Provider>
    
  );
}}

export default App;
