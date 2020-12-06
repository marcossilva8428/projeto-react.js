<?php 

require_once('Conn.php');

$select = 'SELECT * FROM pedido
join produto
on produto.id_produto = pedido.id_produto
join cliente
on cliente.id_cliente = pedido.id_cliente';

$result = $con->query($select);
$pedidos = [];

while ($row = mysqli_fetch_assoc($result)) {
    $pedidos[] = $row;
}

echo json_encode($pedidos);
header("Access-Control-Allow-Origin:*");
header("Content-type:application/json");