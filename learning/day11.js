// String it represents text 
console.log("Hello");
console.log("some"+ " text");
console.log(typeof("Hello"));
console.log(typeof("Hello3"));
console.log("Hello"+3); //Hello3 will be directly converted to string.
console.log("$"+(2095+799)/100);
console.log("Items("+(1+1)+"):"+"      $"+(2095+799)/100 );


// Ways to create the String
// 1.'.....'
// 2."......"  " I'm learning Javascript "
// escape character = \'  \"
// \n ==== new line

// we can also use ( ` .... `  ) they are called template Strings 
// they have special feature [ Interpolation = entering directly value to String   ]
console.log(`Items(${1+1}):     $${(2095+799)/100}`);
// ${...} ===== helps to directly insert values in string
// Multi-line string
console.log( `some
 text`)

//  In this i learn 
//  1. string = Text
//  2. USe string and number together
//  3. Three ways to create strings:
//  ' ...... ' , " ...... " , ` ...... ` (template strings)
//  4. Escape character: \'  , \n
//  5. Interpolation , Multi-line strings

// ----------------- Practise---------------------------

text = 'My Name is:'
name = "Kripesh raj panta"
console.log(`${text} ${name}`);

coffee = 5;
bagel = 3;

cost = coffee + bagel;
text= "Total cost: $"
console.log(`${text}${cost}\n\n`);

// --------------------challenge-----------------------

basketballs = 2095;
shipping = 499;
t_shirts = 799;

itemstotal = (2*basketballs+2*t_shirts) ;
shippingcharge = (shipping*2); 
total = itemstotal + shippingcharge;
tax = Math.ceil((total*0.1));

console.log(`Item(${2+2}):                  $${itemstotal/100}`);
console.log(`Shipping & handling:      $${shippingcharge/100}`);
console.log(`Total before tax:         $${total/100}`);
console.log(`Estimate tax(10%):        $${tax/100}`);
console.log(`Order total:              $${(total+tax)/100}`);





