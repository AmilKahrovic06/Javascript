// broj=[2,3,5,1,4];
//  max=broj[0];
//  min=broj[0];
//  suma=0;
//  for(i=0;i<broj.length;i++){
//      if(max<broj[i]){
//          max=broj[i];
//      }
//      if(min>broj[i]){
//          min=broj[i];
//      }
//      suma+=broj[i];
//  }

//  prosek=(suma-min-max)/broj.length;
//  console.log("Prosek je:",prosek);



//maknuti neki element niza sa neke pozicije

// niz=[3,5,4,2,7,8,9];
// niz2=[];
// n=3;
// for(i=0;i<niz.length;i++){
//     if(i===n){
//         continue;
//     }
//     niz2.push(niz[i]);
// }
// console.log(niz2);

// niz=[3,5,4,2,7,8,9];
// niz2=[];
// n=3;
// for(i=n;i<niz.length;i++){
//     niz2.push(niz[i]);
// }
// for(i=0;i<n;i++){
//     niz2.push(niz[i]);
// }
// console.log(niz2);

// a=Number(prompt("Unesite kojem mesecu zelite da odredite kvartal!"));
//  if(a<3){
//     console.log("I kvartal");
// }else if(a<6){
//     console.log("II kvartal");
// }else if(a<9){
//     console.log("III kvartal");
// }else if(a<12){
//     console.log("IV kvartal");
// }else{
//     console.log("Greska");
// }

//Par sa datom sumom u nizu
// niz=[10,4,5,6,2,12];

// s=15;

// for(i=0;i<niz.length;i++){
//     for(j=1;j<niz.length;j++){
//         if(niz[i]+niz[j]==s){
//     console.log(niz[i]);
//     console.log(niz[j]);
//         }
//     }
// }

//naci element koji fali u nizu
niz=[1,2,4,5,6,7,8,9]
for(i=0;i<niz.length-1;i++){
if(niz[i+1]-niz[i]===1){
    continue;
} 
console.log(niz[i]+1);
}



