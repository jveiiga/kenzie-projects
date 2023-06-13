import AuthProvider from "./contexts/authContext";
import Rotas from "./routes";
import GlobalStyles from "./styles/global";

const App = () => {

  return (
    <>
      <GlobalStyles />
      <AuthProvider>
        <Rotas />
      </AuthProvider>
    </>
  );
};

export default App;
