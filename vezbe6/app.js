// ako je broj deljiv sa 3 ispisati fizz
// ako je deljiv sa 5 ispisati buzz
// ako je deljiv sa 3 i sa 5 ispisati fizzBuzz
// FizzBuzz-1-100;

 // for(i=1;i<=100;i++){
 //     if(i%5==0 && i%3==0){
 //         console.log("Broj ",i," je FizzBuzz");
 //     }else if(i%5==0){
 //         console.log("Broj ",i," je Buzz");
 //     }else if(i%3==0){
 //         console.log("Broj ",i," je Fizz");
 //     }else{
 //         console.log(i,"nije ni fizz ni buzz ni fizzbuzz");
 //     }
 // }

 //ispisati brojeve od 1-10 ,ali izuzev 5;

//  for(i=1;i<10;i++){
//     if(i!=5){
//         console.log(i);
//     }
//  }

//break zavrasava for petlju celu i izlazi iz nje;

//continue-preskace samo taj slucaj za koji je naveden

// for(i=0;i<10;i++){
//     if(i==5){
//         continue;
//     }
//     console.log(i);
// }

//Sabrati sve parne brojeve od 1-100
// suma=0
// for(i=1;i<100;i++){
//     if(i%2==0){
//      suma+=i;
//     }
    
// }
// console.log(suma);

// suma=0;
// for(i=0;i<100;i+=2){
//     suma+=i;
// }
// console.log(suma);


//Naci faktorijel nekog broja
 a=Number(prompt("Unesite neki broj kojem zelite da izracunate faktorijel"));

pr=1;
for(i=1;i<=a;i++){
  pr*=i;
}
console.log(pr);
