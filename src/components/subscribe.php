
<?php
if (isset($_POST['emailbutton'])) {
    file_put_contents('emails.txt',
        'E-mail: '.$_POST['email']
    );
}?>