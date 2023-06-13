import "./Header.css"

const Header = ({ isHome, setIsHome }) => {

    return (
        <header>
            <span className="logo">
                <p className="part-1">Nu</p>
                <p className="part-2">Kenzie</p>
            </span>
            <button 
                className="button__gray"
                type="button"
                onClick={() => setIsHome(!isHome)}
            >
                Inicio
            </button>
        </header>
    )
}

export default Header