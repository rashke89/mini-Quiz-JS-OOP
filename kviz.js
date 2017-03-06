// ovo je KLASA?
function Kviz(pitanja) {
    this.pitanja = pitanja;
    this.rezultat = 0;
    this.trenutnoPtnj = 0;
};
//ovo su prototipovi?
Kviz.prototype.getTrenutnoPitanje = function() {
    return this.pitanja[this.trenutnoPtnj]
};
Kviz.prototype.userAnswer = function(answer) {
    if (answer == this.getTrenutnoPitanje().tacanOdg) {
        this.rezultat += this.getTrenutnoPitanje().brojPoena
    }
    this.trenutnoPtnj++;
    console.log(this.trenutnoPtnj);
};
Kviz.prototype.isEnd = function() {
    if (this.pitanja.length == this.trenutnoPtnj) {
        return true;
    } else {
        return false;
    }
}

var kviz = new Kviz(pitanja);
console.log(kviz.getTrenutnoPitanje());