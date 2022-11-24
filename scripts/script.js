const people_frankreich = 65300000;
const people_2003_frankreich = 62240000;
const frankreich = "Frankreich";
const people_deutschland = 83100000;
const people_2003_deutschland = 82530000;
const deutschgland = "Deutschland";
const people_oesterreich = 8900000;
const people_2003_oesterreich = 8121000;
const oesterreich = "Österreich";
const people_italien = 59070000;
const italien = "Italien";
const people_2003_italien = 57310000;
const people_eu = 447700000;
function germany() {
    document.querySelector("#people").innerHTML = (people_deutschland / 1000000) + "Mio";
    document.querySelector("#text").innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in Deustchalnd in 2022";
    document.querySelector("#relativ").innerHTML = (people_deutschland / people_eu * 100) + "%";
    document.querySelector("#rate").innerHTML = ((people_deutschland / people_2003_deutschland - 1) * 100) + "%";
    document.querySelector("#people_03").innerHTML = ((people_deutschland - people_2003_deutschland) / 1000000) + "Mio";
    document.querySelector(".chart").style.height = (people_deutschland / people_eu * 100) + "%";
}
document.querySelector(".germany").addEventListener(`click`, germany);
function france() {
    document.querySelector("#people").innerHTML = (people_frankreich / 1000000) + "Mio";
    document.querySelector("#text").innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in Frankreich in 2022";
    document.querySelector("#relativ").innerHTML = (people_frankreich / people_eu * 100) + "%";
    document.querySelector("#rate").innerHTML = ((people_frankreich / people_2003_frankreich - 1) * 100) + "%";
    document.querySelector("#people_03").innerHTML = ((people_frankreich - people_2003_frankreich) / 1000000) + "Mio";
    document.querySelector(".chart").style.height = (people_frankreich / people_eu * 100) + "%";
}
document.querySelector(".france").addEventListener(`click`, france);
function austria() {
    document.querySelector("#people").innerHTML = (people_oesterreich / 1000000) + "Mio";
    document.querySelector("#text").innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in Österreich in 2022";
    document.querySelector("#relativ").innerHTML = (people_oesterreich / people_eu * 100) + "%";
    document.querySelector("#rate").innerHTML = ((people_oesterreich / people_2003_oesterreich - 1) * 100) + "%";
    document.querySelector("#people_03").innerHTML = ((people_oesterreich - people_2003_oesterreich) / 1000000) + "Mio";
    document.querySelector(".chart").style.height = (people_oesterreich / people_eu * 100) + "%";
}
document.querySelector(".austria").addEventListener(`click`, austria);
function italy() {
    document.querySelector("#people").innerHTML = (people_italien / 1000000) + "Mio";
    document.querySelector("#text").innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in Italien in 2022";
    document.querySelector("#relativ").innerHTML = (people_italien / people_eu * 100) + "%";
    document.querySelector("#rate").innerHTML = ((people_italien / people_2003_italien - 1) * 100) + "%";
    document.querySelector("#people_03").innerHTML = ((people_italien - people_2003_italien) / 1000000) + "Mio";
    document.querySelector(".chart").style.height = (people_italien / people_eu * 100) + "%";
}
document.querySelector(".italy").addEventListener(`click`, italy);
//# sourceMappingURL=script.js.map