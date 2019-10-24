const lightswitch = document.getElementById("lightswitch");
const hole = document.getElementById("hole");
const plate = document.getElementById("plate");
const body = document.querySelector("body");
let toggle = 1;

lightswitch.addEventListener(`click`, flick);

function flick() {
    if (toggle === 0) {
        hole.removeAttribute("style");
        toggle = 1;
        lightswitch.classList.remove("lightswitch-off");
        lightswitch.classList.add("lightswitch-on");
        hole.classList.remove("hole-off");
        hole.classList.add("hole-on");
        plate.classList.remove("plate-off");
        plate.classList.add("plate-on");
        body.removeAttribute("style");
    } else {
        hole.style.alignItems = "end";
        toggle = 0;
        lightswitch.classList.remove("lightswitch-on");
        lightswitch.classList.add("lightswitch-off");
        hole.classList.remove("hole-on");
        hole.classList.add("hole-off");
        plate.classList.remove("plate-on");
        plate.classList.add("plate-off");
        body.style.background = "hsla(300, 35%, 13%, 1)";
    }
    return;
}
