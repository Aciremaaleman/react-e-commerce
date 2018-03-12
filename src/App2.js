import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './Product';
import {data } from './Data';
import Counter from './Counter';
import {Link} from 'react-router-dom';


class App2 extends Component {
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
          <Link to='/' activeClassName='hurray'><h1 className="App-title">Checkout</h1></Link>
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


export default App2