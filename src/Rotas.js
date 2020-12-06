import { Switch, Route} from 'react-router-dom';

import Home from './Pages/Home';
import Produtos from './Pages/Produtos';
import Lojas from './Pages/Lojas';
import Contatos from './Pages/Contatos';
import Pedidos from './Pages/Pedidos';


function Rotas() {
    return(
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/produtos" component={ Produtos } />
            <Route exact path="/lojas" component={ Lojas } />
            <Route exact path="/contatos" component={ Contatos } />
            <Route exact path="/pedidos" component={ Pedidos } />
        </Switch>
    );
}

export default Rotas;