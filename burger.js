const burger=document.querySelector('.burger')
const  center = document.querySelector('.center')
const but=document.querySelector('.but')
const restart=document.querySelector('.restart')

let bosh= []

const cheese=document.querySelector('.chees')
cheese.addEventListener("click", function () {
    const chs = document.createElement("img");
    chs.className = "chs"
    chs.setAttribute("src", "images/cheese.svg");
    center.appendChild(chs)
});
const onion=document.querySelector('.onion')
const butonion = document.querySelector(".onion");
butonion.addEventListener("click", function () {
    const onion = document.createElement("img");
    onion.className = "onionsr"
    onion.setAttribute("src", "images/onion.svg");
    center.appendChild(onion)
});
const salad=document.querySelector('.salad')
const metbtn=document.querySelector('.meet')
metbtn.addEventListener("click", function () {
    const meat = document.createElement("img");
    meat.className = "metbr"
    meat.setAttribute("src", "images/meat.svg");
    center.appendChild(meat)
});
salad.addEventListener("click", function () {
    const sl = document.createElement("img");
    sl.className = "onionsr"
    sl.setAttribute("src", "images/salad.svg");
    center.appendChild(sl)
});
const pickle=document.querySelector('.pickle')
pickle.addEventListener("click", function () {
    const pck = document.createElement("img");
    pck.className = "pck"
    pck.setAttribute("src", "images/pickle.svg");
    center.appendChild(pck)
});
const tomato=document.querySelector('.tomato')
tomato.addEventListener("click", function () {
    const to = document.createElement("img");
    to.className = "to"
    to.setAttribute("src", "images/tomato.svg");
    center.appendChild(to)
});
but.addEventListener("click", function () {
    let random = Math.floor(Math.random() * (35 - 10 + 1)) + 10;
    alert("Marhamat buyurtmangiz  " + random + "№")
});
restart.addEventListener("click", function () {
    center.innerHTML = '';
});
center.addEventListener("click" , function(e) {
    center.removeChild(e.target)
})



