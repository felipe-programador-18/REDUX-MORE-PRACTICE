// this is part where i creted a object to adding inside out another function!!!
const Inicial_State = {
    count:0
}

const countReducer = (state= Inicial_State, action) => {
     switch(action.type){
         case 'INCREMENT':
             return {...state, count: state.count+1}
         case 'DECREMENT':
             return {...state, count: state.count-1}
             
          default:
              return state   
     }
     
}



export default countReducer