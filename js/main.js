let timeElement = document.querySelector('time');
let time = timeElement.innerText;

let convertToSeconds = (time) => {
    let [minutes, seconds] = time.split(':');
    let minutesInSeconds = parseInt(minutes, 10) * 60; // Eine Minute hat 60 Sekunden
    return minutesInSeconds + parseInt(seconds, 10);
};

let getNext = (time) => {
    let [minutes, seconds] = time.split(':');
    parseInt(minutes, 10);
};

let seconds = convertToSeconds(time);
let next = getNext(time);

console.log(next);
