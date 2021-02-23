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
        var prezzo = Math.round(prezzoKm*10)/10 + "€";
        var prezzoMin = Math.round((prezzoKm * 0.8)*10)/10 + "€";
        var prezzoOv = Math.round((prezzoKm * 0.6)*10)/10 + "€";

        // variabile tipo di prezzo
        var eta = document.getElementById("in_eta").value;
        if (eta == "minorenne") {
            document.getElementById("out_prezzo").innerHTML = prezzoMin;
            eta = "Prezzo minore (-20%)";
        } else if (eta == "over") {
            document.getElementById("out_prezzo").innerHTML = prezzoOv;
            eta = "Prezzo over (-40%)";
        } else if (eta == "maggiorenne") {
            document.getElementById("out_prezzo").innerHTML = prezzo;
            eta = "Prezzo normale";
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

        // iniezione n carrozza da 1 a 10
        document.getElementById("out_carrozza").innerHTML = 
        Math.floor(Math.random()*10 +1);

        // iniezione codice da 90000 a 100000 escluso
        document.getElementById("out_codice").innerHTML = 
        Math.floor(Math.random()*10000 +90000);

         // variabile display block
         var display = document.getElementById("display");
         display.className = display.classList + " display_block";
    }
);

annulla.addEventListener("click",
    function() {
        location.reload();
    }
);