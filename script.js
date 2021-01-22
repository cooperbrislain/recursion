window.onload = () => {
    document.getElementById('container').innerHTML = recurse_poster(80, 1024, 25);
}

function recurse_poster(factor=80, x=1024, small=25) {
    console.log(x*(factor/100));
    if (x*(factor/100) <= small) return '';
    const inner = recurse_poster(factor, x*(factor/100), small);
    return `
        <div class="poster" style=" transform: scale(${factor/100}, ${factor/100})">
            <div class="inner">
                ${inner}
            </div>
            <h3>Recursion</h3>
            <h5>You gotta know when to quit.</h5>
        </div>
    `;
}
