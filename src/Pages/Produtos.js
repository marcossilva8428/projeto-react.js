import Produtos from '../Component/Produtos/index.js';
import { Row } from 'react-bootstrap';
import Categorias from '../Component/Produtos/categorias.js';

export default function ViewProdutos() {

    return (
        <Row>
            <Categorias />
            <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                <Produtos />
            </div>
        </Row>
    );
}