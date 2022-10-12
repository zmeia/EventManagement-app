<?php
@include './dbh.php';
session_start();

if(!isset($_SESSION['ID_USER'])){
    echo "<alert> Loggin before saveing events </alert>";
}else{
    $idUser = $_SESSION['ID_USER'];
    $idEvent = $_GET['id'];


    $query="SELECT * FROM saved_events WHERE ID_USER = '$idUser' and ID_EVENTS='$idEvent'";
    $exec = mysqli_query($connection, $query);

    if(mysqli_num_rows($exec)==1){
        echo "Aleardy savead";
    }else{
        $query="INSERT INTO saved_events(ID_USER,ID_EVENTS) VALUES('$idUser','$idEvent')";
        $exec = mysqli_query($connection, $query);
        echo "Updated";
    }   
}
   



?>