import React from "react";
import Title from "./Title";
import Nav from "./Nav";

const Footer = () => {
  return (
    <footer>
      <Title nombre="Titulo del Footer" />
      <Nav link1={"Linkedin"} link2={"Instagram"} link3={"Github"} />
    </footer>
  );
};

export default Footer;
