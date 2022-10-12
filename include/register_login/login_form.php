<?php

@include '../dbh.php';
session_start();

if(isset($_POST['submit'])){
    $error[] = ' ';
    $email = mysqli_real_escape_string($connection, $_POST['email']);
    $pass = md5($_POST['password']);

    
    $select = "SELECT * FROM user WHERE EMAIL = '$email' && PASSWORD = '$pass' ";
    
    $result = mysqli_query($connection, $select);

    if(mysqli_num_rows($result)>0){

        $row = mysqli_fetch_array($result);
        if($row['ID_USER_ROLES'] == '2'){
            
            $_SESSION['ID_USER'] = $row['ID_USER'];
            $_SESSION['LOGGED_OUT']=false;
            header('location:../user_page/admin_page.php');

        }elseif($row['ID_USER_ROLES'] == '1'){

            $_SESSION['ID_USER']=$row['ID_USER'];
            $_SESSION['LOGGED_OUT']=false;
            header('location:../user_page/user_page.php');
        }
    }else{
        //$_SESSION['erorr'] =  'Incorrrect email or password! Please try again.'
        $error[] = 'Incorrrect email or password! Try again.';
        
    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../../style/login_form.css">
</head>
<body>
    <header>
            <div class="logo"><small> <a href="../../index.php">Tosca</a></small></div>
    </header>
    <div class="form_container">
        <form action="" method="post" class="login">
            <small>Login</small>
            <small>Bun venit în lumea teatrului!</small>
            
            <input type="email" name="email" required placeholder="Email" class="form email">

            <input type="password" name="password" required placeholder="Password">
                <?php
                if(isset($error)){
                    foreach($error as $error){
                        echo '<span class="error-msg">'.$error.'</span>';
                    }
                }
                ?>
            <input type="submit" name="submit" value = "Login" class="form-btn">

            <small id="register">Not a memeber yet? <a href="register_form.php">Register!</a></small>
        </form>
    </div>
</body>
</html>