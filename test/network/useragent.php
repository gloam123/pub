<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta name="renderer" content="ie-comp" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>UserAgent</title>
<script>
function onLoad() {
	document.getElementById('idJsUa').innerHTML = navigator.userAgent;
}
</script>

</head>

<body onload="onLoad()">
Javascript UserAgent:
<div id="idJsUa"></div>

<br />
<br />
<br />

<?php
echo "Server UserAgent:<br/>". $_SERVER['HTTP_USER_AGENT'] . "<br/>";

echo "<br/><br/><br/> Accept:" . $_SERVER['HTTP_ACCEPT'];
?>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" renderer="webkit" />
<br />
<br />
<br />
step="0.01"
<form action="#">
请输入数字2: <input type="number" step="0.01" />
<input type="submit"  />
<br />
<br />
</form>
</body>
</html>