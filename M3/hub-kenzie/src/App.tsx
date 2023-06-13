import AuthProvider from "./contexts/AuthContext";
import  Routes  from "./routes/Routes"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { StyledApp as AppMain} from "./styles/StyledApp"

const App = () => {
  return (
    <>
      <AppMain>
        <ToastContainer autoClose={2000}/>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </AppMain>
    </>
  );
}

export default App;
