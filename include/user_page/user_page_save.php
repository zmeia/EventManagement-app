<?php
    @include '../dbh.php';
    session_start();
    if(isset($_SESSION['ID_USER'])){  
    $id = $_SESSION['ID_USER'];
    $select = "SELECT * FROM user WHERE ID_USER = '$id'";
    $result = mysqli_fetch_array(mysqli_query($connection,$select));    
    $userName = $result['NAME'];
    $userSurname = $result['SURNAME'];
    }
    
    
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../../style/user_page_save.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
<body>
    <header>
        <div class="logo"><p> <a href="../../index.php">Tosca</a></p></div>
    </header>
    <div class=container>
        <div class=profile>
                <svg width="40vw" height="40vh" class="photo">
                            <defs>
                                <clipPath id="mainPhoto">
                                    <circle cx="12vw" cy="8.5vw" r="8vw" stroke="black" stroke-width="2.5" fill="rgba(100, 100, 100, 0)"/>
                                </clipPath>
                            </defs>
                    <rect x="4vw" y="0.5vw" width="16vw" height="16vw"
                    style="fill:rgba(100, 100, 100, 0);stroke:black;stroke-width:2.5;opacity:1" />
                    <image width="20vw" height="20vw" xlink:href="../../Resources/Photo/user.jpg" clip-path="url(#mainPhoto)" />

                </svg>
                <div class="manage_profile">
                    <h1><?php echo $userName.' '.$userSurname ?> </h3>
                    <a href="./user_page.php" id="profil">Profil</a>
                    <a href="../../index.php">Caldendar</a>
                    <a href="" id="save">Salvări</a>
                </div>
                 
        </div>
        <div class = "saves">
            <?php $i=1;
                if(isset($_SESSION['ID_USER'])){   
                $id = $_SESSION['ID_USER'];
                $select = "SELECT * FROM saved_events se INNER JOIN events e on e.ID_EVENTS = se.ID_EVENTS WHERE ID_USER = '$id'";
                $result = mysqli_query($connection,$select);  
                if(mysqli_num_rows($result)>0){
                    $rows= mysqli_fetch_all($result, MYSQLI_ASSOC);
                    foreach ($rows as $row) { 
                        echo (" <small>".$i.". <b><div class='button'>".$row["NAME"]."</div></b> de ".$row["AUTHOR"]." pe data de <b>".$row["DATA"]."</b></small> <br>");
                        $i++;
                    }   
                }
        
            }else{
                 $error[] = 'You are not logged in, please try again';
            }
            ?>
        </div>
    </div>
    
    <script src ='../../JS/saveUserPage.js'></script>
    
</body>
</html>