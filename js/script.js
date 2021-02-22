// variabile tasto genera
var genera = document.getElementById("genera");
// variabile tasto annulla
var annulla = document.getElementById("annulla");

genera.addEventListener("click",
    function(){
        // variabile nome
        var nome = document.getElementById("in_nome").value;

        // variabile kilometri
        var kilometri = document.getElementById("in_kilometri").value;
        if (kilometri > 1300 || kilometri == 0) {
            alert("Valore Km non valido");
            location.reload();
        }

        // costante prezzo al km
        const prezzoKm = (kilometri * 0.21);

        // prezzario
        var prezzo = Math.round(prezzoKm*10)/10 + "€"
        var prezzoMin = Math.round((prezzoKm * 0.8)*10)/10 + "€";
        var prezzoOv = Math.round((prezzoKm * 0.6)*10)/10 + "€";

        // variabile display block
        var display = document.getElementById("display");
        display.className = display.classList + "display_block"

        // variabile tipo di prezzo
        var eta = document.getElementById("in_eta").value;
        if (eta == "Prezzo silver") {
            document.getElementById("out_prezzo").innerHTML = prezzoMin;
        } else if (eta == "Prezzo gold") {
            document.getElementById("out_prezzo").innerHTML = prezzoOv;
        } else if (eta == "Prezzo normale") {
            document.getElementById("out_prezzo").innerHTML = prezzo;
        }

        // controllo nome
        if (nome == "") {
            alert("Inserire nome");
            location.reload();
        } else {
            document.getElementById("out_nome").innerHTML = nome;
        }

        // iniezione tipo di prezzo
        document.getElementById("out_sconto").innerHTML = eta;

        // iniezione n carrozza
        document.getElementById("out_carrozza").innerHTML = 
        Math.floor(Math.random()*10 +1);

        // iniezione codice
        document.getElementById("out_codice").innerHTML = 
        Math.floor(Math.random()*10000 +90000);
        
    }
);

annulla.addEventListener("click",
    function() {
        location.reload();
    }
);