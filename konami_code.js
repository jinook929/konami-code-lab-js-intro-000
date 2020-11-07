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
    if(key === "ArrowUp") {
      document.body.addEventListener("keydown", e => {
        key = e.key;
        if(key === "ArrowDown") {
          alert("ArrowUp!!!");
        }
      
    }
  });
}

init();