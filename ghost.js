class Ghost {
    constructor(x, y, a, b) {
        this.x = x;
        this.y = y;
        this.a = a;
        this.b = b;
        this.canvas = document.getElementById('gamezone');
        this.ctx = this.canvas.getContext("2d");


    }
    run(){
        this.ctx.clearRect(this.x,this.y,this.canvas.width,this.canvas.high);
        y+=50;
    }

    draw() {
        let img = document.getElementById("ma");
        this.ctx.drawImage(img, this.x, this.y, this.a, this.b);
    }
}



