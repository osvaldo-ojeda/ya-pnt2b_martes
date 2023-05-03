import Anchor from "./Anchor";

const Nav = ({ link1, link2, link3 }) => {
  //   const nombre = "Batman";
  //   const obj = {
  //     nombre,
  //   };
  //   --------------
  //   const link1 = props.link1;
  //   const link2 = props.link2;
  //   const link3 = props.link3;
  //   --------------

  //   const {link1} = props;
  //   const {link2} = props;
  //   const {link3} = props;
  //   --------------
//   const { link1, link2, link3 } = props;
  //   --------------
  
  //   function name(params) {
  //     return params;
  //   }
  //   const name = (params) => {
  //     return params;
  //   };
  // name("hola")
  // name()
  return (
    <nav>
      {/* <a href="http://">{props.link1}</a>
      <a href="http://">{props.link2}</a>
      <a href="http://">{props.link3}</a> */}

      {/* ------------------- */}
      {/* <a href="http://">{link1}</a>
      <a href="http://">{link2}</a>
      <a href="http://">{link3}</a> */}
      {/* ------------------- */}
      <Anchor name={link1}/>
      <Anchor name={link2}/>
      <Anchor name={link3}/>
    </nav>
  );
};

export default Nav;
