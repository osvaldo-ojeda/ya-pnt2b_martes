import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      {/* llevar el router de main.jsx a un nuevo archivo */}
      {/* hacer nav con home, personajes, login, sing */}
      {/* hacer boton en PersonajeDetail que redirija a /personajes */}

      <Header />
      <Main />
      <Footer />
    </>
  );
};
export default App;
