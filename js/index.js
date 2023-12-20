var nbr = parseInt(prompt("Nombre initial entre 1 et 10"));

if (nbr > 10) {
    alert("Le nombre est supérieur à 10, je vous ai demandé d'écrire un nombre compris entre 1 et 10!!!");
} else {
    for (var i = nbr; i <= 10; i++) {
        if (i % 2 === 0) {
        console.log(i + " est pair");
        } else {
            console.log(i + " est impair");
        }
        }
}

