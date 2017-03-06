var btn = document.getElementsByClassName('btn')[0];
var pitanje = document.getElementsByClassName('pitanje')[0];
var odg = document.getElementsByClassName('odg');

btn.addEventListener('click', startKviz);

function startKviz() {
    if (kviz.isEnd()) {
        // obrisati sve dugmice i napisati procenat uspesnosti.
        console.log('kraj kviza');
    } else {
        pitanje.innerHTML = kviz.getTrenutnoPitanje().text;
        for (var i = 0; i < odg.length; i++) {
            odg[i].innerHTML = kviz.getTrenutnoPitanje().odgovori[i];
            odg[i].addEventListener('click', userOdg)
        }
    }
};

function userOdg() {
    kviz.userAnswer(this.innerHTML);
    startKviz();
}