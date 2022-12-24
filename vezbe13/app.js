//Domaci//Izdvojiti samo jedinstvene elemente bez duplikata nekog niza

//Probaj//Izdvojiti a,e,i,o,u u nekom nizu

// niz=[10,15,2,3,45,10,2,3]
// // const newArray=new Set(niz);
// // console.log(newArray);

// for(let i=0;i<niz.length;i++){
//     let isUnique=true;
// for(let j=i+1;j<niz.length;j++){
// if(niz[i]===niz[j]){
//     niz[j]="";
//     isUnique=false;
//     break;
// }
// }
// if(isUnique&&niz[i]!==""){
// newArray.push(niz[i]);
// }else{
//     continue;
// }
// }
// console.log(newArray);


//if:;
// n=5;
// str=n%2==0 ?"paran":"neparan";
// console.log(str);
// //Ako je poslednja cifra veca od 5 dodati 2,ako je manja oduzeti 5;

// q=152;
// zadnjacifra=q%10;
// wer=zadnjacifra<5 ? q+2: q-5;

// console.log(wer);

//naci prestupne godine
// let start=1000;
// let end=2023;
// for(let i=start;i<end;i++){
//     if( (i%100==0 && i%400==0) || (i%4==0 && i%100!==0)){
//         console.log(i);
//     }
    
// }

// niz=[4,3,1,6,7,8,2,5];
// novNiz=[];

// for(let i=0;i<niz.length;i++){
// for(let j=i+1;j<niz.length;j++){
// if(niz[i]>niz[j]){
// let a=niz[i];
// niz[i]=niz[j];
// niz[j]=a;
// }
// }
// }

// console.log(niz);

//Iz unetog stringa izdvojiti n znakova sa leve strane

let rec="Pera ima devojku";

let rec2="";

n=60;

if(n>rec.length){

    console.log(rec);

}else{   

for(i=0;i<n;i++){
    rec2+=rec[i];
}
console.log(rec2);

}