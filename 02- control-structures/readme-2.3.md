# Display all even numbers between 1 and 100.

## The first one should use **while** and make a loop that will execute 100 times.

* La variable i est initialisée à 0 (i = currentValueOfMyIteration, on utilise i par convention car c'est plus court).
* La condition de la boucle while est vérifiée à chaque itération. Tant que la valeur de i est inférieure ou égale à 100, le bloc de code à l'intérieur de la boucle est exécuté.
* À chaque itération, le nombre i est affiché dans la console à l'aide de console.log(i).
* Ensuite, la valeur de i est augmentée de 2 en utilisant l'opérateur d'incrémentation += 2. Cela permet de passer au prochain nombre pair.
* Le processus se répète jusqu'à ce que i atteigne ou dépasse 100.

### Exemple :

let i = 0;
while (i <= 100) {
    console.log(i);
    i += 2;
}

## The second one should use **for** and make a loop that will execute 50 times.

* La boucle for est utilisée avec une variable de compteur i initialisée à 0.
* La condition de la boucle for spécifie que tant que i est inférieur ou égal à 100, le bloc de code à l'intérieur de la boucle est exécuté.
* Après chaque itération, la variable i est augmentée de 2 à l'aide de l'expression i += 2, ce qui permet de passer au prochain nombre pair.
* À chaque itération, le nombre i est affiché dans la console à l'aide de console.log(i).
* Le processus se répète jusqu'à ce que i atteigne ou dépasse 100.

### Exemple :

for (let i = 0; i <= 100; i += 2) {
    console.log(i);
}