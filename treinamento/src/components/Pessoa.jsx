import styles from "./Frase.module.css"
// MODO 1 

// export default function Pessoa(props) {
//     return(
//         <div>
//             <img src={props.foto} alt={p} />
//             <h2>Nome: {props.nome}</h2>
//             <p>Idade: {props.idade}</p>
//             <p>Profissão: {props.profissao}</p>
//         </div>
//     )
    
// }

// MODO 2 Melhor destructure
export default function Pessoa({ nome, idade, profissao, foto}) {
    return(
        <div>
            <img src={foto} alt={nome} />
            <h2 className={styles.fraseContent}>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    )
    
}