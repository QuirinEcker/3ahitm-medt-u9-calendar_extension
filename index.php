<?php
$post = $_POST["data"];
$myfile = fopen("./data.csv", "a") or die("Unable to open file!");

fwrite($myfile, "\n" . $post);

fclose($myfile);