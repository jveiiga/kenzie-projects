
const Buttons = ({ listTransactions, setFilteredTransaction }) => {

    const filterAll = (transaction) => {

        const allList = listTransactions.filter((transactionAppetizer) => transactionAppetizer.type === transaction)

        setFilteredTransaction(allList)
    }

    return (
        <div className="container-buttons">
            <p>Resumo financeiro</p>
           
                <div className="container-buttons-filter"> 
                 
                    <button
                        className="button__pink__litle"
                        type="button"
                        onClick={() => filterAll("")}
                    >
                        Todos
                    </button>
                    <button
                        className="button__gray__litle"
                        type="button"
                        onClick={() => filterAll("entrada")}
                    >
                        Entradas
                    </button>
                    <button
                        className="button__gray__litle"
                        type="button"
                        onClick={() => filterAll("saída")}
                    >
                        Despesas
                    </button>
                </div>
        </div>
    )
}

export default Buttons 