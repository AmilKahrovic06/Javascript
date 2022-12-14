//Uneti neki string i proveriti da li je taj string prazan

// a="Sucro";

// if(a.length===0){
//     console.log("String je prazan");
// }else{
//     console.log("Ova string ima ",a.length," karaktera");
// }
//Uneti string i svaki karakter obrnuti (pretvoriti iz malog u veliko i iz velikog u malo)

// a="aSDFGHJK";
// nov="";
// for(i=0;i<a.length;i++){
//     if(a[i]===a[i].toUpperCase()){
//         nov+=a[i].toLowerCase();
//     }else{
//         nov+=a[i].toUpperCase();
//     }
// }
// console.log(nov);


//NIZOVI

// cars=["BMW","Audi","Mercedes"];

// console.log(cars[0]);
// console.log(cars[2]);

// console.log(cars.length);

// cars.push("Golf");//dodavanje elementa u zadnje mesto niza
// console.log(cars);

// cars.pop();//otklanjanje elementa zadnjeg iz niza

// for(i=0;i<cars.length;i++){
//     console.log(cars[i]);
// }
//Okrenuti niz naopacke

// e=["Q","W","E","R","T","Z"];
// ne=[];
// for(i=e.length-1;i>=0;i--){
    
//     console.log(e[i]);
// }

// e=["Q","W","E","R","T","Z"];
//  ne=[];
// for(i=e.length-1;i>=0;i--){
//     ne.push(e[i]);
     
//  }
//  console.log(ne);

//Naci najmanji i njaveci element tog niza

// broj=[2,6,4,3,8];
// max=broj[0];
// min=broj[0];
// for(i=0;i<broj.length;i++){
//     if(max<broj[i]){
//         max=broj[i];
//     }
//     if(min>broj[i]){
//         min=broj[i];
//     }
// }
// console.log(max);
// console.log(min);

// broj=[2,6,4,3,8];
// nep=[];
// par=[];

// for(i=0;i<broj.length;i++){
//     if(broj[i]%2==0){
//         par.push(broj[i]);
//     }else{
//         nep.push(broj[i]);
//     }
// }
// console.log(par);
// console.log(nep);

// Domaći: 
//  Izracunate prosecnu vrednost niza, ali da izostavite najveci i najmanji element.


broj=[2,3,5,1,4];
 max=broj[0];
 min=broj[0];
 for(i=0;i<broj.length;i++){
     if(max<broj[i]){
         max=broj[i];
     }
     if(min>broj[i]){
         min=broj[i];
     }
 }
 console.log(broj);
 console.log("Maximum je:",max);
 console.log("Minimum je:",min);
   broj.pop();
   broj.shift();
  suma=0;
  for(i=0;i<broj.length;i++){
     suma+=broj[i];
  }
  console.log(broj);
 console.log("Suma:",suma,"/",broj.length);
 console.log("Prosecan broj elemenata bez miniimuma i maximuma je:",suma/broj.length);

 

