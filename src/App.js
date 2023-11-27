import {Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./Components/Homepage";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <Container className='text-light'>
        <Row className="justify-content-md-center p-1">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />
      </Routes>
      </BrowserRouter>
        </Row>
    </Container>
  );
}

export default App;
