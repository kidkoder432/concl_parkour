// All the animations and UX logic

function instr() {
    let e = document.getElementById("helpdd")
    e.scrollIntoView({
        behavior: "smooth", // Optional: Smooth scrolling behavior
        block: "start", // Optional: Align to top of container
        inline: "nearest" // Optional: Align to nearest edge within viewport
    });
}

function start() {

    console.log("asdf")
    e = document.getElementById("intro")
    e.classList.add("animate")
    e.addEventListener("animationend", () => {
        setInterval(draw, 10)
    })

}

function pause() {
    paused = true;
    let el = document.getElementById("pause")

    el.classList.remove("animate")
    el.classList.add("blur")
    console.log(el.classList)
}

function unpause() {
    paused = false;
    let el = document.getElementById("pause")

    el.classList.remove("blur")
    el.classList.add("animate")
    console.log(el.classList)
}