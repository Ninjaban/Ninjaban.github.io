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

   file_put_contents("sources/retour.csv", $line, FILE_APPEND);
   echo "OK\n";
}
else
   echo "ERROR\n";
?>
