window.onload = () => {
    main();
}

function main(){
    const root = document.getElementById('root');
    const btn = document.getElementById('change-btn');
    const output = document.getElementById('output');

    btn.addEventListener('click',function(){
        const hexColor = generateHexCodeColor();

        root.style.backgroundColor = hexColor;
        output.value = hexColor;
    })
}

function generateHexCodeColor(){
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}