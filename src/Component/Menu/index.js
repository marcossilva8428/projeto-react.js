import Logo2 from '../../Img/logo.PNG';
import { Link, withRouter } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

 function baseMenu(props) {
     const { location } = props
    return (
        
         <div div className = "container mt-1" >      
        <Navbar className="navbar-dark" bg="danger" expand="md">
            <Nav.Item >
               <Nav.Link as= {Link} href="/" to="/"><img className="navbar-brand" src={Logo2} /></Nav.Link>
            </Nav.Item >            
            <Navbar.Toggle aria-controls="itens-Menu" />
            <Navbar.Collapse id="itens-Menu">
                <Nav activeKey={location.pathname} className="ml-auto mr-3">

                    <Nav.Item className="ml-4 mr-3" >
                        <Nav.Link as= {Link}  href="/produtos" to="/produtos">Produtos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="ml-4 mr-3" >
                        <Nav.Link as= {Link}  href="/Lojas" to="/Lojas">Lojas</Nav.Link>
                    </Nav.Item >
                    <Nav.Item className="ml-4 mr-3" >
                        <Nav.Link as= {Link}  href="/Contatos" to="/Contatos">Contatos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="ml-4 mr-3" >
                        <Nav.Link as= {Link}  href="/Pedidos" to="/Pedidos">Pedidos</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>

    )
}

const Menu = withRouter(baseMenu);

export default Menu