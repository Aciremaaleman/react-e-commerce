import React from 'react'
import ReactDOM from 'react-dom'
import{ Counter } from './Counter'


 export  class Button extends React.Component{
   constructor(props){
       super(props)
       this.state={
          isToggleOn:true
           
       };
       this.handleClick=this.handleClick.bind(this);
   }
   
   handleClick(){

    this.props.onClick(this.state.isToggleOn ? +1:-1)
    this.setState(prevState =>({
        isToggleOn: !prevState.isToggleOn
    }))
}  


render(){
        return(
            <div>
            <button onClick={this.handleClick}>{this.state.isToggleOn ?
                "add to cart": "remove from cart"}</button>
            </div>
        )
    }
}