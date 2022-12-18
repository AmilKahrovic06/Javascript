// Domaći: Naći sve delitelje prirodnog broja X.

x=Number(prompt("1. zadatak) Unesite broj x,a mi cemo vam reci koji su mu delitelji!:"));

for(i=0;i<=x;i++){
    if(x%i===0){
        console.log(i);
    }
}
console.log("-------------------------------------------------------------");
// Izogram je rec koja nema slova koja se ponavljaju, uzastopna ili neuzastopna.
//  Odrediti da li je uneti string koji sadrzi samo slova izogram. 
// Pretpostavimo da je prazan niz izogram. Ignorisite velika slova.

str=String(prompt("2. zadatak) Unesite neki string,a mi cemo Vam reci je li to izogram!:"));
str=str.toLowerCase();
izo=true;
//  debugger;
for(i=0;i<str.length;i++){
    for(j=i+1;j<str.length;j++){
        if(str[i]===str[j]){
            izo=false;
            break;
        }
    }
}

if(izo===true){
    console.log("Ovo je izogram");
}else{
    console.log("Ovo nije  izogram");
}