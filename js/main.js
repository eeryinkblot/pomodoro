let timeElement = document.querySelector('time');
let time = new Time(70);

timeElement.innerText = time.getTimeAndDecreaseBy1Second();

let timeDecreasing = setInterval(() => timeElement.innerText = time.getTimeAndDecreaseBy1Second(), 1000);

