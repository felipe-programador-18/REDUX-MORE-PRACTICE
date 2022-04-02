import React from 'react'
import { connect } from 'react-redux'

const displayCounter = ({count}) =>{
    return <p> o contador esta em: {count} </p>
}

const mapStatesProps = (state) =>{
    return {
        count: state.count
    }
}


export default  connect(mapStatesProps)(displayCounter)