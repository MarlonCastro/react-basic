import React, { Component } from 'react';
import './App.css';
import Titulo from './Titulo/titulo';
import Navbar from './navbar/navbar';
import Card from './card/card';
import ListaCartao from './card/lista-cartao';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar titulo='REACT' cor='green' />
        <div className='container'>
          <Titulo />
          <ListaCartao qtdLinha='5' tamanhoCol='4' />
        </div>
      </div>

    );
  }
}

export default App;
