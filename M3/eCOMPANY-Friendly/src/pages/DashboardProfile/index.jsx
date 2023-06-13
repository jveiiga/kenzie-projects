/*import { StyledDashboard, Profile, Elipse, Background } from "../Dashboard/styles";
import { StyledDashboardProfile} from "./styles";
import darkicon from "../../assets/ecology-maps-and-location-svgrepo-com 1.svg";
import logout from "../../assets/Exit_1_.svg";
import mail from "../../assets/mail.svg";
import phone from "../../assets/Phone.svg";
import ProfileCardMaterial from "../../components/ProfileCardMaterial";
import profile from "../../assets/blank-profile-picture-973460.svg";
import addmaterial from "../../assets/Group.svg";
import lupapesquisa from "../../assets/Group(1).svg";
import elipse from "../../assets/Ellipse 1.svg";
import background from "../../assets/Rectangle 39.svg";*/
import darkicon from "../../assets/Logo.svg"
import mail from "../../assets/mail_FILL0_wght400_GRAD0_opsz48 1.svg"
import logout from "../../assets/Exit_1_.svg"
import phone from "../../assets/call_FILL0_wght400_GRAD0_opsz48(1) 1.svg"
import lupapesquisa from "../../assets/Group(1).svg"
import addmaterial from "../../assets/Group.svg"
import elipse from '../../assets/Ellipse 1.svg'
import { Background, Elipse, Profile, StyledDashboard } from "../Dashboard/styles";
import { StyledDashboardProfile } from "./styles";
import ProfileCardMaterial from "../../components/ProfileCardMaterial"
import { useContext, useEffect, useState } from "react"
import Api from "../../services/Api"
import { AuthContext } from "../../contexts/authContext"

const DashboardProfile = () => {

    const {remove} = useContext(AuthContext)

    const [user, setUser] = useState([])

    useEffect(() => {
        
        const id = localStorage.getItem("@eCOMPANY:user_id")

             Api.get(`users/${id}?_embed=products`).then((response) => {
      
                setUser(response.data)
            })  
    }, [remove])
  
return (
    <>
    <StyledDashboard>
        <StyledDashboardProfile>
            <div className="containerDash"></div>
            <div className="ellipse"></div>
            <nav className="dash-nav">
            <div className="logo">
                <img
                src={darkicon}
                alt="imagem da logo em modo escuro da ecompany friendly"
                />
                <h1>eCOMPANY friendly</h1>
            </div>
            <div className="interative">
                <div className="search">
                <img src={addmaterial} alt="imagem para publicar novo material" />
                <input type="text" />
                <img className="lupa"
                    src={lupapesquisa}
                    alt="imagem da lupa de pesquisa para filtrar material"
                />
                <img src={logout} alt="imagem para fazer logout na conta" />
                </div>
            </div>
            </nav>
            <aside>
                <div className="asideInfoUser">
                    <Profile
                    src={user.image}
                    alt="imagem do perfil do usuário logado"
                    >
                    </Profile>
                    <h2>{user.name}</h2>
                </div>
                <div className="asideInfoUser">
                    <Profile
                    src={mail}
                    className="imgNoBorder"
                    alt="imagem do email do usuário logado"
                    ></Profile>
                    <h2>{user.email}</h2>
                </div>
                <div className="asideInfoUser">
                    <Profile
                    src={phone}
                    className="imgNoBorder"
                    alt="imagem do telefone do usuário logado"
                    ></Profile>
                    <h2>{user.tellphone}</h2>
                </div>
            </aside>
            <main className="Box-Materials">
                <ul className="box-cards">
                    <ProfileCardMaterial user={user} />
                </ul>
            </main>
        </StyledDashboardProfile>
    </StyledDashboard>
    </>
);
};

export default DashboardProfile;