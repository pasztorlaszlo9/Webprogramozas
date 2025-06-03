document.addEventListener('DOMContentLoaded', () => {
    console.log('Script loaded');


function fullStack(frontEnd, backEnd) {
    const frontEndDevs = frontEnd.split(';');
    const backEndDevs = backEnd.split(';');

    return frontEndDevs.filter(name => backEndDevs.includes(name));
}

const result1 = fullStack('Zsiros B. Odon;Koaxk Abel;Heu Reka;Riz Otto',
    'Riz Otto;RabszOlga;Trab Antal;Koaxk Abel;Winch Eszter');

console.log(result1);

const result2 = fullStack('Citad Ella;Techno Kolos', 'Git Aron;Teask Anna')

console.log(result2);
})