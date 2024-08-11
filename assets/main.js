const c = document.getElementById("matrix");
const ctx = c.getContext("2d");
const canvasWidthPercentage = 0.8;
c.height = window.innerHeight;
c.width = window.innerWidth * canvasWidthPercentage;
var letters = ["ﾊ","ﾐ","ﾋ","ｰ","ｳ","ｼ","ﾅ","ﾓ","ﾆ","ｻ","ﾜ","ﾂ","ｵ","ﾘ","ｱ","ﾎ","ﾃ","ﾏ","ｹ","ﾒ","ｴ","ｶ","ｷ","ﾑ","ﾕ","ﾗ","ｾ","ﾈ","ｽ","ﾀ","ﾇ","ﾍ",":","・",".","=","*","+","-","<",">","¦","｜","ﾘ"];
const fontSize = 27;
const dropSpacing = 1.5;
const columns = c.width / (fontSize * 0.6);
const drops = new Array(Math.floor(columns)).fill(1);

function draw() {
    
    ctx.fillStyle = "rgba(0, 0, 0, 0.09)";
    ctx.fillRect(0, 0, c.width, c.height);

    
    ctx.fillStyle = "#40e07d"; 
    ctx.font = `${fontSize}px arial`;

    for (let i = 0; i < drops.length; i++) {

        const text = letters[Math.floor(Math.random() * letters.length)];
        const yPos = drops[i] * (fontSize + dropSpacing);
        ctx.fillText(text, i * fontSize, yPos);

        if (yPos > c.height && Math.random() > 0.95) {
            drops[i] = 0;
        }

        drops[i] += 0.8;
    }

    setTimeout(function() {
        window.requestAnimationFrame(draw);
    }, 48); 
}

draw();
