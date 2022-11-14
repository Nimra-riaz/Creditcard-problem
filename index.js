const prompt = require("prompt-sync")({ sigint: true });


const word = prompt("Enter Word? ");
const key = parseInt(prompt("Enter your Key Value? "));
var cipher_var=[]
const ch= word.split("")

for(var i=0; i< word.length ;i++){
  if(key < 26){
      
      let var1= word.charCodeAt(i);
      if(var1>= 97 && var1<=122){
      
         let var2= 97 + (var1 - 97 +key)% 26;
    console.log(var2)
    let var3=String.fromCharCode(var2);
    cipher_var.push(var3)
      }

      else if(var1 >= 65 && var1 <= 90){

        let var2 = 65 + (var1 - 65 +key)% 26;
        
        console.log(var2)
        let var3=String.fromCharCode(var2);
        cipher_var.push(var3)

      }

    
    // let var1= word.charCodeAt(i);

    // let var2=var1+key
    // let var3=String.fromCharCode(var2);
    // cipher_var.push(var3)
  }
  
  //let a= cipher_var.trim();
  //let a=Character.toString(cipher_var)
  //const strippedString = cipher_var.replace(/(<([^>]+)>)/gi, "");
  //console.log(cipher_var.toString())
 

}
let a=cipher_var.toString();
console.log(a.replace(/,/g,""))

//x="hello"
//a=x.split(" ")
//console.log(a)
//console.log(a.toString())






