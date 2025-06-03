
document.addEventListener("DOMContentLoaded", otoslotto);

console.log("teszt")
function otoslotto() {
    let szamok = new Set();
    console.log(szamok)
    while (szamok.size < 5) {
        let szam = Math.floor(Math.random() * 90) + 1;
        szamok.add(szam);
    }

    let rendezett = Array.from(szamok).sort((a, b) => a - b);
    console.log(rendezett)
    document.getElementById("nyeroszamok").textContent = 
    "Sorsolt számok: " + rendezett.join(", ");
}