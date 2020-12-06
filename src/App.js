import Menu from './Component/Menu';
import Rotas from './Rotas';
import './Estilos/Estilo.css'
import Footer from './Component/Footer/Footer.js';

import { BrowserRouter } from 'react-router-dom';

import { Container } from 'react-bootstrap';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
        <Menu />
        </header>
        <main>
          <Container fluid>
            <Rotas />
          </Container>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
	