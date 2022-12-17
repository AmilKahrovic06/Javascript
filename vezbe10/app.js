// Domaci: Napisati program kojim se ucitava trocifreni broj.
//  Ako je zadnja cifra manja od 5 dodati ucitanom broju 2, inace oduzeti 5.
// a=Number(prompt("Unesite neki trocifreni broj:"));
// if(a>999||a<100){
//     console.log("Unesite neki drugi broj,ovaj nije trocifren");
// }else if(a%10<5){
//     a+=2;
// }else{
//     a-=5;
// }
// console.log(a);

// HumanYears=Number(prompt("Unesite covekove godine"));

//Cat years
//15 macijih godina za prvu
//9 macijih godina za drugu
//+4 za svaku narednu

//Dog years
//15  godina za prvu
//9  godina za drugu
//+5 za svaku narednu

// if(HumanYears==1){
//     console.log([1,15,15]);
// }else if(HumanYears==2){
//     console.log([1,15+9,15+9]);
// }else{
//     console.log([HumanYears,15+9+(HumanYears-2)*4,15+9+(HumanYears-2)*5]);
// }

//Amstrongov broj

// a=Number(prompt("Unesite neki broj,da vidimo jel amstrongov"));
// trecaCifra=a%10;//371/10=37,ostatak 1
// drugaCifra=Math.floor(a/10)%10;//371/10=37    37%10=7;
// prvaCifra=Math.floor(a/100);//371/100=3
// ams=prvaCifra**3+drugaCifra**3+trecaCifra**3;
// if(ams===a){
//     console.log("Ovo je amstrongov broj");
// }else{
//     console.log("Ovo nije amstrongov broj");
// }


x=Number(prompt("Unesite broj x:"))
 for(i=100;i<999;i++){
    trecaCifra=i%10;
    drugaCifra=Math.floor(i/10)%10;
    prvaCifra=Math.floor(i/100);
    if((prvaCifra+drugaCifra+trecaCifra)===x){
        console.log(i);
    }
 }
