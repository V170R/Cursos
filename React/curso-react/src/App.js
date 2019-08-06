import React, {Component, useState, Fragment} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Header from './Header';
import Tabela from './Tabela';
import Formulario from './Formulario';

 /*function contaClicks(){
    const [contador, setContador] = useState(0);
    return (
      <div>
        <p>Você clicou {contador} vezes</p>
        <button onClick={()=> setContador(contador +1)}>Clicar</button>
      </div>
    );
 }*/

class App extends Component {
  state = {
    autores: [
      {
        nome: 'Paulo',
        livro: 'React',
        preco: '1000'
      },
      {
        nome: 'Daniel',
        livro: 'Java',
        preco: '99'
      },
      {
        nome: 'Marcos',
        livro: 'Design',
        preco: '150'
      },
      {
        nome: 'Bruno',
        livro: 'DevOps',
        preco: '100'
      }
    ],
  };

  removeAutor = index => {
    const{autores} = this.state;
    this.setState(
      {
        autores: autores.filter((autor, posAtual) =>{
          return posAtual !== index;
        }),
      }
    );
  }

  submitListener = autor => {
    this.setState({autores:[...this.state.autores, autor]})
  }

  render(){
    return (
      <Fragment>
        <Header />
        <div className="container mb-10">
          <Tabela autores = {this.state.autores} removeAutor = {this.removeAutor}/>
          <Formulario submitListener= {this.submitListener} />
        </div>
      </Fragment>
    );
  }
}

export default App;
