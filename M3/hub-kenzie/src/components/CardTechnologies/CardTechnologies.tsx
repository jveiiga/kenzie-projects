import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { Button, Container, Li, TitleStatus, TitleTech, Trash } from "./StyledCardTechnologies"

const CardTechnologies = () => {

    const {tech, deleteTechnologies } = useContext(AuthContext)
    
    return (
        <>
            {!tech.length 
                ? 
                    <p>lista vazia</p>
                 : 
                        tech.map((obj, i) => (
                        <Li key={i}>
                            <Container>
                                <TitleTech>{obj.title}</TitleTech>
                                    <TitleStatus>{obj.status}</TitleStatus>
                            </Container>
                                <Button
                                    className="button"
                                    onClick={() => deleteTechnologies(obj.id)}
                                >
                                    <Trash />
                                </Button>
                        </Li>
                    ))
                }
        </>
    )
}

export default CardTechnologies