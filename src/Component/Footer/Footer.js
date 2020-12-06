import './Footer.css'
import Pagamentos from '../../Img/formas-pagamento.png'

export default function Footer() {
    return(
        <div className="container">  
            <footer className="divPagamentos">
                <h4 className="text-danger">
                    Formas de Pagamento!
                </h4>
                <img className="imgPagamentos" src={Pagamentos} alt="Formas de pagamento"/>
                <p>&copy; Recode Pro</p>
            </footer>
        </div>
    )
}