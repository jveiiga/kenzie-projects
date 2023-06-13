import "./ListClients.css"

const ListClients = ({ children }) => {

    return (
        <>
            {/* <h2>Você ainda não possui nenhum lançamento</h2> */}
            <ul>
                {children}
            </ul>     
        </>
       
    )
}
export default ListClients
