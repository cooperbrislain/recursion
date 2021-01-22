window.onload = () => {
    document.getElementById('container').innerHTML = recurse_poster(1024, 768);
}

function recurse_poster(x, y, factor= 0.8, small=25) {
    let [x_, y_, fontsize] = [x*factor, y*factor, factor*100];
    const inner = x_<=small||y_<=small? '' : recurse_poster(x_, y_, factor);
    return `
        <div class="poster" style="width: ${x_}; height: ${y_}; font-size: ${fontsize}%">
            <div class="inner">
                ${inner}
            </div>
            <h3>Recursion</h3>
            <h5>You gotta know when to quit.</h5>
        </div>
    `;
}
