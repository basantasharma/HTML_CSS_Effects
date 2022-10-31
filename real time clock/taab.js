function clock(){
    var rtcloc = new Date();
    var hours = rtcloc.getHours();
    var minutes = rtcloc.getMinutes();
    var seconds = rtcloc.getSeconds();

var ampm = (hours<12) ? "AM" : "PM";
hours = (hours>12)? hours-12:hours;

hours=("0"+ hours).slice(-2);
minutes=("0"+ minutes).slice(-2);
seconds=("0"+ seconds).slice(-2);

document.getElementById('cloc').innerHTML = hours + ":" + minutes + ":" + seconds + ":" + ampm;
var t= setTimeout(clock , 500);

}


const canvas = document.getElementById('matrix');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const firstline = '10101001000101010110010101010101010101010101010101010100110101001010011010101001010101010101010101010101010101010101010101010100101010101010101010011010101001010101010010101010101001010101001100101010101001000101001100110010101001101010101011001010101';
const secline = '001010110100101010101010100101010101010101010101010101010110110111111010101010';
const thirline = '10101010101010101010110101010100101010101010101010101101101110101101011010011010110101011010110101101010101010101010011101010101110110111000110101110101011011011010';
const alphabet = firstline + secline + thirline;
const fontSize = 16;
const columns = canvas.width/fontSize;
const rainDrops = [];

for( let x = 0; x < columns; x++ ) {
    rainDrops[x] = 1;
}

const draw = () => {
    context.fillStyle = 'rgba(0, 0, 0, 0.05)';
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    context.fillStyle = '#0F0';
    context.font = fontSize + 'px monospace';

    for(let i = 0; i < rainDrops.length; i++)
    {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        context.fillText(text, i*fontSize, rainDrops[i]*fontSize);
        
        if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
};
setInterval(draw, 30);

