<?php
    @include '../dbh.php';
    session_start();
    
    function loggedOut(){
        unset($_SESSION['ID_USER']);
        header('location:../../index.php');
    }

    if (isset($_GET['hello'])) {
            loggedOut();
    }
    
    function validating($phone){
        if(preg_match('/^[0-9]{9}+$/', $phone)) {
        return true;
        } else {
        return false;
        }
    }

    //if(isset($_POST('avatar'))) echo "<script>alert('text')</script>";

    if(isset($_SESSION['ID_USER'])){   
        $id = $_SESSION['ID_USER'];
        $select = "SELECT * FROM user WHERE ID_USER = '$id'";
        $result = mysqli_fetch_array(mysqli_query($connection,$select));
        if(isset($_POST['submit'])){
            if(isset($_POST['name'])){
                $name = mysqli_real_escape_string($connection, $_POST['name']);
                $surname = mysqli_real_escape_string($connection, $_POST['surname']);

                $update = "UPDATE USER SET NAME = '$name', SURNAME = '$surname' WHERE ID_USER = '$id'";
                mysqli_query($connection, $update);
                echo "<meta http-equiv='refresh' content='0'>"; 
            }else if(isset($_POST['email'])){
                $email = mysqli_real_escape_string($connection, $_POST['email']);
                $update = "UPDATE USER SET EMAIL = '$email' WHERE ID_USER = '$id'";
                mysqli_query($connection, $update);  
                echo "<meta http-equiv='refresh' content='0'>";   
            }else if(isset($_POST['phone'])){
                $phone = mysqli_real_escape_string($connection, $_POST['phone']);
                if(validating($phone)){
                    $update = "UPDATE USER SET PHONE = '$phone' WHERE ID_USER = '$id'";
                    mysqli_query($connection, $update);  
                    echo "<meta http-equiv='refresh' content='0'>";
                }else{
                    echo "<script> alert('Invalid value for a number(must have 10 digit)') </script>"; 
                }
            }
            
            
        }
        
    }else{
        header('location:../../index.php');
    }
    
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../../style/user_page.css">
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
                    <h1><?php echo $result['NAME'].' '.$result['SURNAME'] ?> </h3>
                    <a href="" id="profil">Profil</a>
                    <a href="../../index.php">Caldendar</a>
                    <a href="./user_page_save.php" id="save">Salvări</a>
                </div>
                
                <!-- <svg width="350" height="350" >
                        <defs>
                            <clipPath id="Svg1">
                                <rect x="50" y="20" width="250" height="250">
                            </clipPath>
                        </defs>

                        <image 
                        width="35vw" 
                        height="43.3vh"
                        href="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                        clip-path="url(#Svg1)"/>
                </svg> -->
                
        </div>
        <div class=edit_profile>

                    <svg width="50vw" height="10vh" class="line">
                    <g>
                        <rect x="0" y="0" rx="40" ry="40" width="100vw" height="10vh" width="100" height="100" fill="#efc59f" opacity="0.5"/>
                        <text x="4vw" y="6.4vh" font-family="Mango" font-size="55" font-weight= "bold" fill="black" class="svg_text" >Profilul tău</text>
                        <text x="80%" y="6.4vh" font-family="Mango" font-size="55" font-weight= "bold" fill="black" class="svg_log_out" >
                            <a href="user_page.php?hello=true">Log out</a>
                        </text>
                    </g>
                    </svg>
                    <h1>Poza de profil</h1>
                    <div class="edit_photo">
                        <svg width="6.6vw" height="6.6vw">
                            <defs>
                                <clipPath id="Photo">
                                    <circle cx="3.3vw" cy="3.3vw" r="3.2vw" stroke="black" stroke-width="2.5" fill="rgba(100, 100, 100, 0)"/>
                                </clipPath>
                            </defs>
                            <image width="6.6vw" height="6.6vw" xlink:href="../../Resources/Photo/user.jpg" clip-path="url(#Photo)" />
                        </svg>  
                        <div class="buttons">
                            <div class="button photoButton"> 
                                <form action="" method ="post">
                                    <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg"  class = "changePhoto"> 
                                </form>
                                <img src="../../Resources/Photo/upload.png" alt="" class="icons">
                            </div>
                            <!-- <button class="button changePhoto">Schmibă poza</button> -->
                            <button class="button deletePhoto">Șterge poza</button>
                        </div>
                        
                    </div>
                    
                    <hr class="divideLine">
                    <div class="field"  id="name">
                            <div class="actual" id="name">
                                <h1>Nume</h1>
                                <small class = "fieldValue" id="name"><?php echo $result['NAME'].' '.$result['SURNAME'] ?></small>
                            </div>
                            <div class="edit" id="name">
                                <button class="button name">Edit </button>
                            </div>
                    </div>

                    <hr class="divideLine">
                    <div class="field"  id="email">
                            <div class="actual" id="email">
                                <h1 >Email</h1>
                                <small class = "fieldValue" id="email"><?php echo $result['EMAIL']?></small>
                            </div>
                            <div class="edit" id="email" >
                                <button class="button email">Edit</button>
                            </div>
                    </div>

                    <hr class="divideLine">
                    <div class="field"  id="phone">
                            <div class="actual" id="phone">
                                <h1 >Număr de telefon</h1>
                                <small class = "fieldValue" id="phone"><?php echo (!isset($result['PHONE'])) ? "Nu ați indrodus un număr de telefon": $result['PHONE'] ?></small>
                            </div>
                            <div class="edit" id="phone">
                                <button class="button phone">Edit</button>
                            </div>
                    </div>
                    
        </div>
    </div>
    <script src ='../../JS/edit_button.js'></script>
    
</body>
</html>