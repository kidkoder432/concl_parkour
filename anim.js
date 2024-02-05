// All the animations and UX logic

function instr() {
    let e = document.getElementById("helpdd")
    e.scrollIntoView({
        behavior: "smooth", // Optional: Smooth scrolling behavior
        block: "start", // Optional: Align to top of container
        inline: "nearest" // Optional: Align to nearest edge within viewport
    });
}