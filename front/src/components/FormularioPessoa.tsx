
interface FormularioPessoaProps {
    nome: string
    idade: string
    setNome: (value: string) => void
    setIdade: (value: string) => void
    handleSalvar: () => void
}


export default function FormularioPessoa(props: FormularioPessoaProps) {

    return (
        <>
            <div className="form-field">
                <label htmlFor="cpnome"> Nome: </label>
                <input
                    id="cpnome"
                    value={props.nome}
                    onChange={function (event) { props.setNome(event.target.value) }}
                />
            </div>

            <div className="form-field">
                <label htmlFor="cpidade"> Idade: </label>
                <input
                    id="cpidade"
                    value={props.idade}
                    min={1}
                    onChange={(event) => props.setIdade(event.target.value)}
                />
            </div>
            {/* no onClick eu estou passando a funçao handleSalvar e nao executando */}
            <button onClick={props.handleSalvar}>Salvar</button>
        </>
    );
}