
import './Produtos.css';

export default function Categorias () {
    function ExibirCategoria(categoria){
        let elementos = document.getElementsByClassName('box_produto');
        for(var i=0; i<elementos.length; i++){
            if(categoria === elementos[i].id)
                elementos[i].style = 'display:inline-block';
            else
                elementos[i].style = 'display:none';
        }
    }
    
    let ExibirTodos = () => {
        let elementos = document.getElementsByClassName('box_produto');
        for(var i=0; i<elementos.length;i++){
            elementos[i].style = 'display:inline-block';
        }
    }
    return (
        <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 col-12 mr-auto pt-3">
            <section className="categorias">
                <h3 className="cat pb-3">Categorias</h3>
                <ul className="list-group">
                    <li onClick={ExibirTodos} className="list-group-item">Todos (12)</li>
                    <li onClick={() => ExibirCategoria('geladeira')} className="list-group-item box">Geladeiras (3)</li>
                    <li onClick={() => ExibirCategoria('fogao')} className="list-group-item box">Fogões (2)</li>
                    <li onClick={() => ExibirCategoria('microondas')} className="list-group-item box">Microondas (3)</li>
                    <li onClick={() => ExibirCategoria('lavaroupa')} className="list-group-item box">Lavadora de roupas (2)</li>
                    <li onClick={() => ExibirCategoria('lavalouca')} className="list-group-item box">Lava-louças (2)</li>
                </ul>
            </section>
        </div>
       
    )
}