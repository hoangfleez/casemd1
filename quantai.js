class Coffin {
    constructor(x, y, a, b) {
        this.x = x;
        this.y = y;
        this.a = a;
        this.b = b;
        this.canvas = document.getElementById('gamezone');
        this.ctx = this.canvas.getContext("2d");

    }

    draw() {
        let img = document.getElementById("qt");
        this.ctx.drawImage(img, this.x, this.y, this.a, this.b);
    }
}

