import { useState } from 'react';
import './Aula.css';

import HelloWorld from '../components/HelloWorld';
import SayMyname from '../components/SayMyName';
import Pessoa from '../components/Pessoa';
import Event from '../components/Event';
import Form from '../components/Form';
import Conditional from '../components/Conditional';
import ListRender from '../components/ListRender';
import StateLift from '../components/StateLift';
import Saudacao from '../components/Saudacao';

function Aula() {
  const name = "Vinicius"
  const newName = name.toUpperCase()
  const jsx = "Esse é o exemplo de JSX"

  const url = "https://reactjs.org"
  const meusItens = ['Prosperidade', 'Abundância', 'Paz', 'Perdão', 'Amor Próprio']
  const [nome, setNome] = useState()

  return (
    <div className="App">
      <header className="App-header">
        <div id="">
          <StateLift setNome={setNome} />
          <h1><Saudacao nome={nome} /></h1>
        </div>
        <Event />
        <Form />
        <SayMyname nome="Orkutilson" />
        <Conditional />
        <SayMyname nome="Facebookilvania" />
        <Pessoa nome="Beth Russo"
          idade="50"
          profissao="Influenciadora"
          foto="https://via.placeholder.com/150"
        />
        <ListRender items={meusItens} />
        <p>Olá {newName}</p>
        <ListRender items={[]} />
        <h2>{jsx}</h2>
        <HelloWorld />
      </header>
    </div>
  );
}

export default Aula;
