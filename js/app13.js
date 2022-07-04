// declaration function

function f1 (b,a,c) {
    return b*b - 4*a*c};
   
   console.log(f1(13,5,3));
   
   
   function f3(o){
     switch(o){
            case'երկուշաբթի': console.log('8:00 - 21:00 ենք աշխատում այսօր');break;
            case 'երեքշաբթի':console.log('9:00 - 19:00 ենք աշխատում այսօր');break;
            case 'չորեքշաբթի':console.log('21:00 - 00:00 դասի եմ');break
            case 'հինգշաբթի':console.log('աշխատանքի չեմ');break;
            case 'շաբաթ':console.console.log('12։00 ֊ 14։00');
     }
     
   }
   f3('հինգշաբթի')
   
   
   function f4(x){
     if(x % 2 === 0  ){
       console.log('բարդ  թիվ է')
     }else(console.log('պարզ թիվ է'))
   }
   f4(1)
   f4( f3('չորեքշաբթի'))
   
   
   
   function f5(d){
     d  <= 50000 ? console.log('բոնուս կարող եք ստանալ եթե ամսական առևտուրը  մեծ է 50000 դրամից')
   :console.log("դուք կստանաք բոնուսներ մեր խանութից հաճախ օկտվելու համար")}
   
   f5(50000)
   
   
   function f6 (t){
        console.log(` ${t / 100 *20 }դրամ կգնա ծառատունկին`)
        console.log(`${t / 100 * 50} դրամ անապահով ընտանիքներին`)
        console.log(`${t / 100 * 30} դրամ մարզերում ծրագրավորում դասավանդելուն`)
        
   }
   
   f6(3000000)
//    3 angam return
   
   function f7(x){
     if(x === 'cocacola'){
       return 'ստեղծվելա 1954֊ին'
     }else if(x === 'Fanta'){
       return 'ստեղծվելա 1978֊ ին'
     } else if(x === 'sprite'){
       return 'ստեղծվելա 1976֊ին'
     }
   }
   console.log(f7('cocacola'))



//    expression function
const diskriminat = function (b,a,c) {
    return b*b - 4*a*c};
   
   console.log(f1(13,5,3));


  const orer = function (o){
    switch(o){
           case'երկուշաբթի': console.log('8:00 - 21:00 ենք աշխատում այսօր');break;
           case 'երեքշաբթի':console.log('9:00 - 19:00 ենք աշխատում այսօր');break;
           case 'չորեքշաբթի':console.log('21:00 - 00:00 դասի եմ');break
           case 'հինգշաբթի':console.log('աշխատանքի չեմ');break;
           case 'շաբաթ':console.console.log('12։00 ֊ 14։00');
    }
    
  }
  f3('հինգշաբթի')
  


 const tver = function (x){
    if(x % 2 === 0  ){
      console.log('բարդ  թիվ է')
    }else(console.log('պարզ թիվ է'))
  }
  f4(1)
  f4( f3('չորեքշաբթի'))
  
  
  const baregorcutyun = function (d){
    d  <= 50000 ? console.log('բոնուս կարող եք ստանալ եթե ամսական առևտուրը  մեծ է 50000 դրամից')
  :console.log("դուք կստանաք բոնուսներ մեր խանութից հաճախ օկտվելու համար")}
  
  f5(50000)
  
  
  function f6 (t){
       console.log(` ${t / 100 *20 }դրամ կգնա ծառատունկին`)
       console.log(`${t / 100 * 50} դրամ անապահով ընտանիքներին`)
       console.log(`${t / 100 * 30} դրամ մարզերում ծրագրավորում դասավանդելուն`)
       
  }
  
  f6(3000000)


   const fir = function (x){
    if(x === 'cocacola'){
      return 'ստեղծվելա 1954֊ին'
    }else if(x === 'Fanta'){
      return 'ստեղծվելա 1978֊ ին'
    } else if(x === 'sprite'){
      return 'ստեղծվելա 1976֊ին'
    }
  }
  console.log(f7('cocacola'))


//   arrow function



const s = (o) => {
    switch(o){
        case'երկուշաբթի': console.log('8:00 - 21:00 ենք աշխատում այսօր');break;
        case 'երեքշաբթի':console.log('9:00 - 19:00 ենք աշխատում այսօր');break;
        case 'չորեքշաբթի':console.log('21:00 - 00:00 դասի եմ');break
        case 'հինգշաբթի':console.log('աշխատանքի չեմ');break;
        case 'շաբաթ':console.console.log('12։00 ֊ 14։00');
 }
 
}
f3('հինգշաբթի')



const c = () => {
    if(x === 'cocacola'){
        return 'ստեղծվելա 1954֊ին'
      }else if(x === 'Fanta'){
        return 'ստեղծվելա 1978֊ ին'
      } else if(x === 'sprite'){
        return 'ստեղծվելա 1976֊ին'
      }
    }

   console.log(f7('cocacola'))



   const y = () => {
    console.log(` ${t / 100 *20 }դրամ կգնա ծառատունկին`)
    console.log(`${t / 100 * 50} դրամ անապահով ընտանիքներին`)
    console.log(`${t / 100 * 30} դրամ մարզերում ծրագրավորում դասավանդելուն`)
    
}

f6(3000000)


const i = (x) => {
    if(x % 2 === 0  ){
      console.log('բարդ  թիվ է')
    }else(console.log('պարզ թիվ է'))
  }
  f4(1)
  f4( f3('չորեքշաբթի'))