import React from 'react'
import ReactDOM from 'react-dom'
import{ Counter } from './Counter'
import{ data } from './Data'

const newList=[]
 
export  class Button extends React.Component{
   constructor(props){
       super(props)
       this.state={
          isToggleOn:true
           
       };
       this.handleClick=this.handleClick.bind(this);
   }
   
   handleClick(id){
  //console.log(this.props.id)
  if(this.state.isToggleOn){
      
  }
  {data.products.forEach(product=>{
    if(this.props.id===product.id){
      newList.push(product);
      console.log(newList);
      
    }
    //storeProduct(checkList);
  })}

    this.props.onClick(this.state.isToggleOn ? +1:-1)
    this.setState(prevState =>({
        isToggleOn: !prevState.isToggleOn
    }))
}  


render(){
        return(
            <div>
            <button onClick={this.handleClick} id={this.props.id}>{this.state.isToggleOn ?
                "add to cart": "remove from cart"}</button>
            </div>
        )
    }
}