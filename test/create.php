<?php

$submit = $_POST["submit"];
if (($submit === "OUI" || $submit === "NON") && $_POST["id"] != NULL) {
   $account = array();

   if (file_exists("sources/") == false)
      mkdir("sources/");

   if ($submit === "OUI")
      $key = ",1"
   else
      $key = ",0"

   $line = $_POST["id"].$key.'\n';

   echo "OK\n";
}
else
   echo "ERROR\n";
?>
