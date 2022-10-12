<?php
@include './dbh.php';

$month = $_GET['month'];
$year = $_GET['year'];
$day = $_GET['day'];

$query="SELECT * from events WHERE MONTH(DATA) = '$month' AND YEAR(DATA) = '$year' ";
$exec = mysqli_query($connection, $query);
if(mysqli_num_rows($exec)>0){
    $rows= mysqli_fetch_all($exec, MYSQLI_ASSOC);
    foreach ($rows as $row) {
        echo ($row["DATA"]." ");
    }
}
?>