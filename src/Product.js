import React from 'react'
import ReactDOM from 'react-dom'
import{ Button } from './Button'


 export default class Product extends React.Component{
    


    
   
    render(){
        return(
            <div>
            <h1>{this.props.title}</h1>
            <img/>
            <p>{this.props.description}</p>
            <p>{this.props.price}</p>
            <Button id={this.props.id} onClick={this.props.changeCounter} />
            </div>
        )
    }
}





