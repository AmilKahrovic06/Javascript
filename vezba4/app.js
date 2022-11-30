//Uneti dva broja i od veceg oduzeti manji i prikazati rezultat

// a=Number(prompt("Unesite prvi broj:"));
// b=Number(prompt("Unesite drugi broj:"));

// if(a>b){
//     console.log(a-b);
// }else if(b>a){
//     console.log(b-a);
// }else{
//     console.log("Razlika je jednaka 0");
// }


//Uneti tri broja i sortirati od najmanjeg do najmanjeg

// a=Number(prompt("Unesite prvi broj:"));

// b=Number(prompt("Unesite drugi broj:"));

// c=Number(prompt("Unesite treci broj:"));

// if(a>c && a>b){
//     prvi=a;

//     if( b>c ){
//         drugi=b;
//         treci=c;
     
//     }else{
//         drugi=c;
//         treci=b;
//     }
// }else if(b>a && b>c){
//     prvi=b;
//     if(a>c){
//         drugi=a;
//         treci=c;
//     }else{
//         drugi=b;
//         treci=c;
//     }
// }else if(c>a && c>b){
//     prvi=c;
//     if(b>a){
//         drugi=b;
//         treci=a;
//     }else{
//         drugi=a;
//         treci=b;
//     }
// }
// console.log(prvi,drugi,treci);

//Uneti broj koji ce oznacavati temperaturu i prikazati odgovarajucu poruku
// temperatura=Number(prompt("Unesite temperaturu,a mi cemo vam reci kakva je!:"));

// if(temperatura<0){
//     console.log("UUUU Smrzavanje");
// }else if(temperatura<10){
//     console.log("Veoma hladno brrrrrrrrrr");
// }else if(temperatura<20){
//     console.log("Obuci jaknu,smrze se");
// }else if(temperatura<30){
//     console.log("EEEEEE ovde mozes u duks");
// }else if(temperatura<40){
//     console.log("Vrucina sineeeeeee obuci majicu,sta ce ti jakna");
// }else{
//     console.log("SKUVA SEEEEEE!");
// }

//Uneti duzine stranica trougla i proveriti da li je trougao jednakostranican,jednakokraki ili raznostranican

// a=Number(prompt("Unesite prvu stranicu trougla:"));
// b=Number(prompt("Unesite drugu stranicu trougla:"));
// c=Number(prompt("Unesite trecu stranicu trougla:"));

// if(a===b && b===c){
//     console.log("Ovo je jednakostranicni trougao");
// }else if(a==b || a==c){
//     console.log("Ovo je jednakokraki trougao");
// }else{
//     console.log("Ovo je raznostranicni trougao");
// }
//Uneti broj od 1-12 procitati broj i odediti koliko ima dana u tom mesecu

mesec=Number(prompt("Unesite jedan broj,a mi cemo vam odrediti koji je to mesec"));
if(mesec==1){
    console.log("Januar");
    console.log(31);
}else if(mesec==2){
    console.log("Februar");
    console.log(28);
}else if(mesec==3){
    console.log("Mart");
    console.log(31);
}else if(mesec==4){
    console.log("April");
    console.log(30);
}else if(mesec==5){
    console.log("Maj");
    console.log(31);
}else if(mesec==6){
    console.log("Jun");
    console.log(30);
}else if(mesec==7){
    console.log("Jul");
    console.log(31);
}else if(mesec==8){
    console.log("Avgust");
    console.log(31);
}else if(mesec==9){
    console.log("Septembar");
    console.log(30);
}else if(mesec==10){
    console.log("Oktobar");
    console.log(31);
}else if(mesec==11){
    console.log("Novembar");
    console.log(30);
}else if(mesec==12){
    console.log("Decembar");
    console.log(31);
}else{
    console.log("Pa gdeeeeeee ces nema toliko meseci");
}

