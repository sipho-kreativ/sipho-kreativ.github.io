const outDiv = document.getElementById("typecontainer");

const txt = 'A design professional and a tech enthusiast!'


let i = 0;

const intervalId = setInterval(function() {
    outDiv.innerHTML += txt[i];
    i++;

    if (i === txt.length) {
    clearInterval(intervalId);
    }

},170);

