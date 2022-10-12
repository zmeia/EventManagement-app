<?php
@include './dbh.php';

$month = $_GET['month'];
$year = $_GET['year'];
$day = $_GET['day'];

$query="SELECT * from events WHERE MONTH(DATA) = '$month' AND YEAR(DATA) = '$year' AND DAY(DATA) = '$day'";
$exec = mysqli_query($connection, $query);
if(mysqli_num_rows($exec)>0){
    $rows= mysqli_fetch_all($exec, MYSQLI_ASSOC);
    foreach ($rows as $row) {
        echo ($row["NAME"]."~".$row["ADRESS"]."~".$row["AUTHOR"]."~".$row["CONTACTS"]."~".$row["ID_MEMBER_TEAM"]."~".$row["IMAGE_PATH"]."~".$row["INFO"]."~".$row["MARK"]."~".$row["REVIEW"]."~".$row["DATA"].'~'.$row["ID_EVENTS"]);
    }
}

?>