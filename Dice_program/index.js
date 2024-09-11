function rollDice(){

    const number = document.getElementById("num").value;
    const result= document.getElementById("result");
    const images= document.getElementById("images");
    const values = [];
    const image = [];

    for (let i = 0; i < number; i++){
        const value = Math.floor(Math.random()* 6) + 1;
        values.push(value);
        image.push(`<img src="images/${value}.png" alt="img">`);
    }
    
    result.textContent = `dice : ${values.join(`,`)}`;
    images.innerHTML = image.join(' ');


}
