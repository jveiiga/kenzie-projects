import "./Card.css"
import { FaTrash } from "react-icons/fa";

const Card = ({ listTransactions, setlistTransactions, filteredTransaction }) => {
   
    const deleteTransaction = (indiceToRemove) => { 
      
        const newList = listTransactions.filter((transaction, i) => i !== indiceToRemove)

        setlistTransactions(newList)
    }

    return (
        <>
            {filteredTransaction.length > 0 
            ? 
                filteredTransaction.map((transaction, i) =>
                <li 
                    className="card-container"
                    key={i}>
                    <span className="card-text">
                        <h2 key={transaction.description}>{transaction.description}</h2>
                        <p className="card-type">{transaction.type}</p>
                    </span>
                    <span className="card-value-trash">
                        <p>{`R$ ${transaction.value}`}</p>
                        <button
                            onClick={() => deleteTransaction(i)}>
                            <span>
                                <FaTrash className="button__gray__trash"/>
                            </span>
                        </button>
                    </span>
                    
                </li>
            )
            :
            listTransactions.length === 0
            ?
            <h2 className="message-card-empty">Você ainda não possui nenhum lançamento!</h2>
            :
            listTransactions.map((transaction, i) =>
                <li 
                    className="card-container"
                    key={i}>
                    <span className="card-text">
                        <h2 key={transaction.description}>{transaction.description}</h2>
                        <p className="card-type">{transaction.type}</p>
                    </span>
                    <span className="card-value-trash">
                        <p>{`R$ ${transaction.value}`}</p>
                        <button
                            onClick={() => deleteTransaction(i)}>
                            <span>
                                <FaTrash className="button__gray__trash"/>
                            </span>
                        </button>
                    </span>
                </li>
            )}
        </>
    )
}

export default Card