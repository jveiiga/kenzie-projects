import { StyledProductList } from "./StyledProductList"

const ProductList = ({ children }) => {

    return (
        <StyledProductList>
            {children}
        </StyledProductList>
    )
}

export default ProductList