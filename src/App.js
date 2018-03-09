import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './Product';
import {data } from './Data';
import Counter from './Counter';


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      count:0,
      
    }
  }

  changeCounter=(status)=>{
   
    this.setState({
      count: this.state.count+status,
      isToggleOn:!this.state.isToggleOn,
     
    })
   console.log(status);
  }  

  
  render() {
    return (
      <div className="Title">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Name of the store</h1>
          <span>Carrito</span>
          <Counter count={this.state.count}/>
          <button>checkout</button>
        </header>
        <p className="App-intro">
          Lista de productos
        </p>
        {data.products.map((product)=><Product 
        changeCounter={this.changeCounter} title={product.title} 
        description={product.description} price={product.price} 
        img={product.imageUrl} />)}
      </div>
    );
  }
}



export default App;
