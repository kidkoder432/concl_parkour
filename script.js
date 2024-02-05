const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");


let mouseX, mouseY;
addEventListener("mousemove", function (e) {
    mouseX = e.x * devicePixelRatio;
    mouseY = e.y * devicePixelRatio;

})

let boxes = [];
let jump;

addEventListener("keydown", function (e) {
    if (e.key === " ") {
        vel = 20
        jump = false
    }
})


let vel = 0
let accel = 9.81


let scale = devicePixelRatio
canvas.width = window.innerWidth * scale
canvas.height = window.innerHeight * scale

let w = 25
let h = 50
let x = canvas.width / 3 - w/2
let y = canvas.height * .5

boxes.push(new ConclusionBox(ctx, canvas.width / 2, canvas.height * .4, randomString(20)))

function draw() {

    scale = devicePixelRatio
    canvas.width = window.innerWidth * scale
    canvas.height = window.innerHeight * scale

    ctx.fillStyle = "#232323"
    ctx.fillRect(0, 0, canvas.width, canvas.height);



    y -= vel;
    if (y >= canvas.height - h) {

        y = canvas.height - h
    }


    vel -= accel / 10;


    for (let box of boxes) {
        box.x -= 9
        box.draw()

        if (box.x < -box.w) {
            boxes.pop()
        }
        ctx.fillStyle = "#ffffff"
        ctx.fillRect(box.x, box.y, 10,10)
        if (collision(x, y, w, h, box.x, box.y, box.w, box.h)) {
            if (y > box.y) {
                vel = 0;
                y = box.y + box.h
            }
            else {
                vel = 0;
                y = box.y - h;
            }
        }

    }




    if (boxes.length === 0) {
        boxes.push(new ConclusionBox(ctx, canvas.width + 500, canvas.height * .4, randomString(20)))

    }

    ctx.fillStyle = "#2eb3da"
    ctx.fillRect(x, y, w, h)

    // ctx.fillStyle = "#ffffff"
    // ctx.fillRect(x, y, 10, 10)

}


draw()

function start() {
    e = document.getElementById("intro")
    e.classList.add("animate")
    e.addEventListener("animationend", () => {
        setInterval(draw, 10)
    })


}
