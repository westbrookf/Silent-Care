<?php

if(isset($_POST['submit'])){
 $name = $_POST['name'];
 $email = $_POST['email'];
 $message = $_POST['message'];

 $mailTo = "admin@silentcarehhc.com";
 $headers ="From: $mailFrom";
 $txt = "new email from".$name."\n\n".$message;

 mail($mailTo, $name, $txt, $headers);
}
