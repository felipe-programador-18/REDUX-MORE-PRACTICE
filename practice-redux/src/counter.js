import React, {Component} from 'react'
import {connect} from 'react-redux'
import {decrement, increment} from './actoins'
// rewrite with components classes!!
const Counter = ({count, increment, decrement}) =>{
  return(
      <p>
       O contador {count}
       <button onClick={increment}>+</button>
       <button onClick={decrement}>-</button>   
      </p>
  )
}


const mapStatesProps = (state) => {
    return{
     count: state.count
    }
}

const dispacthcState = (dispatch) =>{
    return{
        increment: ()=> dispatch(increment),
        decrement: ()=> dispatch(decrement)
    }
}


export default connect(mapStatesProps, dispacthcState)(Counter)