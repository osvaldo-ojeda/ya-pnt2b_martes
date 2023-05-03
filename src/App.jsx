import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Aside from "./Components/Aside";
import Div from "./Components/Div";

let color = {
  backgroundColor: "tomato",
};

function App() {
  return (
    <>
      {/* <Header ></Header> */}
      <Header />
      {/* <img src="" alt="" /> */}
      <h1>Soy el h1</h1>
      {/* <h1 style={color}>Hola</h1>
      <h2 style={{ backgroundColor: "blue" }}>Hola</h2>
      <h3 className="titulo">Hola</h3> */}
      <Main/>
      <Main aside={Aside}>
        {/* <h1>Soy un children</h1>
        <Div /> */}
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, consequatur, doloribus molestias quos incidunt modi quae nisi labore sequi aspernatur tenetur ipsam, perspiciatis autem minima eveniet qui alias nulla? Illo!</p>
      </Main>
      <Footer />
    </>
  );
}

export default App;
