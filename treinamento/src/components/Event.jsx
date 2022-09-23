import Button from "./event/Button"
function Event() {
    function myEvent() {
        console.log("Clicou")
    };

    function mySecondEvent() {
        console.log("Clicou no segundo")
    }
    return (
        <>
        <p>Clique para disparar o evento</p>
        <Button event={myEvent} text={"Evento através de Props"}/>
        <Button event={mySecondEvent} text={"Segundo Evento através de Props"}/>
        <button onClick={myEvent}>Evento direto</button>
        </>
    )
}
export default Event