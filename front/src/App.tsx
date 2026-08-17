import { useState } from "react";
import "./App.css";
import type { Pessoa } from "./types/Pessoas";
import ListaPessoas from "./components/ListaPessoas";
import FormularioPessoa from "./components/FormularioPessoa";

// para retornar dois elementos eu devo usar uma div ou um fragment ( fragment é uma forma de nao identificar a tag, simplificando o código ), como uma forma de impacotar os dois elementos, trasnformando em um só
// criando um tippo, para especificar os tiposm de dados usados

function App() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("")
  const [pessoas, setPessoas] = useState<Pessoa[]>([]);

  function handleSalvar() {
        const idadeNumerica = Number(idade);

        if (nome.trim() === "" || idadeNumerica <= 17) {
            return;
        }
        const obj: Pessoa = { nome, idade: idadeNumerica };
        const temp = [...pessoas, obj];
        setPessoas(temp);

        setNome("");
        setIdade("")
    }

  return (
    <main className="container">
      <section className="card">
        <FormularioPessoa nome={nome} idade={idade} setNome={setNome} setIdade={setIdade} handleSalvar={handleSalvar}/>

        <ListaPessoas lista={pessoas} />
      </section>
    </main>
  )
}

export default App;
