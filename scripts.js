const wpawn1 = document.getElementById('wpawn1');
const square7a = document.getElementById('7a');
const square7b = document.getElementById('7b');

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id)
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById);
}