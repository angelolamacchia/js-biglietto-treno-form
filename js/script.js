

genera.addEventListener("click",
    function(){
        var nome = document.getElementById("in_nome").value;

        var kilometri = document.getElementById("in_kilometri").value;
        const prezzoKm = (kilometri * 0.21);

        var prezzo = prezzoKm;
        var prezzoMin = prezzoKm * 0.8;
        var prezzoOv = prezzoKm * 0.6;

        var eta = document.getElementById("in_eta").value;
        if (eta == "Prezzo silver") {
            document.getElementById("out_prezzo").innerHTML = prezzoMin;
        } else if (eta == "Prezzo gold") {
            document.getElementById("out_prezzo").innerHTML = prezzoOv;
        } else if (eta == "Prezzo normale") {
            document.getElementById("out_prezzo").innerHTML = prezzo;
        }

        var genera = document.getElementById("genera");

        var annulla = document.getElementById("annulla");

        document.getElementById("out_nome").innerHTML = nome;

        document.getElementById("out_sconto").innerHTML = eta;

        document.getElementById("out_carrozza").innerHTML = Math.floor(Math.random()*10 +1);

        document.getElementById("out_codice").innerHTML = Math.floor(Math.random()*10000);
        
    }
);

