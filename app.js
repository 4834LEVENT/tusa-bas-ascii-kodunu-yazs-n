

let par1 = document.getElementById("par1");
let par2 = document.getElementById("par2");
let body = document.getElementById("bod");
let bilgituş = document.addEventListener("keydown", (e) => {
  par1.innerHTML =
    "You pressed any key in keyboard: " + "<br>" + e.key.toUpperCase();
});
let bilgichar = document.addEventListener("keydown", (e) => {
  par2.innerText = "Ascii Code :" + e.keyCode;
  par2.style.width = "250px";
  par2.style.height = "60px";

  let renk1 = Math.floor(Math.random() * 255);
  let renk2 = Math.floor(Math.random() * 255);
  let renk3 = Math.floor(Math.random() * 255);
  let rgb = `rgb(${renk1},${renk2},${renk3})`;
  body.style.backgroundColor = rgb;
});

par1.style.width = "250px";
par1.style.height = "100px";
par1.style.backgroundColor = "gray";

par2.style.backgroundColor = "gray";

let div = document.getElementsByTagName("div");

let pa = document.querySelectorAll("p");

pa.forEach((x) => (x.style.textAlign = "center"));
