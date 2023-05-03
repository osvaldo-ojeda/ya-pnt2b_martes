import Title from "./Title";
import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <Title nombre="Titulo del Header" color="black" />
      <Nav link1={"Home"} link2={"Cart"} link3={"Login"} />
    </header>
  );
};
// Nav({ link1: "Home", link2: "Cart", link3: "Login" });
// title("Titulo del Header")
export default Header;
