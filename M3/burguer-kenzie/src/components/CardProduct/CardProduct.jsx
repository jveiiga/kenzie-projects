/* eslint-disable jsx-a11y/alt-text */
import { StyledButtonAdd } from "../../styles/buttons"
import { StyledCard, StyledCategory, StyledImgCard, StyledPrice, StyledTitle } from "./StyledCardProduct"


const CardProduct = ({ products, handleClick }) => {

    return (
        <>
            {products.map((snack) =>
            <StyledCard key={snack.id}>
                    <StyledImgCard src={snack.img}/>
                    <StyledTitle>
                        {snack.name}
                    </StyledTitle>
                    <StyledCategory>
                        {snack.category}
                    </StyledCategory>
                    <StyledPrice>
                        R$ {snack.price}
                    </StyledPrice>
                    <StyledButtonAdd 
                        type="button"
                        onClick={() => handleClick(snack)}>
                        Adicionar
                    </StyledButtonAdd>
            </StyledCard>
            )}
        </>
    )
}

export default CardProduct

