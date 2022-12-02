const people_frankreich = 65300000;
const people_2003_frankreich = 62240000;
const frankreich = "Frankreich";
const people_deutschland = 83100000;
const people_2003_deutschland = 82530000;
const deutschgland = "Deutschland"
const people_oesterreich = 8900000;
const people_2003_oesterreich = 8121000;
const oesterreich = "Österreich";
const people_italien = 59070000;
const italien = "Italien";
const people_2003_italien = 57310000;
const people_eu = 447700000;




var country: string;
var pp: number;
var pp03: number;

function normal (country, pp, pp03): void {                 //was bringt mir void?
    document.querySelector("#people").innerHTML = (pp / 1000000).toFixed(1) + "Mio";
    document.querySelector("#text").innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in " + country + " in 2022"
    document.querySelector("#relativ").innerHTML = ( pp / people_eu * 100).toFixed(3) + "%";
    document.querySelector("#rate").innerHTML = (( pp / pp03 - 1) * 100).toFixed(3) + "%";
    document.querySelector("#people_03").innerHTML = ((pp - pp03) / 1000000).toFixed(2) + "Mio";
    (document.querySelector(".chart") as HTMLDivElement).style.height= (pp / people_eu * 100)+"%";
    // console.log(pp);
    // console.log(pp03);
    // console.log(country);   
}
//normal("Deutschland", people_deutschland, people_2003_deutschland);
//normal("Italien", people_italien, people_2003_italien);
//normal("Österreich", people_oesterreich, people_2003_oesterreich);
//normal("Frankreich", people_frankreich, people_2003_frankreich)

document.querySelector(".germany").addEventListener(`click`, function(){
    normal("Deustchland", people_deutschland, people_2003_deutschland);
})
document.querySelector(".italy").addEventListener(`click`, function(){
    normal("ITALIEN", people_italien, people_2003_italien);
})
document.querySelector(".austria").addEventListener(`click`, function(){
    normal("Österreich", people_oesterreich, people_2003_oesterreich);
})
document.querySelector(".france").addEventListener(`click`, function(){
    normal("Frankreich", people_frankreich, people_2003_frankreich);
})
