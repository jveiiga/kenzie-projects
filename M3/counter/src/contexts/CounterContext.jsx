import { createContext, useState } from "react";

export const CouterContext = createContext({})

const Counter = ({ children }) => {

    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(counter + 1)
    } 

    const decrement = () => {
        setCounter(counter -1)
    } 

    return (
        <CouterContext.Provider value={{counter, increment, decrement}}>
            {children}
        </CouterContext.Provider>
    )
}

export default Counter