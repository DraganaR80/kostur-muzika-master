<?php

require "../dbBroker.php";
require "../model/instrument.php";

if(isset($_POST['instrument'])){

$status= Instrument ::add($_POST['instrument'], $conn);
If($status){
    echo 'Success';
}else{


    echo $status;
    echo "Failed";
}

}








?>