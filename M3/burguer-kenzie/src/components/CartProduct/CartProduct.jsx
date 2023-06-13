/* eslint-disable jsx-a11y/alt-text */
import { StyledCartProduct, StyledImgCartProduct, StyledTitleCartProduct, StyledCategoryCartProduct, StyledBtnRemoveCartProduct, StyledIconCartProduct, StyledContainerIconProduct} from "./StyledCartProduct"
import { FcAddDatabase } from "react-icons/fc"
import "../../styles/App.css"

const CartProduct = ({ currentSale, setCurrentSale }) => {

    const deleteCart = (idRemove) => {

        const newListCart = currentSale.filter((removeSale) => removeSale.id !== idRemove)

        setCurrentSale(newListCart)
    }

    return (
        <>
            {currentSale.length > 0
            ?
                currentSale.map((current) =>
                
                <StyledCartProduct key={current.id}>
                    <StyledImgCartProduct src={current.img}/>
                    <span>
                        <StyledTitleCartProduct>
                            {current.name}
                        </StyledTitleCartProduct>
                        <StyledCategoryCartProduct>
                            {current.category}
                        </StyledCategoryCartProduct>
                    </span> 
                    <StyledBtnRemoveCartProduct onClick={() => deleteCart(current.id)}>
                        Remover
                    </StyledBtnRemoveCartProduct>
                </StyledCartProduct>
            )
            :
                <StyledContainerIconProduct>
                    <StyledIconCartProduct>Sua sacola está vazia <FcAddDatabase /></StyledIconCartProduct>
                </StyledContainerIconProduct>
            }
        </>
    )
}

export default CartProduct