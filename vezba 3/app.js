//Uneti broj i proveriti jel pozizivan ili negativan

// b=0;
// if(b>0){
//     console.log("Broj je pozitivan");
// }else if(b===0){
//     console.log("Broj je jednak nuli");
// }else{
//     console.log("Broj je negativan");
// }

// console.log("------------------------------------------------------------");
//Uneti dva broja i preveriti da li su ta dva broja jednaka.Ispisati rezultat u konzoli

// a=prompt("Unesite prvi broj");
// b=prompt("Unesite drugi broj");
// if(a===b){
//     console.log("Ova dva broja su jednaka i po vrednosti i po tipu");
// }else if(a==b){
//     console.log("Ova dva broja su jednaka po vrednosti,ali ne i po tipu");
// }else{
//     console.log("ova dva broja nisu jednaka ni po vrednosti ni po tipu");
// }

//Uneti broj od 1 do 7 ispistai koji je dan  uneti broj;

// dan=prompt("unesite broj od 1 do 7 a mi cemo vam reci koji je to dan!");

// if(dan==1){
//     console.log("Ponedeljak");
// }else if(dan==2){
//     console.log("utorak");
// }else if(dan==3){
//     console.log("sreda");
// }else if(dan==4){
//     console.log("Cetvrtak");
// }else if(dan==5){
//     console.log("Petak");
// }else if(dan==6){
//     console.log("Subota");
// }else if(dan==7){
//     console.log("nedelja");
// }else {
//     console.log("Uneli ste pogresan broj");
// }

//uneti broj i preoveriti da li je paran ili neparan

// a=Number(prompt("Unesite neki broj,a mi cemo vam reci da kli je paran ili ne!"));

// if(a%2==0){
//     console.log("Broj je paran");
// }else if(a%2==1){
//     console.log("Broj je neparan");
// }else{
//     console.log("greskicaaaaa");
// }

//Uneti broj m i procitati vrednost.
//  prikazite vrednost n je 1 kada je m vece od 0 n je 0 kada je m=0 i -1 kada je m manje od 0.

// m=Number(prompt("Unesite broj m:"));
// console.log(m);
// if(m>0){
//     n=1;
//     console.log("N je :", n);
// } else if(m===0){
//     n=0;
//     console.log("N je :", n);
// }else{
//     n=-1;
//     console.log("N je :", n);
// }

//Uneti tri broja i ispisati koji je broj najveci

a=Number(prompt("Unesite prvi broj:"));
b=Number(prompt("Unesite drugi broj:"));
c=Number(prompt("Unesite treci broj:"));

if(a>b && a>c){
   console.log("Najveci broj je prvi broj");
}else if(b>a && b>c){
    console.log("Najveci broj je drugi broj");
 }else if(c>a && c>b){
    console.log("Najveci broj je treci broj");
 }else{
    console.log("greska");
 }

