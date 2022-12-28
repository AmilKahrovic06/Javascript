// const niz=[10,20,3,40,50];
// let trazeni_element=Number(prompt("Unesite lemenet kojem hocete da saznate indeks"));

// for(let i=0;i<niz.length;i++){
//     if(niz[i]==trazeni_element){
//         console.log(i);
//     }
// }


//udvostruciti svaki drugi element niza

// const niz=[1,2,3,4,5,6,7,8,9];
// niz2=[];
// for(i=0;i<niz.length;i++){
//     if(i%2!==0){
//         niz2.push(niz[i]*2);
//         continue;
        
//     }else{
//         niz2.push(niz[i]);
//     }
// }
// console.log(niz2);



//Ako string ima vise velikih slova,pretvoriti ceo string u velika,u suprotnom u mala

//  str="Maca pojela kucu";

//  Mala=0;
//  Velika=0;

//  for(i=0;i<str.length;i++){
//     if(str[i]===str[i].toLowerCase()){
//         Mala++;
//     }else if(str[i]===""){
//         continue;
//     }else{
//         Velika++;
//     }
//  }

//  console.log("Malih slova ima:",Mala);
//  console.log("Velikih slova ima:",Velika);

//  if(Mala>Velika){
//     console.log(str.toLowerCase());
//  }else if(Mala<Velika){
//     console.log(str.toUpperCase());
//  }else{
//  console.log(str);
// }


//sortirati niz stringova od najkraceg do najduzeg//

// niz=["dwdwed","refdefdede","fff","sdsd"];

// for(i=0;i<niz.length;i++){
  
//     for(j=i+1;j<niz.length;j++){
// if(niz[i].length>niz[j].length){
//    let a=niz[i];
//     niz[i]=niz[j];
//     niz[j]=a;
// }
//     }
// }
// console.log(niz);

// const niz=[13,3,333,2,22,222,1,11,111];
// let pit=String(prompt("Unesite da li zelite da nadjemo index ili vrednost najmanjeg broja niza?"));

// index=0;
// let min=niz[0];
// for(i=0;i<niz.length;i++){
// if(niz[i]<min){
//     min=niz[i];
//     index=i;
// }
// }


//dat je niz koji se sastoji od rijeci i razmaka ,vratite duzinu poslednje reci u nizu.


niz=["Maca"," ","pojela"," ","kucu"];

console.log(niz[niz.length-1].length);
