<?php

$conn_string= "host= localhost port=3000 dbname=test user=postgres password=$9DENbro84$";
$dbconn= pg_connect($conn_string);

if(!$dbconn){
 die('Could not Connect pql:' .pg_error());
}
?>