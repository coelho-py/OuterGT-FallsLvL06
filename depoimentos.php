<?php

require("conector.php");

if (isset($_POST)) {
    echo "<pre>";
    print_r($_POST);
    echo "</pre>";

    // variaveis do html dos quais sao escritas
    $nomeUsuario = $_POST['nomeUsuario'];
    $serieUsuario = $_POST['serieUsuario'];
    $classeUsuario = $_POST['classeUsuario'];
    $depoimento = $_POST['textoReview'];

    // querys para mandar o que o usuario escreveu par ao banco de dados

    $query = "INSERT INTO usuario(nomeUsuario, serieUsuario, classeUsuario) VALUES ('$nomeUsuario', '$serieUsuario', '$classeUsuario')";

    $query1 = "INSERT INTO depoimento(review) VALUES ('$depoimeto')";

    $stmt = $pdo->prepare($query);
    $stmt->execute();

    header("Location: index.php");
}