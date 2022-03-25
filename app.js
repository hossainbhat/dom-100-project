window.onload = () => {
    main();
}

function main(){
    const root = document.getElementById('root');
    const btn = document.getElementById('change-btn');
    const output = document.getElementById('output');
    const copybtn = document.getElementById('copy-btn');

    btn.addEventListener('click',function(){
        const hexColor = generateHexCodeColor();

        root.style.backgroundColor = hexColor;
        output.value = hexColor;
    })

    copybtn.addEventListener('click',function(){
        navigator.clipboard.writeText(output.value);
    })
}

function generateHexCodeColor(){
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}