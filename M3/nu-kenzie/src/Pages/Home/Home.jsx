import "./Home.css"
import "../../App.css"
import "../../components/Buttons/Buttons.css"

const Home = ({ isHome, setIsHome }) => {

    return (
        <div className="page-home">
            <div className="container-form">
                <span className="container-text">
                    <span className="container-text-title">
                        <span className="text-nu">Nu</span>
                        <h1>Kenzie</h1>
                    </span>
                    <p className="text-description-1">Centralize o controle das suas finanças</p>
                    <p className="text-description-2">de formarápida e segura</p>
                </span>
                <button
                    className="buttonStart"
                    type="button"
                    onClick={() => setIsHome(!isHome)}
                >
                    Iniciar
                </button>
            </div>
            <div className="container-cycle-1">
                <div className="container-cycle-2">
                    <div className="container-cycle-3">
                        <div className="container-rectangle-1">
                            <div className="containe-rectangle-detail">
                                <span className="container-rectangle-option">
                                    <span className="rectangle-option-red"></span>
                                    <span className="rectangle-option-green "></span>
                                    <span className="rectangle-option-black"></span>
                                </span>
                                <span className="rectangle-detail"></span>
                                <span className="rectangle-detail"></span>
                                <span className="rectangle-detail"></span>
                                <span className="rectangle-detail"></span>
                                <span className="rectangle-detail"></span>
                            </div>
                            <div className="container-rectangle-2">
                                <span>
                                    <span className="card-red"></span>
                                </span>
                                <span>
                                    <span className="rectangle-detail-2"></span>
                                    <span className="rectangle-detail-3"></span>
                                </span>
                            </div>
                            <div className="container-rectangle-3">
                                <span>
                                    <span className="card-green"></span>
                                </span>
                                <span>
                                    <span className="rectangle-detail-4"></span>
                                    <span className="rectangle-detail-5"></span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home