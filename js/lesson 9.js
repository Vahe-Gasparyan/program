let x = prompt("քանի տարեկան եք");

if (x < 18) {
   if (x > 10) {
    alert("դուք դեռ չափահաս չեք");

  }
 else if (x < 10) {
    alert("երեխաների մուտքը արգելված է խնդրում   ենք դուրս եկեք")

  }

} else if (x >= 100) {
  alert("դուք չեք կարող գրանցվել քանի որ մահացել եք")
}

else if (x >= 18) {
  alert("դուք կարող եք գրանցվել")

} else {
  alert("մուտքագրեք միայն թիվ")
}

//erkrord mas

let y = prompt("ուզում եք ստանալ գիտելիքներ թե դասավանդել");

if (y === "ստանալ գիտելիքներ") {
  prompt("գրեք ձեր հեռ.համարը")
  alert("մենք կզանգենք ձեզ  հարցազրույցի համար")
}

else if (y === "դասավանդել") {
  prompt("գրեք ձեր ինքնակենսագրականը")
  prompt("գրեք ձեր հեռ.համարը")
  alert("տվյալների համապատասխանելու դեպքում մենք կզանգենք")
}


const obj ={
    a:15,
    e:57,

    hashvich (n){
        console.log(obj.e % obj.a + 48 / 2)
    }
}

obj.hashvich()


let w = 15;
let r = 11;
let j = 54,
    b = 1,
    u = 3,
    age = 18;
    hexinak = "Tumanyan";
    addres = "ashtarak"


    w !== 18 ? alert("mutqe 18 tarekan anzanc hamar e"):alert("duq arden grancvel eq")
    b == u ? true:false
    age >= 18 ? "kareli e":"chi kareli"
    hexinak = "Tumanyan" ? "ճիշտ է":" սխալ է"
    addres = "ashtarak" ? console.log("qvyarkwxneri cank"):console.log("ays dasht@ lracvac chi")



console.log(`${w > e ? true:false}`)
console.log(`${w + r - w == 4 ? true:false}`)
