// str="Mama ima momu";
// brojac=0;
// for(i=0;i<str.length;i++){
//     if(str[i]==="m"||str[i]==="M"){
//         brojac++;
//     }
// }
// console.log(brojac);
//Koliko malih slova ima u stringu

// str=String(prompt("Unesite neki string"));
// brojac=0;
// for(i=0;i<str.length;i++){
//     if(str[i]===str[i].toLowerCase() && str[i]!==" "){
//     brojac++;
//     }
// }
// console.log(str);
// console.log("Ovaj string ima ",brojac," malih slova");

//Ispitati da li ima u stringu vise velikih ili malih slova

// str="Programiranje";
// mali=0;
// veliki=0;
// for(i=0;i<str.length;i++){
//     if(str[i]===str[i].toLowerCase()&& str[i]!==" "){
//     mali++;
//     }else{
//     veliki++;
//     }
// }

// if(mali<veliki){
//     console.log("Velikih slova ima vise");
// }else{
//     console.log("Malih slova ima vise");
// }
// console.log(mali);
// console.log(veliki);


//let 
//var
//const






// num=5;
// switch(num){
//     case 1:
//     console.log("Ponedeljak");
//         break;
//     case 2:
//     console.log("Utorak");
//     break;

//     case 3:
//     console.log("Sreda");
//     break;

//     case 4:
//     console.log("Cetvrtak");
//     break;

//     case 5:
//     console.log("Petak");
//     break;

//     case 6:
//     console.log("Subota");
//     break;

//     case 7:
//     console.log("Nedelja");
//     break;

//     default:
//     console.log("Greska");

// }
//izdvojiti elemente bez ponavljanja
//Izdvojiti elemente bez ponavljanja;
// const niz = [10, 15, 2, 3, 10, 13, 3, 45, 2];
// const noviNiz = [];

// let isInside = false;

// for (let i = 0; i < niz.length; i++) {
//   isInside = false;
//   for (let j = 0; j < noviNiz.length; j++) {
//     if (niz[i] === noviNiz[j]) {
//       isInside = true;
//       break;
//     }
//   }

//   if (isInside) {
//     continue;
//   } else {
//     noviNiz.push(niz[i]);
//   }
// }

// console.log(noviNiz);

// niz1=[1,2,3,4,5,6,7,8,9,8,3];
// niz2=[];

// for(i=0;i<niz1.length;i++){
//     is=false;
//     for(j=i+1;j<niz1.length;j++){
//         if(niz1[i]===niz2[j]){
//             is=true;
//             break;
//         }
//     }
//     if(is){
//         continue;
//     }else{
//         niz2.push(niz1[i]);
//     }
// }

// console.log(niz2);

//Domaci//Izdvojiti samo jedinstvene elemente bez duplikata nekog niza

//Probaj//Izdvojiti a,e,i,o,u u nekom nizu

//A i B stringovi,kombinovati znake prvi sa prvim,drugi sa drugim,treci sa trecim itd.


let firstStr = "Pera";
let secondStr = "sladoled";
let newStr = "";
let length = 0;

if (firstStr.length > secondStr.length) {
  length = firstStr.length;
} else {
  length = secondStr.length;
}

for (let i = 0; i < length; i++) {
  if (firstStr[i] === undefined) {
    newStr += secondStr[i];
    continue;
  }

  if (secondStr[i] === undefined) {
    newStr += firstStr[i];
    continue;
  }
  newStr += firstStr[i] + secondStr[i];
}
console.log(newStr);


