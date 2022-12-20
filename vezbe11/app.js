// Domaći: Naći sve delitelje prirodnog broja X.

// x=Number(prompt("1. zadatak) Unesite broj x,a mi cemo vam reci koji su mu delitelji!:"));

// for(i=0;i<=x;i++){
//     if(x%i===0){
//         console.log(i);
//     }
// }
// console.log("-------------------------------------------------------------");
// Izogram je rec koja nema slova koja se ponavljaju, uzastopna ili neuzastopna.
//  Odrediti da li je uneti string koji sadrzi samo slova izogram. 
// Pretpostavimo da je prazan niz izogram. Ignorisite velika slova.

// str=String(prompt("2. zadatak) Unesite neki string,a mi cemo Vam reci je li to izogram!:"));
// str=str.toLowerCase();
// izo=true;
// //  debugger;
// for(i=0;i<str.length;i++){
//     for(j=i+1;j<str.length;j++){
//         if(str[i]===str[j]){
//             izo=false;
//             break;
//         }
//     }
// }

// if(izo===true){
//     console.log("Ovo je izogram");
// }else{
//     console.log("Ovo nije  izogram");
// }


//

// niz=[1,3,4,7,8,9];
// granica=13;
// g=true;
// for(i=0;i<niz.length;i++){
// if(niz[i]>granica){
// g=false;
// break;
// }

// }
// if(g){
//     console.log("Ovaj niz je ispod granice");
// }else{
//     console.log("Ovaj niz ima elemenata preko granice");
// }
// Rec=String(prompt("Unesite neku rec da vidimo koliko karaktera ima:"));
// granica=10;
// if(Rec.length<granica){
// console.log(Rec);
// }else{
//     console.log(Rec[0],Rec.length-2,Rec[Rec.length-1]);
// }

//broj pozitivnih i zbir negativnih brojeva

// niz1=[1,-2,3,-4,5,-6,7,-8,9,-10];
// VracajuciNiz=[];
// suma=0;
// brojac=0;
// for(i=0;i<niz1.length;i++){
//     if(niz1[i]>0){
//         brojac++
//     }
//     if(niz1[i]<0){
//         suma+=niz1[i];
//     }

// }

// VracajuciNiz.push(brojac);
// VracajuciNiz.push(suma);

// console.log(niz1);
// console.log(VracajuciNiz);


// a="Sucro";
// b="Hajrija";
// if(a.length>b.length){
//     console.log(b,a,b);
// }else{
//     console.log(a,b,a);
// }