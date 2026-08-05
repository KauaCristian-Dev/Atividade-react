import { useState } from "react";
import "./App.css";

// para retornar dois elementos eu devo usar uma div ou um fragment ( fragment é uma forma de nao identificar a tag, simplificando o código ), como uma forma de impacotar os dois elementos, trasnformando em um só
export default function App() {
  return (
    <>
    <Formulario />
    </>
  );
}
// criando um tippo, para especificar os tiposm de dados usados
type Pessoa = {nome:string, idade:number};



function Formulario() {
const [nome, setNome] = useState("");
const [idade, setIdade] = useState("");
const [pessoas, setPessoas] = useState <Pessoa[]>([]);

function handleSalvar(){
  const idadeNumerica = Number(idade);

  if(nome.trim() === "" || idadeNumerica >= 18){
  const obj ={nome, idade:idadeNumerica};
  const temp = [...pessoas, obj];
  setPessoas(temp);

  setNome("");
  setIdade("")
  }
}

  return <>
  <div className="div-flex">
    <div className="div-flex-input">
      <div className="div-ident"> <h1>Cadastro de Pessoas</h1></div>
      <div className="div-input">
       
        <label htmlFor="cpnome"> Nome: </label>
        <input 
        id="cpnome"
        value ={nome}
        onChange={ function(event){ setNome(event.target.value)}}/>
        <label htmlFor="cpidade"> Idade: </label>
        <input 
        id="cpidade"
        value={idade}
        min = {1}
        onChange={ (event) => setIdade(event.target.value)}
        />

      </div>
      <div className="div-buttom">
          {/* no onClick eu estou passando a funçao handleSalvar e nao executando */}
        <button onClick={handleSalvar}>Salvar</button>
      </div>
       
    </div>
    <div className="div-lista-flex">
      <div className="div-lista">
        <h1>Lista de Pessoas</h1>
        <ul className="list">
          {pessoas.map(function (item) {
            return (
              <li>
                  {item.nome} - {item.idade}
              </li>
            );
          })}
        </ul>
      </div>    
    </div>
  </div>

    </>
}
