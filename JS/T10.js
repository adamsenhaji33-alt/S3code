let basket = [15, 42, 5, 89, 12, 50, 8];
let sum = 0;
for (let i = 0 ; i < basket.length; i++) {
    sum = sum + basket[i]
}
console.log("totale nombre:", sum)

let items = -2;  
for (let i = 0 ; i < basket.length; i++){
    if ( basket[i]>= 10){
        items++;
    }
}
console.log("Number of expensive items:", items);

let somme_chers = 0;
for(let i=0; i<basket.length; i++){
    if(basket[i]>=20)
        somme_chers+=basket[i];
}
console.log("Nombre d'articles chers : ", somme_chers);