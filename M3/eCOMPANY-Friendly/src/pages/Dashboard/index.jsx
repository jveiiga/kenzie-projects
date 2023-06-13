import { StyledDashboard, Profile, Elipse, Background } from "./styles";
import darkicon from "../../assets/Logo.svg";

import profile from "../../assets/blank-profile-picture-973460.svg";
import logout from "../../assets/Exit_1_.svg";
import addmaterial from "../../assets/Group.svg";
import lupapesquisa from "../../assets/Group(1).svg";
import elipse from "../../assets/Ellipse 1.svg";
import { StyledUserDataModal } from "../../components/UserDataModal/style";

import { UserDataModal } from "../../components/UserDataModal/UserDataModal";
import background from "../../assets/Rectangle 39.svg";

import ModalMaterial from "../../components/ModalMaterial";
import { useUserLoginContext } from "../../contexts/authContext";

import MaterialList from "../../components/ProductList";
import ProductList from "../../components/ProductList";
import { NewProduct } from "../../components/NewProduct";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/authContext";
import SearchInput from "../../components/SearchInput";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Toggle from "../../components/Toggle";
import { ThemeProvider } from "styled-components";
import { themes } from "../../styles/theme";
import Api from "../../services/Api";

const Dashboard = () => {
  //const { user } = useUserLoginContext();
  const { modalOpen, lista } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [user, setUser] = useState()

  const [theme, setTheme] = useState('dark');
  
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => {
        
    const id = localStorage.getItem("@eCOMPANY:user_id")

         Api.get(`users/${id}`).then((response) => {
  
            setUser(response.data)
        })  
}, [])

  return (
    <ThemeProvider theme={themes[theme]}>

    <>
      <StyledDashboard className="container">
        <ModalMaterial />
        <div className="ellipse">

        </div>
        <Background />

        <nav className="dash-nav">
          <div className="logo">
            <img
              src={darkicon}
              alt="imagem da logo em modo escuro da ecompany friendly"
            />
            <h1>eCOMPANY friendly</h1>
          <div className="toggle">
              <Toggle theme={theme} toggleTheme={toggleTheme} />
          </div>
          </div>


          <div className="interative">
            <div className="user-info">
              <div className="user">
                <Link to={"/profile"}>
                  <Profile
                    src={user?.image}
                    alt="imagem do perfil do usuário logado"
                  ></Profile>
                </Link>
                <Link to={"/profile"}>{user?.name}</Link>
              </div>
              <img src={logout} alt="imagem para fazer logout na conta" />
            </div>
            <div className="search">
              <SearchInput setFiltered={setFiltered} />

              <button type="button" className="newProduct" onClick={modalOpen}>
                <img
                  src={addmaterial}
                  alt="imagem para publicar novo material"
                />
              </button>
            </div>
          </div>
        </nav>

        <div className="modals">
          <UserDataModal />
        </div>

        <NewProduct />

        <main className="box-cards">
          <ProductList filtered={filtered} setProducts={setProducts} />
        </main>
      </StyledDashboard>
    </>
    </ThemeProvider>
  );
};

export default Dashboard;
