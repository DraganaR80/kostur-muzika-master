<?php

class Muzicar{
    public $muzicarID;
    public $ime;
    public $prezime;
    public $instrumentID;

    public function __construct($muzicarID=null, $ime=null, $prezime=null, $instrumentID=null)
    {
        $this->muzicarID = $muzicarID;
        $this->ime = $ime;
        $this->prezime = $prezime;
        $this->instrumentID = $instrumentID;
    }


public static function add($ime, $prezime,$instrument_id, mysqli $conn){
$q= "INSERT INTO muzicari (ime, prezime,instrument_id)
VALUES('$ime','$prezime',$instrument_id)";

return $conn->query($q);

}
public static function getAll( mysqli $conn){
    $q="SELECT * FROM muzicari";
    
    return $conn->query($q);
    
    }
    

}

?>