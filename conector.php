<?php

// variaveis do banco de dados no php
$usuario = "root";
$senha = "";
$dbName = "BDTDF";
$host = "localhost";

try {
  // metodo de conexao do banco de dados em php
  $pdo = new PDO("mysql:host=$host; dbName=$dbName, $usuario, $senha");

} catch (PDOException $err) {

   echo $err->getMessage();

}