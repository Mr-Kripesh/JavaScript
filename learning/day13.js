// --------------------String---------------------

'hello';  
"hello";
// there are 2 ways to create string but using single quote is nice and pratical.
console.log('I\'m learning Javascript');


console.log('hello');
console.log('some'+' text');
console.log('some'+' more'+' text');
// combining multiple strings together is called concatenation

console.log(typeof('hello')); 
//------String
console.log('hello'+3);  
//----------String it comibine 3 as string
string = 'hello ' + 3;
console.log(typeof(string));


console.log('$'+20.95+7.99);
 
// javascript automatically starts assuming it as string if string is used first.

console.log('20.95'+7.99);
console.log('$'+(20.95+7.99));
console.log('$'+(2095+799)/100);
console.log('Items('+(1+1)+'): '+'$'+(2095+799)/100);

//using interpolation
console.log(`Item(${1+1}): $${(2095+799)/100}`);
console.log(`some
    text`);
// as we have interpolation so it shows some\ntext
//we can use '......' by default
// is we need interpolation, multi-line strings we use `......` 


// Practise 


console.log(`**********Practise**********`);
firstname= 'Kripesh';
middlename = 'raj';
lastname = 'panta';
console.log(`\nMy name is: ${firstname} ${middlename} ${lastname}`);

console.log('***********3d**************');
coffee = 5;
bagel = 3;
total = coffee+bagel;
console.log(`Total cost:$${total}`);
// This is called concatenation

console.log('************3e****************');
coffee1 = 599;
bagel1 = 295;
total = coffee1+bagel1;
console.log(`Total cost:$${total/100}\nThank you, come again!`);


console.log('*******************Challenge Exercise****************');
basketball=2095;
t_shirt = 799;
shipping = 499;
sub_total = (2*basketball+2*t_shirt)/100 + (shipping*2)/100;
tax = Math.round(sub_total*(10/100));
total = sub_total + tax;
console.log(`Items(${2+2}): $${(2*basketball+2*t_shirt)/100}\nShipping & handling: $${(shipping*2)/100}\nTotal before tax: $${sub_total}\nEstimated tax(10%): $${tax}\nOrder total: $${total}`);























