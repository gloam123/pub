<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta name="renderer" content="ie-comp" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>UserAgent</title>
</head>

<body>
<br />
<br />
<?php
echo "<br/><br/>UserAgent:". $_SERVER['HTTP_USER_AGENT'] . "<br/><br/><br/>";
echo "Accept:" . $_SERVER['HTTP_ACCEPT'];
?>
<br />
<br />
</body>
</html>