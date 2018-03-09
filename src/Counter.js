import React from 'react'
import ReactDOM from 'react-dom'
import{ Button } from './Button'


  class Counter extends React.Component{
  
   
   
    render(){
        return(
           <span>{this.props.count}</span>
        )
    }
}


export default Counter

