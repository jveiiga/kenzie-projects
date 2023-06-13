/* eslint-disable no-lone-blocks */
import { StyledContainerInput, StyledHeader, StyledLogoBlack, StyledButtonSearch, StyledInput, StyledContainerBtn, StyledLogoColor, StyledContainerLogoHeader, StyledContainerInputButton } from "./StyledHeader"

const Header = ({ filteredProducts, setProducts }) => {

    const showProducts = (value) => {
        {
                value === ""
                ?
                setProducts(filteredProducts)
                :
                setProducts(filteredProducts.filter((snack) => snack.name.toLowerCase().includes(value.toLowerCase())))
        }
    }

    return (
        <StyledHeader>

            <StyledContainerLogoHeader>
                <StyledLogoBlack>
                    Burguer 
                </StyledLogoBlack>
                <StyledLogoColor>
                    kenzie
                </StyledLogoColor>
            </StyledContainerLogoHeader>
            
            <StyledContainerInputButton>
                <StyledContainerInput>
                    <StyledInput
                        placeholder="Digitar Pesquisa"
                        onChange={event => showProducts(event.target.value)}
                    />
                </StyledContainerInput>
                <StyledContainerBtn>
                    <StyledButtonSearch type="submit">
                        Pesquisar
                    </StyledButtonSearch>
                </StyledContainerBtn>
            </StyledContainerInputButton>
        </StyledHeader>
    )
}

export default Header