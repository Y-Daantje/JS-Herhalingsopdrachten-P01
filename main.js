//opdracht 1
let salery = 2000;
let raise = 0.05;
let newraise1 = document.querySelector('.raise');

let newraise = salery * raise;
newraise1.textContent = 'you will be raised with ' + newraise;

//opdracht 2
let prize = 400000;
let rent = 0.025;
let newraise2 = document.querySelector('.rentraise');

let inflation = prize * rent;
newraise2.textContent = 'your intres will be raised with ' + inflation;

//opdracht 3
let prijs = 100;
let btw = 1.21;
let newbtw = document.querySelector('.btw');

let btw3 = prijs * btw;
newbtw.textContent = 'your intres will be raised with ' + btw3;

//opdracht 4

/*const user = prompt("Vull je naam in");
if (user == "Docent") {
    console.log("jij bent Docent");
}
else if (user == "student") {
    console.log("jij bent student");

}
else if (user == "directuer") {
    console.log("jij bent directuer");

} else {
    console.log("jij bent gek")
}*/


//opdr 5
/*let BTC = 35050;
let ETH = 1887;
let XRP = 0.7;
let DOG = 0.07;
let SOL = 40.26;

const amount = prompt("vull een bedrag in");
const dollar = Number(amount);
const coin = prompt("welke coin")

if (coin == "BTC") {
    let result = dollar / BTC;
    console.log("bedrag in btc is:", result);

} else if (coin == "ETH") {
    result = dollar / ETH;
    console.log("bedrag in ETH is:", result);

} else if (coin == "XRP") {
    result = dollar / XRP;
    console.log("bedrag in XRP:", result);

} else if (coin == "DOG") {
    result = dollar / DOG;
    console.log("bedrag in DOG:", result);

} else if (coin == "sol") {
    result = dollar / sol;
    console.log("bedrag in SOL:", result);
}*/

//opdr 6
let i = 0;

for (let i = 0; i < 9; i++) {
    console.log(i);
    
}