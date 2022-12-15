const getCountdownTime = () => {

    const targetDate = new Date("Dec 25, 2022 00:00:00").getTime();
    const nowDate = new Date().getTime();
    const msAmount = targetDate - nowDate;

    let ms = Math.floor(msAmount % 1000);
    let secs = Math.floor(msAmount / 1000 % 60);
    let mins = Math.floor(msAmount / 1000 / 60 % 60);
    let hours = Math.floor(msAmount / 1000 / 60 / 60 % 24);
    let days = Math.floor(msAmount / 1000 / 60 / 60 / 24 % 365);

    document.querySelector('#days').innerHTML = days < 10 ? "0" + days.toString() : days.toString();
    document.querySelector('#hours').innerHTML = hours < 10 ? "0" + hours.toString() : hours.toString();
    document.querySelector('#mins').innerHTML = mins < 10 ? "0" + mins.toString() : mins.toString();
    document.querySelector('#secs').innerHTML = secs < 10 ? "0" + secs.toString() : secs.toString();
    document.querySelector('#ms').innerHTML = ms.toString();
};

setInterval(getCountdownTime, 1);

