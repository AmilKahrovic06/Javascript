
 string = prompt('Unesite neki string: '); 
  sp=string.replaceAll(" ","");
  sp1=sp.toLowerCase();
  
  console.log(sp1);
 len = sp1.length;  
  a=0;
   
  for ( i = 0; i < len / 2; i++) {  
 
      if (sp1[i] !== sp1[len - 1 - i]) {  
          a++;
      }  
  }  

  if(a===0){
    alert("Ovo je palindrom");
  }else{
    alert("Nije palindrom");
  }
   
   
  
  
