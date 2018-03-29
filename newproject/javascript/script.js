var number = Math.floor(10*Math.random())+ 1;
console.log(number);
var count = 3;

document.getElementById('check').onclick = function() {
    if (count>0) {
        var userNum = document.getElementById('myNum').value;
        userNum = parseInt(userNum);
        var out = document.getElementById('out');

    if (userNum == number) {
        out.innerHTML = 'You guessed!';
        alert('You won. This page will be reloaded')
        location.reload();
    }
    else if(userNum > number) {
        out.innerHTML = 'over than';
    }
    else {
        out.innerHTML = 'less than';
        }
        count--;
        document.getElementById('count').innerHTML = 'Attempts remaining: ' +count;
    }
    else {
        alert('You lost. This page will be reloaded');
        location.reload();
    }
}