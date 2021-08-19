class GuessingGame {
    constructor() {
        this.max;
        this.min;
        this.res;
    }

    setRange(min, max) {
       this.max = max;
       this.min = min;
    }

    guess() {
        return this.res = Math.ceil(((this.max - this.min)/2) + this.min);
    }

    lower() {
        this.setRange(this.min, this.res);
        
    }

    greater() {
        this.setRange(this.res, this.max);
    }
}
module.exports = GuessingGame;
