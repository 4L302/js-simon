/* Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */


//generare 5 n casuali
function genNum(){
    const num = [];
    while (num.length < 5){
        let randomNum = Math.floor(Math.random() * 100);
        if (!num.includes(randomNum)){
            num.push(randomNum);
        }
    }
    return num;
}
//controllo sui n


//mostrare i n per 30s

//nascondere i 5 n

//mostrare caselle di input

//confronto n pc con n utente 

//risultato (quanti e quali indovinati)