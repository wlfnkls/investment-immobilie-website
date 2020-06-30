<?php
$logo;
foreach (glob("Logo.*") as $filename) {
  $logo = $filename;
}
$path_parts = pathinfo($logo);
$path = '/'.$_SERVER['HTTP_HOST'].'/'.$path_parts['basename'];

echo $path;

echo "<br />";

echo $_SERVER['SERVER_NAME'];
echo "<br />";

echo $_SERVER['HTTP_HOST'];