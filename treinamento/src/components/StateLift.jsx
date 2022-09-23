export default function StateLift({setNome}){
    return(
        <>
        <h2>State Lift</h2>
        <p>Digite seu Nome:</p>
        <input type="text" placeholder="Digite seu nomoe" onChange={(e) => setNome(e.target.value)}/>
        </>

    )
}