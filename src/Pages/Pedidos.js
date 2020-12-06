import ListPedidos from '../Component/Pedidos/index.js';

export default function Pedidos() {
    return (
        <div>
            <div className="d-flex justify-content-center">
                <form method="post" className="formContatos w-50">
                    <div className="form-group">
                        <label>Cliente</label>
                        <input className="form-control" name="nomeCliente"type="text" />
                    </div>
                    <div className="form-group">
                        <label>Cliente</label>
                        <input className="form-control" name="nomeCliente"type="text" />
                    </div><div className="form-group">
                        <label>Cliente</label>
                        <input className="form-control" name="nomeCliente"type="text" />
                    </div>
                    <div className="form-group">
                        <label>Cliente</label>
                        <input className="form-control" name="nomeCliente"type="text" />
                    </div>
                    <div className="form-group">
                        <label>Cliente</label>
                        <input className="form-control" name="nomeCliente"type="text" />
                    </div>
                    <div className="form-group">
                        <label>Cliente</label>
                        <input className="form-control" name="nomeCliente"type="text" />
                    </div>
                    <div className="form-group">
                        <label>Cliente</label>
                        <input className="form-control" name="nomeCliente"type="text" />
                    </div>
                    <div className="d-flex justify-content-center pb-3">
                    <input className="enviar bg-light mt-1 btn-lg" type="submit" />
                    </div>
                </form>
            </div>   

        <section className=" container d-flex justify-content-between">
                <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                    <ListPedidos />
                </div> 
        </section>

        </div>
    )       
}