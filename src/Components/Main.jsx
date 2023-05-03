const Main = ({ aside, children }) => {
  console.log("🚀 -------------------------------------------🚀");
  console.log("🚀  props:", aside);
  console.log("🚀  children:", children);
  console.log("🚀 -------------------------------------------🚀");
  return (
    <main>
      {/* hola */}
      {aside && aside("soy un aside")}
      {children}
    </main>
  );
};

export default Main;
