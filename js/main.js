
//dodavanje instrumenta
$("#dodajInstrument").submit(function(event){

event.preventDefault();
console.log("Pokrenuto dodavanja instrumenta");

//citanje podataka
const $form=$(this);
const serijalizacija= $form.serialize();
console.log(serijalizacija);
//slanje zahteva
request =$.ajax({

    url:"controller/dodajInstrument.php",
    type:"post",
    data:serijalizacija,
});
request.done(function(response,textStatus,jqXHR){

    if(response=== "Success"){

        alert("instrument je dodat");
        location.reload(true);
    }else{
        console.log("instrument nije odadat"+ response);
    }

 
})
request.fail(function(jqXHR,textStatus,error){

    console.error("Desila se greska:"+textStatus,error);
});
});