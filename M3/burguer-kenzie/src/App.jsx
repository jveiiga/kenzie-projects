/* eslint-disable array-callback-return */
import { useEffect, useState } from "react";
import Cart from "./components/Cart/Cart";
import CardProduct from "./components/CardProduct/CardProduct";
import CartTotal from "./components/CartTotal/CartTotal";
import CartProduct from "./components/CartProduct/CartProduct";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import api from "./Services/api"

import "./styles/App.css";
import "./styles/global"
import { StyledContainerCartProductCartTotal, StyledContainerMainApp } from "./StyledApp";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css"

const App = () => {

  const [products, setProducts]                 = useState([])
  const [currentSale, setCurrentSale]           = useState([]) 
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    api.get(`products`)
      .then((res) => {
        setProducts(res.data)
        setFilteredProducts(res.data)
      })
      .catch((err) => console.error(err))
  }, [])

  const handleClick = (snack) => {
    
    const isOnCart = currentSale.some((product) => product.id === snack.id)

    if(isOnCart) {
      toast.error("Este produto já foi adicionado")
    } else {
      setCurrentSale([...currentSale, snack])
    }
  }
  
  return (
    <div className="App">
      <Header
        setProducts={setProducts}
        filteredProducts={filteredProducts}
      />
    <StyledContainerMainApp>
      <ProductList>
        <CardProduct
          products={products}
          handleClick={handleClick}
        />
      </ProductList>
    <StyledContainerCartProductCartTotal>
      <Cart>
        <CartProduct 
          currentSale={currentSale} 
          setCurrentSale={setCurrentSale}  
        />
      </Cart>
      <CartTotal 
        currentSale={currentSale} 
        setCurrentSale={setCurrentSale}
      />
    </StyledContainerCartProductCartTotal>
    </StyledContainerMainApp>
    <ToastContainer />
    </div>
  );
}

export default App;


