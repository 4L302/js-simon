/* Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

//generare 5 n casuali
//controllo sui n
//mostrare i n per 30s
//nascondere i 5 n
//mostrare caselle di input
//confronto n pc con n utente 
//risultato (quanti e quali indovinati)

function start() {

    function genNum() {
        const num = [];
        while (num.length < 5) {
            let randomNum = Math.floor(Math.random() * 100);
            if (!num.includes(randomNum)) {
                num.push(randomNum);
            }
        }
        return num;
    }

    function numControl() {
        for (let i = 0; i < numInput.length; i++) {
            if (!numUser.includes(numInput[i].value)) {
                numUser.push(numInput[i].value);
            }
        }
        return numUser;
    }

    function responceNum() {
        let numPc = genNum();
        console.log(numPc);

        let numUser = numControl();
        console.log(numUser);

        for (let i = 0; i < numUser.length; i++) {
            if (numPc.includes(numUser[i])) {
                guess.push(numUser);
            }
        }
        document.querySelector('.results');
    }

    const randomNum = genNum();
    let display = document.createElement('div');
    display.innerHTML = `${randomNum}`;
    display.classList.add('text-warning', 'fs-3');
    document.querySelector('#num').appendChild(display);

    let input = document.querySelector('#numUser');

    setTimeout(() => {
        display.remove();
        input.classList.remove('d-none');
    }, 30000);
}