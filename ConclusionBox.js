class ConclusionBox {
    constructor(ctx, x, y, t) {
        this.text = t;

        ctx.font = "48px sans-serif"

        this.w = ctx.measureText(this.text).width + 20
        this.h = ctx.measureText(this.text).actualBoundingBoxAscent + ctx.measureText(this.text).actualBoundingBoxDescent + 10

        this.x = x - this.w / 2
        this.y = y - this.h / 2


    }

    draw() {


        ctx.font = "48px sans-serif"

        ctx.fillStyle = "#ff600b"
        ctx.fillRect(this.x, this.y, this.w, this.h)
        ctx.fillStyle = "#FFFFFF"
        ctx.fillText(this.text, this.x + 10, this.y + this.h - 5, this.w - 10)

    }
}