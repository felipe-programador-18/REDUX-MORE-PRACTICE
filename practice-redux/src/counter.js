import React from 'react'
import {connect} from 'react-redux'
import {decrement, increment} from './actoins'
// rewrite with components classes!!
const Counter = () =>{
  return(
      <p>
       O contador {this.props.count}
       <button onClick={this.props.increment}>+</button>
       <button onClick={this.props.decrement}>-</button>   
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