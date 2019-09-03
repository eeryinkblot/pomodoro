class Time {

    constructor(timeInSeconds) {
        this._time = timeInSeconds;
    }

    getMinutes() {
        return Math.floor(this._time / Time.SEKUNDEN_PRO_MINUTE);
    }

    getSeconds() {
        return this._time % Time.SEKUNDEN_PRO_MINUTE;
    }

    getMinutesInSeconds() {
        return this.getMinutes() * Time.SEKUNDEN_PRO_MINUTE;
    }

    getTotalSeconds() {
        return this.getMinutesInSeconds() + this.getSeconds();
    }

    getTimeAndDecreaseBy1Second() {
        const fuehrendeNull = (this.getSeconds() < 10 ? '0' : '');
        const string = this.getMinutes() + ':' + fuehrendeNull + this.getSeconds();
        this._time = this._time - 1;
        return string;
    }

};

Time.SEKUNDEN_PRO_MINUTE = 60;
