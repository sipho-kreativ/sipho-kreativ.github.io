const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";

function mouseStopped(){
    cursor.style.display = "none"
}

clearTimeout(timeout);
timeout = setTimeout(mouseStopped, 1000);
});

document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
});

document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
});