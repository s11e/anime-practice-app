import Container from "react-bootstrap/Container";

import Header from "./components/Header";
import Router from "./Router";
function App() {

  return (
    <>
      <Header />
      <Container className="mt-5">
        <Router />
      </Container>
    </>
  );
}

export default App;
