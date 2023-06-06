import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ContadorProvider from "./context/ContadorProvider";
const App = () => {
  return (
    <ContadorProvider>
      <Header />
      <Main />
      <Footer />
    </ContadorProvider>
  );
};
export default App;
