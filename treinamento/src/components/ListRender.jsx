export default function ListRender({items}) {
    return(
        <>
            <h3>Lista de Coisas Boas</h3>
            {items.length > 0 ? (
                items.map((item, index) => (
                    <p>{item}</p>
                ))) : ( 
                    <p> Lista vazia</p>
                )
            }
        </>
    )
}