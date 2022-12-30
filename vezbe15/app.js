//dat je niz koji se sastoji od rijeci i razmaka ,vratite duzinu poslednje reci u nizu.

// niz=["Maca"," ","pojela"," ","kucu"];

// console.log("Duzina zadnje reci u nizu je:",niz[niz.length-1].length);



// str="Ja idem u skolu";
// var p=0;
// for(i=0;i<str.length;i++){
//     if(str[i]===" "){
//          p=i;
//     }
// }
// console.log(str.length-p);

// const niz=str.split("-");

// const NoviNiz=["Novi","Niz"];

// newArray=NoviNiz.join(" ");

// var tezina =Number(prompt("Unesite tezinu osobe:"));
// var visina =Number(prompt("Unesite visinu osobe:"));

// index=(tezina/visina**2);

// if(index<=18.5){
//     console.log("Mala tezina");
// }else if(index<=25){
//     console.log("Normalno");
// }else if(index<=30){
//     console.log("Prekomerna tezina");
// }else{
//     console.log("Gojazni");
// }

//naci 2 najveca broja u nizu

// niz=[20,45,12,6,7,3,5,90,56,34];

// for(i=0;i<niz.length;i++){
// for(j=i+1;j<niz.length;j++){
// if(niz[i]>niz[j]){
//     let a=niz[i];
//     niz[i]=niz[j];
//     niz[j]=a;
// }
// }
// }
// console.log("Sortirani niz godina:",niz);

// max1=niz[niz.length-1];
// max2=niz[niz.length-2];

// console.log(max1);
// console.log(max2);


//

// niz=[12,45,23,67,33,55,90,99,20];

// for(i=0;i<niz.length;i++){
// for(j=i+1;j<niz.length;j++){
// if(niz[i]>niz[j]){
//     let a=niz[i];
//     niz[i]=niz[j];
//     niz[j]=a;
// }
// }
// }

// console.log("Niz:",niz);

// var max=niz[niz.length-1];
// var min=niz[0];
// var razlika=max-min;

// const niz2=[];

// niz2.push(max);
// niz2.push(min);
// niz2.push(razlika);
// console.log(niz2);

//
n="";

for(i=1;i<5;i++){
    razmak="";
    for(j=1;j<5;j++){
       razmak+=" ";
    }
    n+="* ";
    console.log(razmak+n);
}

//
      