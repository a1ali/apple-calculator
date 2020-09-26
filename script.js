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
let number = [];
let val = [];
let operation = '';



function updateScreen(){
    if (val.length < 11){
        let x = val.join("");
        console.log(x);
        screen.textContent = x;
    }
}

function clearScreen(){
    screen.textContent = "";
    val = [];

}


clear.addEventListener('click', function(){
    console.log('clear is pressed');
    clearScreen();

})
posNeg.addEventListener('click', function(){
    console.log('posNeg is pressed');
})
percent.addEventListener('click', function(){
    console.log('percent is pressed');
})
divide.addEventListener('click', function(){
    console.log('divide is pressed');
})
seven.addEventListener('click', function(){
    console.log('seven is pressed');
    val.push(7);
    updateScreen();
})
eight.addEventListener('click', function(){
    console.log('eight is pressed');
    val.push(8);
    updateScreen();
})
nine.addEventListener('click', function(){
    console.log('nine is pressed');
    val.push(9);
    updateScreen();
})
multiply.addEventListener('click', function(){
    console.log('multiply is pressed');
})
four.addEventListener('click', function(){
    console.log('four is pressed');
    val.push(4);
    updateScreen();
})
five.addEventListener('click', function(){
    console.log('five is pressed');
    val.push(5);
    updateScreen();
})
six.addEventListener('click', function(){
    console.log('six is pressed');
    val.push(6);
    updateScreen();
})
subtract.addEventListener('click', function(){
    console.log('subtract is pressed');
})
one.addEventListener('click', function(){
    console.log('one is pressed');
    val.push(1);
    updateScreen();
})
two.addEventListener('click', function(){
    console.log('two is pressed');
    val.push(2);
    updateScreen();
})
three.addEventListener('click', function(){
    console.log('three is pressed');
    val.push(3);
    updateScreen();
})
add.addEventListener('click', function(){
    console.log('add is pressed');
    
})
dot.addEventListener('click', function(){
    console.log('dot is pressed');
})
zero.addEventListener('click', function(){
    console.log('zero is pressed');
    val.push(0);
    updateScreen();
})
equal.addEventListener('click', function(){
    console.log('equal is pressed');
})


/*

have 3 arrays one is going to hold the current number the other hold the other
the third will hold both.
when a user clicks an operand the two numbers exceute the operation and the result
is stored in the first value of the 3rd arr. 

*/


