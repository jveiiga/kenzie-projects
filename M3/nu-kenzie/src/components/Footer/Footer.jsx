import "./Footer.css"

const Footer = ({ total }) => {
    return (
        <footer>
            <span className="container-text-value">
                <p>Valor total:</p>
                <p className="value">{`$ ${total}`}</p>
            </span>
            <p className="container-text-value">O valor se refere ao saldo</p>
        </footer>
    )
}

export default Footer