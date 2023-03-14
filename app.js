const secondDiv = document.querySelector('.seconde');
const minDiv = document.querySelector('.min');
const hourDiv = document.querySelector('.heure');

function app(){

    const now = new Date();

    console.log(now);

    //secondes
    const seconds = now.getSeconds();
    //position en degré des secondes
    const secDeg = ((seconds/60)*360) + 90;
    secondDiv.style.transform = `rotate(${secDeg}deg)`;

    //minutes
    const mins = now.getMinutes();
    ///6deg = 1minutes
    const minDeg = ((mins/60)*360) + ((seconds/60)*6) + 90;
    minDiv.style.transform = `rotate(${minDeg}deg)`;

    //heures
    const hours = now.getHours();
    ///30deg = 1heure
    const hourDeg = ((hours/12)*360) + ((mins/60)*30) + 90;
    hourDiv.style.transform = `rotate(${hourDeg}deg)`;


}

setInterval(app, 1000);

