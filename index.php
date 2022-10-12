<?php
    @include '../dbh.php';
    session_start();

    if(isset($_SESSION['LOGGED_OUT']) && $_SESSION['LOGGED_OUT']==true){
        unset($_SESSION['ID_USER']);
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="./style/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap" rel="stylesheet">
</head>
<body>
    
    <header>
        
        <a href="#" class="logo">Tosca</a>
        <ul> 
            <li><a href="#">Pagina principală</li>
            <li><a href="#">Calendar</a></li>

            <!-- <li class="listReg"><a href="./include/register_login/login_form.php">Register/Login</a></li> -->
           <?php  
                if(isset($_SESSION['ID_USER'])){
                echo '<a href="./include/user_page/user_page.php"><div class="profileImage">
                <svg width="5vw" height="5vw">
                    <defs>
                        <clipPath id="Photo">
                            <circle cx="2.5vw" cy="2.5vw" r="2.4vw" stroke="black" stroke-width="2.5" fill="rgba(100, 100, 100, 0)"/>
                        </clipPath>
                    </defs>
                    <image width="5vw" height="5vw" xlink:href="./Resources/Photo/user.jpg" clip-path="url(#Photo)" />
                </svg> </a>';
                }else{
                 echo '<li class="listReg"><a href="./include/register_login/login_form.php">Register/Login</a></li>';
                }
            ?>
                        <!-- <a href="./include/user_page/user_page.php"><div class="profileImage">
                        <svg width="5vw" height="5vw">
                            <defs>
                                <clipPath id="Photo">
                                    <circle cx="2.5vw" cy="2.5vw" r="2.4vw" stroke="black" stroke-width="2.5" fill="rgba(100, 100, 100, 0)"/>
                                </clipPath>
                            </defs>
                            <image width="5vw" height="5vw" xlink:href="./Resources/Photo/user.jpg" clip-path="url(#Photo)" />
                        </svg> </a>  -->
            
        </ul>
        
    </header>
    
    <section class="banner"></section>

    <div class="box">
        <div class="item BoxItem1">
            <div class="slider">

                    <div class="Prev Month">
                        
                    </div>

                    <div class="Curent Month">
                        <div class="Month_Img"> <img src="./Resources/BackGrounds/steaua.png" alt="Stea" width="30px"></div>
                        
                    </div>

                    <div class="Next Month">
                        
                    </div>

            </div> 
            
                <div class="SvgBanner" style="position:relative;">
                    <svg width="100vw" height="9vh">
                    <rect rx="30" ry="30" width="80vw" height="5.9vh"/>
                    Sorry, your browser does not support inline SVG.
                    </svg>
                </div>
            
            <div class = "container" id="container" ></div> 
            
        </div>
    </div>    

    <div class="date">

    </div>

    <script src="./JS/container.js"></script>
    <script src="./JS/header.js"></script>
    <script src="./JS/slider.js"></script>
    <script src="./JS/leftSlider.js"></script>  
    <script src="./JS/save.js"></script>

</body>
</html>