<?php
@include './dbh.php';
    
    $day = $_GET['day'];
    $month = $_GET['month'];
    $year = $_GET['year'];
    

    $query="SELECT * from events WHERE MONTH(DATA) = '$day' AND DAY(DATA) = '$month' AND YEAR(DATA) = '$year'";
    $exec = mysqli_query($connection, $query);
    if(mysqli_num_rows($exec)>0){
        $row= mysqli_fetch_all($exec, MYSQLI_ASSOC);
    }
    





// include_once "dbh.php";
// $query = "SELECT * FROM events";
// $result = mysqli_query($connection,$query);
// print_r("Text");
// print_r($result);
?>

