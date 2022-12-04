let LCounter = document.getElementById("LCounter");
let count = document.getElementById("count");

function updateCount() {
  count.innerHTML = LCounter.value.length;
}

LCounter.oninput = updateCount;