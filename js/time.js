class Time {

    

    constructor(time) {
        this._time = time;
    }

    getMinutes() {
        return parseInt(_time.split(':')[0], 10);
    }

    getSeconds() {
        return parseInt(_time.split(':')[1], 10);
    }

    getMinutesInSeconds() {
        return this.getMinutes() * SEKEUNDEN_PRO_MINUTE;
    }

    getTotalSeconds() {
        return this.getMinutesInSeconds() + this.getSeconds();
    }

};
