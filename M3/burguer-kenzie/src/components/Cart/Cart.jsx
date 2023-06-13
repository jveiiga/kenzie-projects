import { StyledCart, StyledCartHeader } from "./StyledCart"

const Cart = ({ children }) => {

    return (
        <>
            <StyledCartHeader>
                Carrinho de compras
            </StyledCartHeader>
            <StyledCart>
                {children} 
            </StyledCart>
        </>
    )
}

export default Cart