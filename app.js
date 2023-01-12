//  const firstp = document.querySelector("p")
// console.log(firstp);

// let p1 = document.getElementById("p1")

// let allp = document.querySelectorAll("p")

// allp.forEach(x=> {
//   x.style.backgroundColor="blue"
//   x.style.color="white"
//   x.style.border = "2px solid red"
//   x.style.width ="200px"
//   x.style.fontSize ="2rem"

// })

// let div = document.getElementsByTagName("div")
// console.log(div);

// div[0].style.display = "flex"
// div[0].style.justifyContent = "space-around"

// let tekler = document.querySelectorAll("p:nth-child(odd)")

// console.log(tekler);

// let çift = document.querySelectorAll("p:nth-child(even)")

// console.log(çift);

// tekler.forEach(x=> x.style.backgroundColor="red")
// çift.forEach(x=> x.style.backgroundColor="black")

// allp.forEach(x=>x.classList.add("headertitle"))

// allp.forEach(x=>x.classList = "class1 class2 class3")

// console.log(allp);

// allp.addEventListener("keydown",()=>{
//   console.log(allp.textContent="hello");
// })
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
div[0].style.margin = "40% ";
let pa = document.querySelectorAll("p");

pa.forEach((x) => (x.style.textAlign = "center"));
