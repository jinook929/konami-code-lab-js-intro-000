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
  document.body.addEventListener("keydown", e1 => {
    key = e1.key;
    if(key === "ArrowUp") {
      document.body.addEventListener("keydown", e2 => {
        key = e2.key;
        if(key === "ArrowDown") {
          alert("Arrow Up & Down !!!");
        }
      });
    }
  });
}

init();