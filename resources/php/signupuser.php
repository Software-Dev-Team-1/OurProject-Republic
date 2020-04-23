<!DOCTYPE HTML>
<html>
<head>
<title>User Signup</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<link rel="stylesheet" href="../resources/css/main.css" />
</head>

<body>
<?php

extract($_POST);
include("database.php");
$rs=pg_query($dbconn,"select * from user where email='$email'");
if (pg_num_rows($rs)>0)
{
	echo "<br><br><br><div class=head1>User Already Exists</div>";
	exit;
}
$query="insert into username(email,pass) values('$email','$pass')";
$rs= pg_query($dbconn,$query)or die("Could Not Perform the Query");
echo "<br><br><br><div class=head1>Your Login ID  $email Created Sucessfully</div>";
echo "<br><div class=head1><a href=index.php>Login</a></div>";


?>
</body>
</html>