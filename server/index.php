<?php
include_once("utils/connection.php");
include_once("utils/function.php");



if (isset($_POST["type"])) {
    if ($_POST["type"] === "REGISTER_USER") {
        ;
        return response(200, "ok", registerUser($_POST["username"], $_POST["email"], $_POST["password"]));
    }
    if ($_POST["type"] === "SIGNIN_USER") {
        return response(200, "ok", loginUser($_POST["email"], $_POST["password"]));
    }
    if ($_POST["type"] === "CREATE_LISTING") {
        return response(200,"ok", CREATE_LISTING());
    }
    if ($_POST["type"] === "GET_LISTING") {
        return response(200,"ok", GET_LISTING());
    }
    if ($_POST["type"] === "SEARCH_LISTING") {
        return response(200,"ok", SEARCH_LISTING());
    }
    if ($_POST["type"] === "RESERVE_ROOM") {
        return response(200,"ok", RESERVE_ROOM());
    }
    if ($_POST["type"] === "MY_RESERVE_ROOM") {
        return response(200,"ok", MY_RESERVE_ROOM());
    }
    if ($_POST["type"] === "ADD_FAVOURITE") {
        return response(200,"ok", ADD_FAVOURITE());
    }
    if ($_POST["type"] === "MY_FAVOURITE") {
        return response(200,"ok", MY_FAVOURITE());
    }
    if ($_POST["type"] === "MY_UPLOAD") {
        $db->fileupload();
    }
}



// EXAMPLE

// READ
// $db->query("select * from user")->fetchAll(function($res){
//   print_r($res);
// });
// echo json_encode($db->query("select * from product")->fetchAll());

// INSERT 
// $insert = $db->query('INSERT INTO `checkout`( `user_id`, `total_bill``) VALUES (?,?)', $val1 , $val2);
// echo $insert->affectedRows() == 1 ? true : false;

// DELETE
// $insert = $db->query("DELETE FROM `cart` WHERE `user_id` =".$id);
// echo $insert->affectedRows() == 1 ? true : false

// AUTH
// echo json_encode(registerUser("Faiez Waseem","abc@gmail.com" , "777faiez777"));
// echo json_encode(loginUser("abc@gmail.com" , "777faiez777"));
