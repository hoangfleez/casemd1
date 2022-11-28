// Ghost
let ghost1 = new Ghost(24, 40, 50, 50);
ghost1.draw()
let ghost2 = new Ghost(169, 40, 50, 50);
ghost2.draw()
let ghost3 = new Ghost(315, 40, 50, 50);
ghost3.draw()

// //Quan tài
// let coffin1 = new Coffin( 0, 10, 100, 100);
// coffin1.draw()
// let coffin2 = new Coffin( 145, 10, 100, 100);
// coffin2.draw()
// let coffin3 = new Coffin( 290, 10, 100, 100);
// coffin3.draw()





function init() {
    ghost1.run();
    ghost1.draw();
}
setInterval(() => {
    init()
}, 100)