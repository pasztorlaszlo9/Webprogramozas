document.addEventListener('DOMContentLoaded', setupImageDiv);

const originalImage = './img/kezdő.jpg';
const tempImage = './img/második.jpg';

console.log("tezst");
function setupImageDiv() {
    console.log("tezst2");
    const div = document.getElementsByClassName('container')[0];
    console.log(div);

    Object.assign(div.style, {
        width: '300px',
        height: '300px',
        backgroundImage: `url('${originalImage}')`,
    });

    div.addEventListener('click', () => {
        div.style.backgroundImage = `url('${tempImage}')`;
        div.style.width = '480px';
        div.style.height = '480px';
        setTimeout(() => {
            div.style.width = '300px';
            div.style.height = '300px';
            div.style.backgroundImage = `url('${originalImage}')`;
        }, 2000);
    });


}