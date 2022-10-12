<?php


@include '../dbh.php';

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }
  

if(isset($_POST['submit'])){
    $name = mysqli_real_escape_string($connection, $_POST['name']);
    $surname = mysqli_real_escape_string($connection, $_POST['surname']);
    $email = mysqli_real_escape_string($connection, $_POST['email']);
    $pass = md5($_POST['password']);
    $cpass = md5($_POST['cpassword']);
    $email = test_input($_POST['email']);
    $phone = mysqli_real_escape_string($connection, $_POST['phone']);

    do{
        $user_id = md5(time().mt_rand(100,1000000));
        $select = "SELECT * FROM user WHERE ID_USER='$user_id' ";
    }while(mysqli_num_rows(mysqli_query($connection, $select))!=0);

        
    $select = "SELECT * FROM user WHERE EMAIL = '$email' /*&& PASSWORD = '$pass'*/ ";
    
    $result = mysqli_query($connection, $select);

    if(mysqli_num_rows($result)>0){

        $error[] = 'user already exist!';

    }else{
        if($pass != $cpass){
            $error[]= 'password not matched!';
            
        }else if(strlen($pass)<8){
                $error[]= 'password has less then 8 characters!';
        }
        else if(strlen($name)<3){
            $error[]= 'name is too small or it was not included';
        }
        else if(strlen($surname)<3){
            $error[]= 'surname is too small or it was not included';
        }else{
            $insert = "INSERT INTO USER(ID_USER,NAME,SURNAME,PASSWORD,EMAIL,ID_USER_ROLES,PHONE) VALUES('$user_id','$name','$surname','$pass','$email','1','$phone') ";
            mysqli_query($connection , $insert);
            header('location:login_form.php');
        }
    }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" href="../../style/register_form.css">
</head>

<body>
    <header>
            <div class="logo"><small> <a href="../../index.php">Tosca</a></small></div>
    </header>
    <div class="form_container">
        <form action="" method="post" class="register">
            <small>Register</small>
            <?php
            if(isset($error)){
                foreach($error as $error){
                    echo '<span class="error-msg">'.$error.'</span>';
                }
            }
            ?>
            <input type="text"name="name" required placeholder="First Name">
            <input type="text"name="surname" required placeholder="Last Name">
            <input type="text"name="phone" required placeholder="Phone number">
            <input type="email"name="email" required placeholder="Email">
            <input type="password"name="password" required placeholder="Password">
            <input type="password"name="cpassword" required placeholder="Confirm password">
            <!-- <select name="user_type" id="">
                <option value="user">user</option>
                <option value="admin">admin</option>
            </select> -->
            <input type="submit" name="submit" value = "Resgister" class = "form_btn">
            <small id="register">Already have an account? <a href="./login_form.php"> Login now </a> </small>
        </form>
    </div>
    <script link="../../JS/register_form.js"></script>
</body>
</html>