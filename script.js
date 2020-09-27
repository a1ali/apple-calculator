let screen = document.getElementById("screen");
const clear =  document.getElementById('clear');
const posNeg =  document.getElementById('pos-neg');
const percent =  document.getElementById('percent');
const divide =  document.getElementById('divide');
const seven =  document.getElementById('seven');
const eight =  document.getElementById('eight');
const nine =  document.getElementById('nine');
const multiply =  document.getElementById('multiply');
const four =  document.getElementById('four');
const five =  document.getElementById('five');
const six =  document.getElementById('six');
const subtract =  document.getElementById('subtract');
const one =  document.getElementById('one');
const two =  document.getElementById('two');
const three =  document.getElementById('three');
const add =  document.getElementById('add');
const dot =  document.getElementById('dot');
const zero =  document.getElementById('zero');
const equal =  document.getElementById('equal');
let total = 0;
let numbers = [];
let val = [];
let operation = '';
let counter = 0;
let overflow = 'test';
let decimalflag = false;


function insertNum(num){
    if (val.length < 11){
        val.push(num);
    }
}

function updateScreen(){
    if (val.length < 11){
        let x = parseFloat(val.join(""));
        console.log(x);
        screen.textContent = x;
        console.log(val);
    }
}

function clearScreen(){
    screen.textContent = "";
    val = [];
    numbers = [];
    operation = '';
    overflow = 'test';
    total = 0;
    decimalflag = false;
}
function updateScreenOperation(){
    if (val.length > 0) {
        //operation = oper;
        let x = parseFloat(val.join(""));
        if (counter === 0){
            numbers[0] = x;
            val = [];
            decimalflag = false;
            counter++;
        }
        else if (counter === 1){
            numbers.push(x);
            val = [];
            decimalflag = false;
            counter = 0;
        }
        if (numbers.length === 2 || operation == 'eq') {
            doMath(operation, parseFloat(numbers[0]), parseFloat(numbers[1]));
        }
        else if (overflow !== 'test'){
            doMath(operation, overflow, parseFloat(x));
        }
}
    //console.log(oper + ' ' + numbers[0] + " " + numbers[1])
}

function doMath(oper, num1, num2) {
    
    switch(oper){
        case 'd':
            total = num1 / num2;
            if (total !== Infinity){
                numbers = [];
                overflow = total;
                screen.textContent = total;
            }
            else{
                screen.textContent = "NaN";
            }
            break;
        case 'm':
            total = num1 * num2;
            numbers = [];
            overflow = total;
            screen.textContent = total;
            break;
        case 's':
            total = num1 - num2;
            numbers = [];
            overflow = total;
            screen.textContent = total;
            break;
        case 'a':
            total = num1 + num2;
            numbers = [];
            overflow = total;
            screen.textContent = total;
           // console.log(num + "i am here")
            break;
        
    }
}

function div() {
    switch(operation){
        case 'm':
         updateScreenOperation('m');
         break;
        case 's':
         updateScreenOperation('s');
         break;
        case 'a':
         updateScreenOperation('d');
         break;
    }
    operation = 'd';
    updateScreenOperation('d');
}
function mul() {
    switch(operation){
        case 'a':
         updateScreenOperation('m');
         break;
        case 's':
         updateScreenOperation('s');
         break;
        case 'd':
         updateScreenOperation('d');
         break;
    }
    operation = 'm';
    updateScreenOperation('m');
}
function sub() {
    switch(operation){
        case 'm':
         updateScreenOperation('m');
         break;
        case 'a':
         updateScreenOperation('s');
         break;
        case 'd':
         updateScreenOperation('d');
         break;
    }
    operation = 's';
    updateScreenOperation('s');
}
function ad() {
    switch(operation){
        case 'm':
         updateScreenOperation('m');
         break;
        case 's':
         updateScreenOperation('s');
         break;
        case 'd':
         updateScreenOperation('d');
         break;
    }
    operation = 'a';
    updateScreenOperation('a');
}

clear.addEventListener('click', function(){
    //console.log('clear is pressed');
    clearScreen();

})
posNeg.addEventListener('click', function(){
    //console.log('posNeg is pressed');
    val.unshift('-');
    console.log(val);
    updateScreen();
})
percent.addEventListener('click', function(){
    //console.log('percent is pressed');
})
divide.addEventListener('click', function(){
    //console.log('divide is pressed');

    div();
    //operation = 'd';
})
seven.addEventListener('click', function(){
    //console.log('seven is pressed');
    insertNum(7);
    updateScreen();
})
eight.addEventListener('click', function(){
    //console.log('eight is pressed');
    insertNum(8);
    updateScreen();
})
nine.addEventListener('click', function(){
    //console.log('nine is pressed');
    insertNum(9);
    updateScreen();
})
multiply.addEventListener('click', function(){
    //console.log('multiply is pressed');

    mul();
    
})
four.addEventListener('click', function(){
    //console.log('four is pressed');
    insertNum(4);
    updateScreen();
})
five.addEventListener('click', function(){
    //console.log('five is pressed');
    insertNum(5);
    updateScreen();
})
six.addEventListener('click', function(){
    //console.log('six is pressed');
    insertNum(6);
    updateScreen();
})
subtract.addEventListener('click', function(){
    //console.log('subtract is pressed');
    sub();
    
})
one.addEventListener('click', function(){
    //console.log('one is pressed');
    insertNum(1);
    updateScreen();
})
two.addEventListener('click', function(){
    //console.log('two is pressed');
    insertNum(2);
    updateScreen();
})
three.addEventListener('click', function(){
    //console.log('three is pressed');
    insertNum(3);
    updateScreen();
})
add.addEventListener('click', function(){
    //console.log('add is pressed');

    ad();
    
    //console.log(operation);
    
})
dot.addEventListener('click', function(){
    //console.log('dot is pressed');
    if (decimalflag == false){
        val.push('.');
        updateScreen();
        console.log(val)
        decimalflag = true;
    }
})
zero.addEventListener('click', function(){
    //console.log('zero is pressed');
    insertNum(0);
    updateScreen();
})
equal.addEventListener('click', function(){
    //console.log('equal is pressed');
    //console.log(operation);
    updateScreenOperation(operation);
    //console.log(operation);
    
})

console.log("numbers arr" +numbers)

/*


have 3 arrays one is going to hold the current number the other hold the other
the third will hold both.
when a user clicks an operand the two numbers exceute the operation and the result
is stored in the first value of the 3rd arr. 

*/


