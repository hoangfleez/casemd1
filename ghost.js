// let a = document.getElementById('gamezone');
// let ctx = a.getContext('2d');
// let img = document.getElementById('anh');
//
// function draw() {
//     ctx.drawImage(img, 0, 500, 100, 90)
// }


class Ghost {
    constructor(x, y, a, b) {
        this.x = x;
        this.y = y;
        this.a = a;
        this.b = b;
        this.canvas = document.getElementById('gamezone');
        this.ctx = this.canvas.getContext("2d");


    }

    draw() {
        let img= document.getElementById("anh");
        this.ctx.drawImage(img, this.x, this.y, this.a, this.b);
    }
}
let ghost = new Ghost(200, 600, 90,90);


