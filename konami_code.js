const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  let key;
  document.body.addEventListener("keydown", e => {
    key = e.key;
    alert("ArrowUp!!!");
  });
}

init();