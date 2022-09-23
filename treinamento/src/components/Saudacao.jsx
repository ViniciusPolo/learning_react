export default function Saudacao({ nome }) {
    function gerarSaudacao(algumNome) {
        return `Olá ${algumNome}, Abençoado seja.`
    }
    return (
        <>
            {nome && <p>
                {gerarSaudacao(nome)}
            </p>}
        </>
    )
}