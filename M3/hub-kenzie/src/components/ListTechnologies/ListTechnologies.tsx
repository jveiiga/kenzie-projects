import { ReactNode } from "react"
import { Button, Container, ContainerInfoTechnologies, Title, Ul } from "./StyledListTechnologies"

interface IListProps {
    children: ReactNode;
    handleModal: () => void;
}

const ListTechnologies = ({ children, handleModal }: IListProps) => {

    return (
        <Container>
            <ContainerInfoTechnologies>
                <Title>Tecnologias</Title>
                <Button onClick={() => handleModal()}>+</Button>
            </ContainerInfoTechnologies>
            <Ul>{children}</Ul>
        </Container>
    )
}

export default ListTechnologies