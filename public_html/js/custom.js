function naslov(tekst){
    var temp="<h1 class='text-light'>";
    temp+=tekst;
    temp+="</h1>";
    document.write(temp);
}
function ubaciTekst(tekst){
    var gdje=document.getElementById("test");
    console.log(gdje);
    gdje.innerHTML="<h3 class='text-light'>"+tekst+"</h3>";
}
function preuzmi(){
    var sto=document.getElementsByName("tekst");
    console.log(sto[0].value);
    var gdje=document.getElementById("test");
    var test=sto[0].value;
    var imaP=false;
    for(var i=0;i<test.length;i++){
        if(test[i]=='p' || test[i]=='P'){
            imaP=true;
        }
    }
    console.log(imaP);
    console.log(test.indexOf("p"));
    if(test.indexOf("p") || test.indexOf("P")){
        var kratko=test.substr(0,3);
        gdje.innerHTML="<h3 class='text-light'>"+kratko+"</h3>";
    }else{
        gdje.innerHTML="<h4 class='text-warning'>"+sto[0].value+"</h4>";
    }
    //ako upisani tekst sadrzi p onda ispise h4
    
}

