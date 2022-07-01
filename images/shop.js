const h = document.getElementsByTagName('h1');

for (const p of h) {
    p.style.color = 'lightblue';
}

// watch section 
document.getElementById('watch').style.backgroundColor = 'tomato';

// card 
const border = document.getElementsByClassName('card');
for (const radious of border) {
    radious.style.borderRadius = '30px';
}

// button 
function clicked() {
    console.log('hgfdyufhgv');
}

function banis(event) {
    event.target.remove(event.target);
}

document.getElementById('text').addEventListener('keyup', function(even) {
    // const textIn = document.getElementById('text');
    // if (textIn.value == 'email') {
    //     document.getElementById('but').enable = true;
    // }
    const butt = document.getElementById('but');
    if (even.target.value == 'email') {
        butt.removeAttribute('disabled');
    } else {
        butt.setAttribute('disabled', true);
    }
})