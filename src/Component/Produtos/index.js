import React, { useState, useEffect } from 'react';
import './Produtos.css';



const ListProd = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fectchData() {
            const url = await fetch("http://localhost/xampp/reactjs/nome-do-projeto/src/Back-end/ApiProdutos.php");
            setProducts(await url.json());
        }
        fectchData();
    }, [])

    let Destaque = (imagem) => {
        if(imagem.target.style.width === '120px')
        imagem.target.style = 'width:240px'
        else
        imagem.target.style = 'width:120px'
    }


    return (

        <>
        <section className="produtos-img">
            {
                products.map(prod => {
                    return (

                    <div key={prod.produto} className="box_produto bg-white" id={prod.categoria}>
                        <img src={prod.imagem} className="itens img-fluid" onClick={Destaque} />
                        <br />
                        <p className="descricao">{prod.descricao}</p>
                        <p className="descricao" style={{ textDecoration: "line-through" }}>R$ {prod.preco}</p>
                        <p className="preco text-danger">R$ {prod.precofinal}</p>
                        <hr />
                    </div>
                        
                    )
                }
            ) }</section>
        </>
    )
}

export default ListProd;