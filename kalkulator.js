
const calculate = () => {

    let dlugosc = document.querySelector("#dlugosc").value;
    let wiek = document.querySelector("#wiek").value;
    let czas = document.querySelector("#czas").value;
    let ilosc = document.querySelector("#ilosc").value;
    let grades = "";
    let cena = "";


    let licznik =
        parseFloat(dlugosc) * parseFloat(wiek) * parseFloat(czas);


    let cena = (licznik / ilosc);
    if (cena <= 100) {
        grades = "Bardzo stały klient";
    } else if (cena >= 100 && cena <= 200) {
        grades = "Stały klient";
    } else if (cena >= 200 && cena <= 500) {
        grades = "Wygląda na to że nie jesteś naszym stałym klientem, zapraszamy częściej!";
    } else {
        grades = "Aby uzyskać niższą cenę - zapraszamy częściej!";
    }

    if (dlugosc == "" || wiek == "" || czas == "" || ilosc == "") {
        document.querySelector("#showdata").innerHTML = "Proszę wpisać wszystkie wartości";
    } else {

        if (cena >= 39.5) {
            document.querySelector("#showdata").innerHTML =
                'Według naszego kalulatora, twoja cena wyniesie ${cena} oraz twój komentarz ${grades}';

        }
    }
}