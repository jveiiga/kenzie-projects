import "./Form.css"
import { useState } from "react"

const Form = ({ setlistTransactions }) => {
  
    const [description, setDescription] = useState("")
    const [value, setValue]             = useState()
    const [type, setType]               = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()

        if(type === "saída") {
            setValue(0 - Number(value))
        }
        setlistTransactions((previousTransaction) => 
        
            [...previousTransaction, {description, value, type}]
        )
        setDescription("")
        setValue("")
        setType("-")
    }

    return (
        <form onSubmit={handleSubmit}>
            <span className="container-input">
                <label>Descrição</label>
                <input
                    required
                    placeholder="Digite aqui sua descrição"
                    className="input__text"
                    value={description}
                    type="text"
                    onChange={event => setDescription(event.target.value)}
                />
                <p className="text-description">Ex: Compra de roupas</p>
            </span>
            <span className="container-input-select">
                <span>
                    <span className="container-input">
                        <label>Valor</label>
                        <input
                            required    
                            placeholder="R$"
                            className="input__number"
                            value={value}
                            type="number"
                            onChange={event => setValue(event.target.value)}
                        />
                    </span>
                </span>
                <span>
                    <span className="container-input">
                        <label>Tipo de valor</label>
                        <select
                            required
                            defaultValue={""} 
                            value={type}
                            onChange={event => setType(event.target.value)}
                            >   
                            <option value="">-</option>
                            <option value="entrada">Entrada</option>
                            <option value="saída">Saída</option>
                        </select>
                    </span>
                </span>
            </span>
            <button
                className="button__pink__medium" 
                type="submit">
                Inserir valor
            </button>
        </form>
    )
}

export default Form