class GuessingGame {
    constructor() {
        this._min=0;
        this._max=0;
        this._candidate=null;
    }

    setRange(min, max) {
        this._min=min;
        this._max=max;
    }

    guess() {
        let candidate=Math.round((this._min+this._max)/2);
        this._candidate=candidate;
        return candidate;

    }

    lower() {
       this._max=Math.round((this._max+this._min)/2);

    }

    greater() {

        this._min=Math.round((this._max+this._min)/2);
    

    }
}

module.exports = GuessingGame;
