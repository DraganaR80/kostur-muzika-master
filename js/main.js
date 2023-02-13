
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

    //dodavanje muzicara
    $("#dodajForm").submit(function(event){

        event.preventDefault();
        console.log("Pokrenuto dodavanja muzicara");
        
        //citanje podataka
        const $form=$(this);
        const serijalizacija= $form.serialize();
        console.log(serijalizacija);
        //slanje zahteva
        request =$.ajax({
        
            url:"controller/dodajMuzicara.php",
            type:"post",
            data:serijalizacija,
        });
        request.done(function(response,textStatus,jqXHR){
        
            if(response=== "Success"){
        
                alert("Muzicae je dodat");
                location.reload(true);
            }else{
                console.log("Muzicar nije odadat"+ response);
            }
        
         
        })
        request.fail(function(jqXHR,textStatus,error){
        
            console.error("Desila se greska:"+textStatus,error);
        });
        });
        // brisanje muzicara

        $("#btn-izbrisi").click(function(event){

            event.preventDefault();
            console.log("Pokrenuto brisanje muzicara");
            
            //citanje podataka
            const polje=$("input[type=radio]: checked");
            //slanje zahteva
            request =$.ajax({
            
                url:"controller/brisiMuzicara.php",
                type:"post",
                data:{id:polje.val()},
            });
            request.done(function(response,textStatus,jqXHR){
            
                if(response=== "Success"){
            
                    alert("Muzicae je obrisan");
                    location.reload(true);
                }else{
                    console.log("Muzicar nije obrisan"+ response);
                }
            
             
            })
            request.fail(function(jqXHR,textStatus,error){
            
                console.error("Desila se greska:"+textStatus,error);
            });
            });