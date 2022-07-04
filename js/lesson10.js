

// tn 1 
const obj = {
  name:["davit","Ashot","taron"],
  addres:["erevan","ashtarak","dzermuk"],
  number1:45 % 10,
  number2:5, 
  income:25000,
  outlay:20000,
};
if(obj.name[2] === "taron"){
  console.log("գեղեցիկ անուն է")
}else{
  console.log("տարոնը ավելի գեղեցիկ անունա քան ձերը")
}
if(obj.name !== obj.addres){
  alert("true")
}else{
  alert(false)
}

if(obj.number1 === obj.number2 ){
  console.log("true")
}else{
  console.log(false)
}

if(obj.income !== obj.outlay && obj.income > obj.outlay ){
  alert("շատ լավա")
}else{
  alert("տակ եք տվել")
}

if(obj.number1 - obj.number2 >= 34){
  console.log("ճիշտ է")
}else{
  console.log("սխալ է")
}


obj.name[2] === "taron" ? console.log("gexecik anun e "):alert("taron@ aveli gexecik anun e")


obj.nmae !== obj.addres ? alert("true"):alert(false)


obj.number1 === obj.number2 ? console.log(true):console.log(false)

obj.income !== obj.outlay && obj.income > obj.outlay ? alert("shat lava "): alert("տակ եք տվել")

obj.number1 - obj.number2 >= 34 ? console.log("ճիշտ է"):console.log("սխալ է")

// tn. 2

const y = 23,
      t = 12,
      str = "ararat",
      sTr = "aragac";
      
      
      switch(y){
        case 32:console.log("text0");break;
        case 45:console.log("text1");break;
        case 14:console.log("text");break;
        default:console.log("pordzeq krkin")
      }
      
      switch(str) {
        case "Ararat":console.log();break;
        case "araRat":console.log();break;
        case "ararat":console.log("ճիշտ է")
      }
      
      
      
      // tn.3
      const i = 45;
      switch(i){
       case 46:console.log() ;break;
       case 45:
         if(i - 40 * 5 === 25){
           console.log("da 45 e")
         }else if(i - 50 /2 ===3){
           console.log('da 56 e')
         }
         
         i - 15 < 40 ? console.log("այս դաշտը լրացված չի")  :console.log(" mteq 4 hxumov")
         
      }