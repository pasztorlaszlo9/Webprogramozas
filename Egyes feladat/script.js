console.log("Hello World!");


document.addEventListener("DOMContentLoaded", function () {
    const divs = document.querySelectorAll("div");
    for (let i = 0; i < 5; i++) {
        console.log("hajrá");
        if (i === 0) {
            divs[i].textContent = "Első";
            console.log("hajrá");
        } else if (i === 2) {
            divs[i].textContent = "Harmadik";
            console.log("hajrá2");
        } else if (i === divs.length - 1) {
            divs[i].textContent = "Utolsó";
            console.log("hajrá3");
        } else {
            const indexInBody = Array.from(document.body.children).indexOf(divs[i]);
            divs[i].textContent = indexInBody + 1;
        }
    }
})

// for (let i = 0; i < divs.length; i++) {
//     console.log("hajrá");
//     if (i === 0) {
//         divs[i].textContent = "Első";
//         console.log("hajrá");
//     } else if (i === 2) {
//         divs[i].textContent = "Harmadik";
//         console.log("hajrá2");
//     }
// }
