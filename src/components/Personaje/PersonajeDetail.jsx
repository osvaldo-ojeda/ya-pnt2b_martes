import styled from "styled-components";

const PersonajeDetail = ({ personaje }) => {
  const DivContainer = styled.div`
    width: 350px;
    background-color: blue;
    margin: 0 auto;
  `;
  const H1 = styled.h1`
    color: green;
  `;

  const Img = styled.img`
    width: 300px;
    display:block;
    margin:0 auto;
  `;
  return (
    <DivContainer>
      <H1>{personaje.name}</H1>
      <h2>Status:{personaje.status}</h2>
      <h3>Location: {personaje?.location?.name}</h3>
      <Img src={personaje.image} alt={personaje.name} />
    </DivContainer>
  );
};
export default PersonajeDetail;
