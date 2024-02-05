letters = "qwertyuiopasdfghjklzxcvbnm"

function randomString(l) {
    let s = ""
    for (let i = 0; i < l; i++) {
        s += letters.at(Math.round(Math.random() * 26))
    }

    return s
}

function fourpointcoord(x, y, w, h) {
    return [[x, y], [x + w, y], [x, y + h], [x + w, y + h]]
}

//Box to box collision detection
// c1 is a list of coords (x,y) for the box
function collision(x1, y1, w1, h1, x2, y2, w2, h2)  {
    // Check if the rectangles overlap on the x-axis.
    if (x1 < x2 + w2 && x1 + w1 > x2) {
        // Check if the rectangles overlap on the y-axis.
        if (y1 < y2 + h2 && y1 + h1 > y2) {
            // The rectangles are colliding.
            console.log("eee")
            return true;
        }
    }

    // The rectangles are not colliding.
    return false;
}
