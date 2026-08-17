import type { Pessoa } from "../types/Pessoas"

interface ListaPessoasProps {
    lista: Pessoa[]
}

export default function ListaPessoas(props: ListaPessoasProps) {
    return (
        <>
            <h2> Pessoas Cadastradas </h2>
            {ListaPessoas.length === 0 ? (
                <p className="empty-message">Nenhuma pessoa cadastrada </p>
            ) : (
                <ul className="person-list">
                    {props.lista.map((item, indice) => (
                        <li className="person-item" key={indice}>
                            {item.nome} - {item.idade}
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}