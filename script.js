const headline = "Recursion"
const bottomText = "You gotta know when to quit."

window.onload = () => {
    document.getElementById('container').innerHTML = recurse_poster(72, 1024, 5);
}

const delay = t => new Promise(resolve => setTimeout(resolve.bind(null), t));

const spanFirstLast = s => {
    const [ f, m, l ] = [ s.slice(0, 1), s.slice(1, -1), s.slice(-1) ];
    return `<span>${f}</span><span>${m}</span><span>${l}</span>`
};

const recurse_poster = (factor=65, x=1024, small=25) => {
    if (x*(factor/100) <= small) return '';
    const inner = recurse_poster(factor, x*(factor/100), small);
    return `
        <div class="poster" style=" transform: scale(${factor/100}, ${factor/100})">
            <div class="inner">${inner}</div>
            <h3>${spanFirstLast(headline.toUpperCase())}</h3>
            <h5>${bottomText}</h5>
        </div>
    `;
}
