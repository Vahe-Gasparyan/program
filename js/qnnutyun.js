/* ՔՆՆՈՒԹՅՈՒՆ N1
Թվարկել բոլոր թայփերը մեկնաբանելով և սահմանելով յուրաքանչյուրի աշխատանքը (բացառությամբ Symbol)
## պրիմիծիվ տեսակներ

null - ոչինչ չկա
number - թվեր՝1,2,23,98
string - "",՝՝,երկու գիծ 
Boolean - ունի երկու արժեք - true,false, 0=>false,1=>true
undefinde - չի գտնվել արժեքը

SE- 11 - ից
symbol -չենք անցել
bigint-շաաաաաաաաաաատ մեծ թիվ , մենք նաև կարող ենք ստեղծել Fake bigint

## 4հղումային տեսակներ

Array => object
Function => object => Function
new Date() => object
new Error() => object
object => object






2-Ինչ տարբերություններ կան LET-ի, CONST-ի և VAR-ի միջև

const-ի արժեքը մենք չենք կարող փոխել իր արժեքը հաստատւն է ու մենք չենք կարող const-ին արժեք չտալ
let-ը ի տարբերություն const-ի կարող ենք փոխել իր արժեքը
var` js-ի բառադիությունը 1-չի ենթարկվում սկոպերին, 2-կանչվումա իրանից վերև բայց undefined-ով,3-նույն անունով հայտարարելուց սխալ չի տալիս ի տարբերությոըն let-ի






3-Թվարկել տեսանելիության դաշտերը և սահմանել իրենց տարբերությունները
1- Block scope
2- Function scope
3- Global scope

    Block scope: { } բլոկի ներսում հայտարարված փոփոխականները չեն կարող կանչվել բլոկի դրսից.
    Function scope: Ֆունկցիայի ներսումսահմանված փոփոխականները հասանելի չեն (տեսանելի) ֆունկցիայից դուրս, ներսում տված արժեքը ստանումա կանչվելուց
    Global scope: ամբողջ js ֆայլը դա Global scope-ն է




4-Ի՞նչ տարբերություն կա Block Scope-ի և Function scope-ի միջև
սկոպի մեջ գրված արժեքը ստանում է միայն կանչվելուց հետո

5-Ինչո՞վ են վտանգավոր գլոբալ փոփոխականներն ու var-երը
 գլոբալ փոփոխականները հասանելի են լինում ամեն տեղ ինչը շատ մեծ վտանգա

 var-մենք կարողա միամիտ փոխենք արժեքը ու ինքը ոչ մի զգուշացում չտա նաև գոյություն ունի մինչև իրեն ստեղծելը


 


6-Թվարկել ֆունկցիաները ըստ իրենց անունների ու մեկնաբանել իրենց աշխատանքը
կա 3-տիպի
declaration-ունի շատ լավ հատկություն  անկախ ամենինչի նա հասանելի է իրեն ստեղծելուց և վերև և ներքև

expression arrow փոխանցում ենք փոփոխականի քանի որ հղումային տիպեր են
expression-կարող ենք ֆունկցիային անուն չտալ դա պարտադիր չէ իսկ վերջում դնում ենք սա՝ ;
arrow-եկելա ES6-ի հետ 2015թ-ին ,չունի սեփական կոնտեքստ (this) ,expression ֆունկցիայի կարճ գրելաձևնա բայց որոշ պայմաններից ելնելով ավելիա կարճանում



7-ինչ տարբերություն կա postfix և prefix գրելաձևի միջև, ու որ դեպքերում ենք իրենց օգտագործում
տարբերությունը երևումա կանչվելու ժամանակ ՝
postfix-առաջինը վերադարձնումա են արժեքը որը որ գրվածա հետո նոր ավելացնումա,օգտագործվումա ցիկլների ժամանակ
prefix-ես դեպքում մենք չենք պահում սկզբնական արժեքը միանգամից ավելացնումա,օգտագործվումա հաշիվ ավելացնելու դեպքում





8-Մեկնաբանել null-ի և undefined-ի տարբերությունները


9-HTML-ում script թեգը միացնելու ամենահարմար վայրը դա ... շարունակել միտքը և սահմանել թե ինչու
 body-ից մի տող վերև





10-JavaScript-ը արդյո՞ք կարող է բրաուզերում աշխատել առանց HTML-ի, գրեք այո կամ ոչ
ոչ

11-թվարկեք Boolean օպերատորները և սահմանեք նրանց նշանակություններն ու անունները
ունի երկու արժեք - true,false, 0=>false,1=>true


12-ինչ տարբերություն կա այս օպերատոների միջև ==, ===
==-ստուգում է միայն վալյուն կամ այլ թայփեր
===-ստուգում է համ վալյուն համ թայփը

13-ինչ տարբերություն կա պրիմիտիվ և հղումային թայփերի միջև

հղումային թայփերը  կանչելու համար մեզ պետք է հղում ՝փոփոխական դեպի այդ թայփը

14-ինչի՞ համար են օգտագործվում BREAK և CONTINUE օպերատորները և ո՞րտեղ
BREAK - օկտագործում են switch-ը և ցիկլները կանգնեցնելու  համար
CONTINUE -օկտագործում են  for-ցիկլում տարրը բաց թողնելու համար

15-Ո՞ր մաթեմատիկական օպերատորի դեպքում և ո՞ր պարգայաում console-ում կարող ենք ստանալ infinity
բաժանման դեպքում երբ թիվը բաժանում ենք 0-ի 

16-ի՞նչ է նշանակում NaN և ո՞ր դեպքում կարող ենք իրեն ստանալ
not a number ,երբ գործողությունը անում ենք ոչ թե թվի այլ, այլ բանի հետ

17-ի՞նչ է նշանակում NPM
node package menager

18-Ինչպե՞ս ենք NPM-ը միացնում մեր պրոյեկտին
գրում ենք npm init ու պատասխանում ենք հարցերին

19-Ի՞նչ package-ներ գիտեք և ինչպե՞ս եք դրանք ավելացրել ձեր պրոյեկտի մեջ
jshint,jsharmony -որոնում ենք պեքիջ կոփի ենք անում հղումը ու տեղադրում ենք  տեռմինալում

կախված փեքիջի տեսակից օրինակ կարողա սկզբում անենք գլոբալ հետո լոկալ ինստալ

20-Ի՞նչ տարբերություն կա DevDependecy-ի և Dependecy-ի միջև
DevDependecy-ի մեջ կա package-ներ որոնցից կախվածություն ունենք մենք
Dependecy-ի մեջ կա package-ներ որոնցից կախվածություն ունի պռոյեկտը

21-for loop-ով աստղանիշներով console-ում ստանալ լիարժեք՝ կլորանման բան (անկյունները կոտրած), քառակուսի, եռանկյունի, ուղղանկյուն, երկու քառակուսի իրար կողք և ցանկացած տառ (latin)
erankyan`
let s = "*"
let result = "";

for(let i = 0; i <= 7;i++){


    for(let j = 7;j >= i;j--){
        if(j === 0 ){
            result += "*"
            break;
        }
        if(j === i){
            result += s  + "**";
            s += "**";
            break;
        }
        result += " ";
    }
    result += "\n"
    
}

console.log(result)








22-ստեղծում ենք փոփոխական, որի մեջ ստեղծում եք սթրինգ 500 բառից բաղկացած պատմություն, ու էդ սթրիգի մեջ օգտագործում եք ${} սրանցից ու մեջը գրում եք տարատեսակ JS կոդեր, որոնք կարող են ձեր պատմության հետ կապ ունենալ, օրինակ (տարեթվեր, անուններ և այլն)
let a = "lorem";
let b = "dolor";
let s = "adipisicing";
let t = "perspiciatis!";
let str = `${a} ipsum ${b} sit amet consectetur ${s} elit. Enim accusantium natus ${t} Nemo magni consectetur quis blanditiis iure? Aliquid, harum animi, minus commodi vel quo doloribus sit perferendis accusamus, illum eius? Voluptatem perferendis similique natus quisquam reiciendis at nemo, rem eius accusamus! Unde, dolore. Incidunt tenetur aliquid expedita pariatur voluptatibus hic obcaecati sint quaerat perspiciatis. Placeat eos et optio, nisi ab quaerat cumque dolores veniam nostrum laudantium laboriosam delectus, nobis quidem nam id ducimus corrupti? Vel numquam nam ducimus enim minus officiis molestias sit repellat adipisci fuga, possimus ut consequuntur cupiditate autem magnam iusto quas repudiandae eligendi dicta assumenda? Explicabo autem exercitationem, quibusdam voluptas dicta sit earum obcaecati beatae. Quis aspernatur maiores distinctio optio eum sequi eaque? Fuga harum tempore velit animi accusantium, incidunt reiciendis, nobis voluptas consectetur placeat, odio similique numquam quibusdam quam? Tempora esse hic voluptatem similique nostrum, optio rerum facilis sint aspernatur nam aliquam! Aperiam unde facere est, nihil nulla cupiditate autem sed molestias rerum? Neque, et. Sint similique officiis quas deleniti ex molestiae illum aspernatur suscipit debitis laboriosam, autem iste possimus dolor aperiam at ipsam, amet enim modi consequuntur ducimus maiores. Est tempora, nobis nisi necessitatibus esse dicta inventore voluptas doloribus quis ipsam! Cumque est porro facilis, qui dolor aliquid nesciunt omnis nobis saepe nam, voluptatem hic nostrum repudiandae, aut optio ea officia. Et, velit animi porro neque, atque ipsa facere earum corporis itaque quod aperiam odit minima nemo recusandae. Placeat nam beatae corporis praesentium pariatur officia nisi natus nesciunt facilis nihil ad reiciendis maiores commodi minima quisquam assumenda, iste ducimus obcaecati voluptatem consectetur distinctio. Consectetur sit dolorem minima quaerat a? Hic earum quidem consequatur esse neque, labore, facere maxime qui, dignissimos sed corporis illo beatae incidunt dolorum ipsa tempore totam iste? Deserunt iure harum quaerat nesciunt eveniet ratione cum repudiandae provident illum, laudantium hic libero ducimus sapiente officiis pariatur, blanditiis odit dicta eaque minima esse eum quod fugit cupiditate voluptas. Quaerat ipsam ducimus odio obcaecati at repellendus natus enim ab! Nostrum ut earum facilis quasi, facere neque veniam repellat illum voluptas magnam ipsam veritatis molestias. Quo ipsum, magni asperiores nostrum, repellat saepe, ullam voluptatem sunt aut beatae corrupti ducimus debitis. Accusamus dicta consequatur odit rem sit quasi fugiat. Modi neque ullam, aliquam odit in officia deleniti optio earum vel nobis labore expedita cupiditate. Quis ratione laborum sit animi quod vero, harum totam eum sequi aliquam praesentium earum aspernatur reiciendis eveniet quia. Eaque nemo, nihil voluptas, illo assumenda dolore quas fuga iure recusandae asperiores odio eos! Mollitia itaque ipsum harum quasi facilis dolore doloremque perspiciatis reiciendis odio fuga pariatur ipsa sequi amet, assumenda deserunt quisquam modi illo nesciunt tenetur nihil aliquam nisi repudiandae. Unde veniam omnis sunt itaque laboriosam nobis cumque dolorum autem quos perspiciatis, reiciendis eveniet natus recusandae illo! Aspernatur eos dolore pariatur dolorem accusamus velit ex soluta porro labore eum quas ullam ipsum, consectetur similique provident maiores nam. Deleniti unde recusandae eos blanditiis vero! Dolore, quam vitae temporibus voluptatibus ea corporis necessitatibus adipisci minus laboriosam aut numquam, suscipit odit explicabo qui quo iure ex.Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim accusantium natus perspiciatis! Nemo magni consectetur quis blanditiis iure? Aliquid, harum animi, minus commodi vel quo doloribus sit perferendis accusamus, illum eius? Voluptatem perferendis similique natus quisquam reiciendis at nemo, rem eius accusamus! Unde, dolore. Incidunt tenetur aliquid expedita pariatur voluptatibus hic obcaecati sint quaerat perspiciatis. Placeat eos et optio, nisi ab quaerat cumque dolores veniam nostrum laudantium laboriosam delectus, nobis quidem nam id ducimus corrupti? Vel numquam nam ducimus enim minus officiis molestias sit repellat adipisci fuga, possimus ut consequuntur cupiditate autem magnam iusto quas repudiandae eligendi dicta assumenda? Explicabo autem exercitationem, quibusdam voluptas dicta sit earum obcaecati beatae. Quis aspernatur maiores distinctio optio eum sequi eaque? Fuga harum tempore velit animi accusantium, incidunt reiciendis, nobis voluptas consectetur placeat, odio similique numquam quibusdam quam? Tempora esse hic voluptatem similique nostrum, optio rerum facilis sint aspernatur nam aliquam! Aperiam unde facere est, nihil nulla cupiditate autem sed molestias rerum? Neque, et. Sint similique officiis quas deleniti ex molestiae illum aspernatur suscipit debitis laboriosam, autem iste possimus dolor aperiam at ipsam, amet enim modi consequuntur ducimus maiores. Est tempora, nobis nisi necessitatibus esse dicta inventore voluptas doloribus quis ipsam! Cumque est porro facilis, qui dolor aliquid nesciunt omnis nobis saepe nam, voluptatem hic nostrum repudiandae, aut optio ea officia. Et, velit animi porro neque, atque ipsa facere earum corporis itaque quod aperiam odit minima nemo recusandae. Placeat nam beatae corporis praesentium pariatur officia nisi natus nesciunt facilis nihil ad reiciendis maiores commodi minima quisquam assumenda, iste ducimus obcaecati voluptatem consectetur distinctio. Consectetur sit dolorem minima quaerat a? Hic earum quidem consequatur esse neque, labore, facere maxime qui, dignissimos sed corporis illo beatae incidunt dolorum ipsa tempore totam iste? Deserunt iure harum quaerat nesciunt eveniet ratione cum repudiandae provident illum, laudantium hic libero ducimus sapiente officiis pariatur, blanditiis odit dicta eaque minima esse eum quod fugit cupiditate voluptas. Quaerat ipsam ducimus odio obcaecati at repellendus natus enim ab! Nostrum ut earum facilis quasi, facere neque veniam repellat illum voluptas magnam ipsam veritatis molestias. Quo ipsum, magni asperiores nostrum, repellat saepe, ullam voluptatem sunt aut beatae corrupti ducimus debitis. Accusamus dicta consequatur odit rem sit quasi fugiat. Modi neque ullam, aliquam odit in officia deleniti optio earum vel nobis labore expedita cupiditate. Quis ratione laborum sit animi quod vero, harum totam eum sequi aliquam praesentium earum aspernatur reiciendis eveniet quia. Eaque nemo, nihil voluptas, illo assumenda dolore quas fuga iure recusandae asperiores odio eos! Mollitia itaque ipsum harum quasi facilis dolore doloremque perspiciatis reiciendis odio fuga pariatur ipsa sequi amet, assumenda deserunt quisquam modi illo nesciunt tenetur nihil aliquam nisi repudiandae. Unde veniam omnis sunt itaque laboriosam nobis cumque dolorum autem quos perspiciatis, reiciendis eveniet natus recusandae illo! Aspernatur eos dolore pariatur dolorem accusamus velit ex soluta porro labore eum quas ullam ipsum, consectetur similique provident maiores nam. Deleniti unde recusandae eos blanditiis vero! Dolore, quam vitae temporibus voluptatibus ea corporis necessitatibus adipisci minus laboriosam aut numquam, suscipit odit explicabo qui quo iure ex.`





23-ստեղծում եք ֆունկցիա, որը կաշխատի ֆակտորիալ ֆորմուլայով

function faktorial(tiv){
    let a = 1;
    for(i = 1;i <= tiv;i++){
        a *= i
        if(i === tiv){
            console.log(a)
        }
    }
}
faktorial(5)


24-ստեղծում եք ֆունկցիա, որը կաշխատի ֆիբոնաչի ֆորմուլայով
function fibonachi (ar0,ar1){
    let arr =[ar0,ar1]
    let i = 2;
    while(i < 52){
        arr[i]= arr[i-2] + arr[i-1];
        i++
    }
    return arr
}

console.log(fibonachi(0,1))

25-ստեղծում եք ֆունկցիա, որը որպես արգումենտ ստանում ա ինչ-որ հայտնի շենք/կառույց, ու վերադարձնում ա էդ շենքի պարամետրերը (բարձրություն, լայնություն, քմ և այլն)
function shenq(arg){
    if(arg ==="tiv 111dproc"){
        console.log("բարձրություն-30մետր,լայնությունը-45 մետր երկարությունը-204 մետր" )
    }else{
        console.log("հարցման պատասխանը չի գտնվել")
    }
}
shenq("tiv 111dproc")


let a = "";

for(let i = 1;i <=7;i++){
    for(let j = 1; j<= 7 ;i++){
        a += "*"
    }
    a += "\n"
}
v
console.log(a)





ստեղծում եք ֆունկցիա, որը իր մեջ ստեղծում է մեքենաներ (արգումենտներով), որ ամեն կանչելուց կարողանաք այլ պարամետրեր տալ ու ստանալ տարբեր մեքենաներ
function meqena(arg){
    let bmw = "the brand’s luxurious three-row SUV. While its cargo area and rearmost seats aren’t as spacious as rivals such as the Jeep Grand Wagoneer and Mercedes-Benz GLS-class, the Bimmer boasts better driving manners as well as an impressive selection of engines. They range from a 375-hp turbo-six to a 523-hp twin-turbo V-8, with the latter making 630 horses on the highest-class, max-performance Alpina XB7. All models have all-wheel drive and an adaptive air suspension that promotes a pillow-like ride. The 2023 X7’s interior is serene, but it’s also packed with upscale materials and modern tech such as the dash’s giant curved glass display. Those features, combined with the X7’s towing capability and an array of standard active-safety tech, make the biggest BMW one of the best."
    let nisan = "В любом приключении вы можете положиться на свой Nissan X-Trail. Вы будете чувствовать больше комфорта и меньше усталости даже в долгих поездках благодаря передним сидениям Zero Gravity с премиальной обивкой салона Alcantara® цвета «кофе» Впустите больше вдохновения через панорамную крышу с электроприводом! Nissan X-Trail — билет для всей семьи на первый ряд в театр небесных представлений."
let GLS500 ="Mercedes-Benz GLS 500-ը համալրված է 455 ձիաուժ հզորությամբ բենզինային 8 մխոցանի շարժիչով։ Այն ակնթարթորեն արձագանքում է վարորդի հրամաններին և օպտիմալ ոլորող մոմենտով նույնիսկ ցածր պտույտների դեպքում: Այս մոդիֆիկացիայի մեջ ամենագնացի առավելագույն արագությունը 250 կմ/ժ է։ Հանգստավայրից մինչև 100 կմ/ժ արագություն 5,3 վայրկյանում արագացնելու ունակության շնորհիվ դուք անհասանելի կլինեք ուղու վրա և կկարողանաք ավելի ապահով մանևրել:"
if(arg === "GLS500"){
   console.log(GLS500) 
}else if(arg === "bmw"){

    console.log(bmw) 
}else{
    
   console.log(nisan) 

}
}
meqena("bmw")


ստեղծում եք 2 զանգված, որտեղ առաջինում պետք է լինեն և բացասական և դրական թվեր, ու for loop-ի միջոցով զանգվածից հանեք դրական թվերը, իսկ բացասականները դրեք 2րդ դատարկ զանգվածի մեջ

ստեղծում եք օբյեկտ, որտեղ նկարագրում եք մարդու, որը ունի ընկերներ, ստատուսներ, սև ցուցակի մեջ մարդիկ, լայքեր, էլ. հասցե, հեռախոս, գաղտնաբառ և այլն (նմանեցնել Ֆեյսբուքին)
let person = {
    name:'vazgen',
    friends:128,
    letter:4512,
    blackList:["aram","karen","sharlota","tomas"],
    like:6872,
    telNumber: "015 12-23-45",
    mail: "info@template.am",
    password:"thyetyuht"

}
console.log(person.blackList)


ստեղծում եք զանգված, ու մեջը 10 հատ օբյեկտ, ամեն օբյեկտում ձեր նախընտրած մարդկանց մասին մի քանի ինֆորմացիա՝ անուն ազգանուն, տարիք, մասնագիտություն ու ազգություն, հետո loop-ի միջոցով էդ օբյետկտերի մարդկանց անունները տպում եք կոնսոլում
let arr = [

    {name:"garik",
    lastName:"gasparyan",
    age:25
    },
    {
        name:"garik  ",
        lastName:"xachatrjan",
        age:45

    },
    {
        name:"ashot",
        lastName:"davtjan",
        age:31
    },
    {
        name:"gurgen",
        lastName:"hovsepjan",
        age:51
    },
    {
        name:"zaven",
        lastName:"antonjan",
        age:34
    },
    {
        name:"hayk",
        lastName:"jivanjan",
        age:62
    },
    {
        name:"tatev",
        lastName:"ajvazjan",
        age:16
    },
    {
        name:"lilit",
        lastName:"karlenjan",
        age:25
    },
    {
        name:"lusine",
        lastName:"korynjan",
    },
    {
        name:"karo",
        lastName:"zavenjan",
        age:46
    }


]
console.log(arr[1].name,arr[2].name,arr[3].name,arr[4].name,arr[5].name,arr[6].name,arr[7].name,arr[8].name,arr[9].name,)



ի՞նչ կստանանք կանսոլում ԿԱՐԵՎՈՐ Է ՈՐ ԱՌԱՆՑ ԿՈՆՍՈԼ ԱՆԵԼՈՒ ՊԱՏԱՍԽԱՆԵՔ !!!!!!!!!!
typeof true typeof false typeof function () {} typeof null typeof [] typeof {} typeof " " typeof 0 typeof 1 typeof NaN typeof undefined typeof Object typeof Object() typeof Array typeof Array() typeof Boolean typeof Bollean()

NaN || 2 || undefined

NaN

NaN && 2 && undefined

undefined

1 && 2 && 3
3

!1 && 2 || !3
false

25 || null && !3
null

NaN || null || !3 || undefined || 5
null

NaN || null && !3 && undefined || 5
null

5 === 5 && 3 > 1 || 5
true

10 <= 8 && !9 || 10 > 5
true
const a = true, b = false; console.log(!a) console.log(!b)
false
true

const a = true, b = false, c = 4; console.log(a || b); console.log(b || b); console.log((c>2) || (c<2));
true
false
true

const a = true, b = false; const c = 4; console.log(a && a); console.log(a && b); console.log((c > 2) && (c < 2));
false
true
false
const a = 2, b = 'hello'; console.log(a !== 2); console.log(a !== '2'); console.log(b !== 'Hello');
false
true
true

console.log( true || true ); console.log( false || true ); console.log( true || false ); console.log( false || false );
true
true
true
false
Ինչ կստանանք կոնսոլի մեջ let x = 4; do { console.log("FALSE"); x++; } while (x > 4 && x > 6)
FALSE
console.log( 1 || 0 ); console.log( null || 1 ); console.log( null || 0 || 1 ); console.log( undefined || null || 0 ); console.log( null || 2 && 3 || 4 );
1,1,1,0,3
if (-1 || 0) console.log( 'first' ); if (-1 && 0) console.log( 'second' ); if (null || -1 && 1) console.log( 'third' );
first
third
console.log(!undefined); console.log(!null); console.log(!20); console.log(!0); console.log(!NaN); console.log(!{}); console.log(!''); console.log(!'OK'); console.log(!false); console.log(!true);

const a = 5, b = 10; (a != b) && (a < b); (a > b) || (a == b); (a < b) || (a == b); !(a < b); !(a > b); 
true
false

ստեղծում եք զանգված, ու մեջը 10 հատ օբյեկտ, ամեն օբյեկտում ձեր նախընտրած մարդկանց մասին մի քանի ինֆորմացիա՝ անուն ազգանուն, տարիք, մասնագիտություն ու ազգություն, հետո loop-ի միջոցով էդ օբյետկտերի մարդկանց անունները տպում եք կոնսոլում

*/

