import Item from "./Item";

export default function List() {
    return(
    <>
        <h1>to do List</h1>
        <ul>
            <Item marca="Apple" lancamento={1991}/>
            <Item marca="Samsumg"/>
            <Item marca="LG" lancamento={2003}/>
            <Item />
        </ul>
    </>
    )
}