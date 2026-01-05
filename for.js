// Nivel 1 — Calentamiento (1–10)
// 1.	Imprime los números del 1 al 10 con for.
for (let num = 0; num <= 10; num++) {
    console.log(num);
}
// 2.	Imprime los números del 10 al 1 con for.
for(let numero=10; numero > 0; numero--){
    console.log(numero);
    
}
// 3.	Imprime los números pares del 1 al 20.
for(let n=1; n <=20;n++){
    if(n%2===0){
        console.log("El numero " +n+" es par");
    }
}
// 4.	Imprime los números impares del 1 al 20.
for(let impar=0; impar <=20;impar++){
    if(impar%2===1){
        console.log("El numero "+impar+" es impar");
    }
}
// 5.	Imprime los múltiplos de 5 del 5 al 50.
for(let cinco=5; cinco<=50;cinco++){
    if(cinco%5===0){
        console.log("El numero "+cinco+" es multiplo de 5");        
    }
}
// 6.	Calcula la suma de los números del 1 al 100.
let sumatotal =0; // variable que acomula/guarda va afuera
for(let suma=1; suma <=100; suma++){
    sumatotal +=suma;
    console.log(sumatotal);
}

// 7.	Calcula el producto (factorial) de un número n (ej. n = 5).
// 8.	Cuenta cuántos números hay entre 1 y 100 que son divisibles entre 3.
// 9.	Imprime una tabla con i y i^2 para i de 1 a 10.
// 10.	Imprime los caracteres de un string uno por uno usando for.