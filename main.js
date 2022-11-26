let canvas = document.getElementById('gamezone');
let context = canvas.getContext('2d');
let diem = document.getElementById('d');

let hulkimg = new Image();
hulkimg.src = "anh/hulk1.png";

let nen = new Image()
nen = "anh/nenchinh.png";

let quan = new Image()
quan = "anh/quan.png";


let score=0;
let hulk={
    x: nen.width/2.5,
    y: nen.high/5,
}

function run(){
    context.drawImage(nen,0,0);
    context.drawImage(hulkimg,hulk.x,hulk.y);
    requestAnimationFrame(run)
}
run()