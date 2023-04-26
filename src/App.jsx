import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

let color = {
  backgroundColor: "tomato",
};

function App() {
  return (
    <>
      <Header />
      {/* <h1 style={color}>Hola</h1>
      <h2 style={{ backgroundColor: "blue" }}>Hola</h2>
      <h3 className="titulo">Hola</h3> */}
      <Main />
      <Footer />
    </>
  );
}

export default App;
