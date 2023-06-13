import { ButtonComeBack as Button} from "../../styles/buttons"
import { StyledContainer as Container, StyledHeader, StyledLogo as Logo } from "./StyledHeader"

const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Logo>Kenzie Hub</Logo>
                <Button to="/">Voltar</Button>
            </Container>
        </StyledHeader>  
    )
}

export default Header