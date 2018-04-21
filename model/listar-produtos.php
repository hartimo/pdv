<?php
    
    $user = "root";
    $senha = "elaborata";
    
    $con = new PDO('mysql:dbname=pdv;host=localhost;charset=utf8', $user, $senha);

    $sql = "SELECT * FROM produtos";
    $res = $con->query($sql);
    
    $produtos = $res->fetchAll(PDO::FETCH_ASSOC);
    //var_dump($produtos);

    echo json_encode($produtos);
    
//http://php.net/manual/en/pdo.construct.php
//public PDO::__construct ( string $dsn [, string $username [, string $passwd [, array $options ]]] )

//http://php.net/manual/en/ref.pdo-mysql.php
//MySQL Functions (PDO_MYSQL)

?>
