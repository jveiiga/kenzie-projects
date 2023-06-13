import { StyledBtnRemoveAllCartTotal, StyledCartTotal, StyledCartTotalHr, StyledContainerBtnRmvAllCartToal, StyledContainerTextCartTotal, StyledTitleCartTotal, StyledValueCartTotal } from "./StyledCartTotal"

const CartTotal = ({ currentSale, setCurrentSale }) => {

    const total = currentSale.reduce((acc, adc) => {
        return acc + Number(adc.price)
    }, 0)
    
    const handleClickBtnRmvAll = () => {
        setCurrentSale([])        
    }

    return (
        <StyledCartTotal>
            <StyledCartTotalHr />
            <StyledContainerTextCartTotal>
                <StyledTitleCartTotal>
                    Total
                </StyledTitleCartTotal>
                <StyledValueCartTotal>
                    {total.toFixed(2)}
                </StyledValueCartTotal>
            </StyledContainerTextCartTotal>
            <StyledContainerBtnRmvAllCartToal>
                <StyledBtnRemoveAllCartTotal onClick={() => handleClickBtnRmvAll()}>
                    Remover todos
                </StyledBtnRemoveAllCartTotal>
            </StyledContainerBtnRmvAllCartToal>
        </StyledCartTotal>
    )
}

export default CartTotal