
import { useState } from "react"
import "./Dashboard.css"
import ListClients from "../../components/ListClients/ListClients"
import Card from "../../components/Card/Card"
import Form from "../../components/Form/Form"
import Footer from "../../components/Footer/Footer"
import Buttons from "../../components/Buttons/Buttons"
import Header from "../../components/Header/Header"
import Home from "../Home/Home"

const Dashboard = () => {

    const [isHome, setIsHome]                           = useState(true)
    const [filteredTransaction, setFilteredTransaction] = useState([])
    const [listTransactions, setlistTransactions]       = useState([
        { description: "Salário recebido", type: "entrada", value: 2500 },
        { description: "Conta de luz", type: "saída", value: -150 }
    ])

    const totalPrice = listTransactions.reduce((acc, adc) => {
        return acc + Number(adc.value)
    }, 0)

    return (
      <>
          {isHome 
          ?
          <div className="App">
          <Header
            isHome={isHome} 
            setIsHome={setIsHome}
          />
          <span className="container-form">
            <Form setlistTransactions={setlistTransactions}
                  setFilteredTransaction={setFilteredTransaction}
            />
            <Footer total={totalPrice}>
            </Footer>
          </span>
          <span className="App-container">
            <Buttons listTransactions={listTransactions}  
                     setFilteredTransaction={setFilteredTransaction}
                     
            />
            <ListClients 
                    listTransactions={listTransactions}
            >

              <Card listTransactions={listTransactions}
                    setlistTransactions={setlistTransactions}
                    filteredTransaction={filteredTransaction}
              />
            </ListClients>
          </span>
          </div>
          :
          <Home isHome={isHome} 
            setIsHome={setIsHome}/>
          }
      </>
    );
}

export default Dashboard