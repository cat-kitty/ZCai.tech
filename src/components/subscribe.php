<?php
    $email = $_POST['email'];
    file_put_contents('emails.txt', $email . PHP_EOL , FILE_APPEND | LOCK_EX); ?>



