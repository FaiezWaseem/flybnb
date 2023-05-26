<?php

include_once("connection.php");


function registerUser($username, $email, $password)
{
  $q1 = test_input($username);
  $q2 = test_input($email);
  $q3 = getHash(test_input($password));
  global $db;
  $insert = $db->query("INSERT INTO `users`( `name`, `email`, `password`) VALUES (?,?,?)", $q1, $q2, $q3);
  $insert = $insert->affectedRows();
  if ($insert) {
    return [
      'status' => true,
      'id' => $db->lastInsertID(),
      'message' => 'User Registered Successfully'
    ];
  } else {
    return [
      'status' => false,
      'message' => 'User Registration Failed',
      'id' => null
    ];
  }

}
function loginUser($email, $password)
{
  $q2 = test_input($email);
  $q3 = test_input($password);
  global $db;
  $id = null;
  $result = $db->query("SELECT * FROM `users` WHERE `email` = ? ", $q2)->fetchAll();
  foreach ($result as $row) {
    if (matchHash($q3, $row["password"])) {
      $id = $row;
    }
  }
  $db->close();
  unset($id["password"]);
  return $id;
}

function CREATE_LISTING()
{
  $q1 = test_input($_POST['title']);
  $q2 = test_input($_POST['user_id']);
  $q3 = test_input($_POST['home_type']);
  $q4 = test_input($_POST['room_type']);
  $q5 = test_input($_POST['total_guest']);
  $q6 = test_input($_POST['total_rooms']);
  $q7 = test_input($_POST['total_bedrooms']);
  $q8 = test_input($_POST['total_bathrooms']);
  $q9 = test_input($_POST['summary']);
  $q10 = test_input($_POST['address']);
  $q11 = test_input($_POST['has_tv']) === true ? 1 : 0;
  $q12 = test_input($_POST['has_kitchen']) === true ? 1 : 0;
  $q13 = test_input($_POST['has_air_cond']) === true ? 1 : 0;
  $q14 = test_input($_POST['price']);
  $q15 = test_input($_POST['longitude']);
  $q16 = test_input($_POST['latitude']);
  $q17 = test_input($_POST['city']);
  $q18 = test_input($_POST['country']);
  $q19 = $_POST['map_url'];
  global $db;


  $query = "INSERT INTO `room`( `title`, `user_id`, `home_type`, `room_type`," .
    " `total_guest`, `total_rooms`, `total_bedrooms`,`total_bathrooms`,`summary`," .
    "`address`,`has_tv`,`has_kitchen`,`has_air_cond`,`price`,`longitude`,`latitude`,`city`,`country`, 
     `map_url` , `is_booked`)" .
    " VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

  $insert = $db->query(
    $query,
    $q1,
    $q2,
    $q3,
    $q4,
    $q5,
    $q6,
    $q7,
    $q8,
    $q9,
    $q10,
    $q11,
    $q12,
    $q13,
    $q14,
    $q15,
    $q16,
    $q17,
    $q18,
    $q19,
    false
  );
  $insert = $insert->affectedRows();
  if ($insert) {
    return [
      'status' => true,
      'id' => $db->lastInsertID(),
      'message' => 'Listing Created Success',
    ];
  } else {
    return [
      'status' => false,
      'message' => 'Listing Creation Failed Failed',
      'id' => null,
    ];
  }
}

function GET_LISTING()
{
  global $db;
  if (isset($_POST["id"])) {
    $result = $db->query("SELECT  room.* , users.name as 'user_name', users.profile_image  , users.description as 'user_description'
     FROM room
     INNER JOIN users ON room.user_id=users.id
     where room.user_id = ?
     LIMIT 20
     ;", $_POST["id"])->fetchAll();
    $i = 0;
    foreach ($result as $key => $value) {
      $res = $value;
      $images = $db->query("SELECT  * from media where room_id = ? ", $res["room_id"])->fetchAll();
      $result[$i]["images"] = $images;
      $i++;
    }
    return $result;
  } else {
    $result = $db->query("SELECT  room.* , users.name as 'user_name', users.profile_image  , users.description as 'user_description'
    FROM room
    INNER JOIN users ON room.user_id=users.id
    ORDER BY room.created_at DESC
    LIMIT 20;
    ")->fetchAll();
    $i = 0;
    foreach ($result as $key => $value) {
      $res = $value;
      $images = $db->query("SELECT  * from media where room_id = ? ", $res["room_id"])->fetchAll();
      $result[$i]["images"] = $images;
      $i++;
    }
    return $result;
  }
}

function SEARCH_LISTING()
{
  global $db;
  if (isset($_POST["query"])) {
    $qry = test_input($_POST["query"]);
    $result = $db->query("SELECT  room.* , users.name as 'user_name',
     users.profile_image  , users.description as 'user_description'
     FROM room
     INNER JOIN users ON room.user_id=users.id
     where room.title LIKE '%$qry%' 
     OR room.summary LIKE '%$qry%' 
     OR room.city LIKE '%$qry%' 
     OR room.country LIKE '%$qry%'
     OR room.address LIKE '%$qry%'
     OR room.home_type LIKE '%$qry%'
     OR room.room_type LIKE '%$qry%'
     LIMIT 20
      ;")->fetchAll();
    $i = 0;
    foreach ($result as $key => $value) {
      $res = $value;
      $images = $db->query("SELECT  * from media where room_id = ? ", $res["room_id"])->fetchAll();
      $result[$i]["images"] = $images;
      $i++;
    }
    return $result;
  } else {
    return [];
  }
}
function ADD_FAVOURITE()
{
  global $db;
  if (isset($_POST["room_id"]) && isset($_POST["user_id"])) {
    $insert = $db->query('INSERT INTO `favorite`( `room_id` ,`user_id`)
     VALUES (?,?)', $_POST["room_id"], $_POST["user_id"]);
    if ($insert) {
      return [
        'status' => true,
        'id' => $db->lastInsertID(),
        'message' => 'ADD_FAVOURITE Created Success'
      ];
    } else {
      return [
        'status' => false,
        'message' => 'ADD_FAVOURITE Creation Failed',
        'id' => null
      ];
    }
  }
}
function RESERVE_ROOM()
{
  global $db;
  if (isset($_POST["room_id"]) && isset($_POST["user_id"]) && isset($_POST["room_creator_id"])) {
    $insert = $db->query('INSERT INTO `reserved`( `room_id` ,`user_id` , `room_creator_id`)
     VALUES (?,?,?)', $_POST["room_id"], $_POST["user_id"], $_POST["room_creator_id"]);
    if ($insert) {
      return [
        'status' => true,
        'id' => $db->lastInsertID(),
        'message' => 'RESERVE_ROOM SUCCESS'
      ];
    } else {
      return [
        'status' => false,
        'message' => 'RESERVE_ROOM   Failed',
        'id' => null
      ];
    }
  }
}
function MY_FAVOURITE()
{
  global $db;
  if (isset($_POST["user_id"])) {
    $result = $db->query("
    SELECT  room.*  , users.name as 'user_name', users.profile_image  ,
    users.description as 'user_description'
    FROM room
    INNER JOIN users ON room.user_id=users.id
    where  room.room_id in ( SELECT  room_id
    FROM `favorite` where user_id = ?)
    LIMIT 10
    ;", $_POST["user_id"])
      ->fetchAll();
    $i = 0;
    foreach ($result as $key => $value) {
      $res = $value;
      $images = $db->query("SELECT  * from media where room_id = ? ", $res["room_id"])->fetchAll();
      $result[$i]["images"] = $images;
      $i++;
    }
    return $result;
  } else {
    return [];
  }
}
function MY_RESERVE_ROOM()
{
  global $db;
  if (isset($_POST["user_id"])) {
    return $db->query("
    SELECT  room.*  , users.name as 'user_name', users.profile_image  ,
    users.description as 'user_description'
    FROM room
    INNER JOIN users ON room.user_id=users.id
    where  room.room_id in ( SELECT  room_id
    FROM `reserved` where user_id = ?)
    ;", $_POST["user_id"])
      ->fetchAll();
  } else {
    return [];
  }
}

function getHash($pwd)
{
  return password_hash($pwd, PASSWORD_DEFAULT);
}
function matchHash($pwd, $hashed_pass)
{
  return password_verify($pwd, $hashed_pass) ? true : false;
}

function test_input($data)
{
  $data = ltrim($data);
  $date = rtrim($data);
  return $data;
}
function response($status, $status_message, $data)
{
  header("HTTP/1.1 " . $status);
  $response['status'] = $status;
  $response['status_message'] = $status_message;
  $response['data'] = $data;
  $json_response = json_encode($response);
  echo $json_response;
}
?>