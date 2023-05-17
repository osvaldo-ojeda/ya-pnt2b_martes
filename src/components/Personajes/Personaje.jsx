const Personaje = ({personaje}) => {
   console.log(personaje)
  return (
    <div>
        <h1>{personaje.name}</h1>
        <img src={personaje.image} alt={personaje.name} />
    </div>
  )
}
export default Personaje