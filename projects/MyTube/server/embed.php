<?php

$f = fopen('embed.html','w');
$body = @file_get_contents('php://input');
fwrite($f,$body);

?>
