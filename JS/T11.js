
    let numbers = [23, 15, 42, 9, 31, 18, 42, 5];
    let maximum = numbers[0];
    let positionmax = 0;

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maximum) {
            maximum = numbers[i];
            positionmax = i;
        }
    }
    console.log("The greatest is:", maximum, "It is on the index:", positionmax);
  
let minimum = numbers[0];
let positionmin = 0;

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < minimum) {
            minimum = numbers[i];
            positionmin = i;
        }
    }
    console.log("The smallest is:", minimum, "It is on the index:", positionmin);

let search = 31;
let position = -1;

for (let i=0; i < numbers.length;i++){
    if (numbers[i] === search){
        position = i;
        break;
    }
}
if (position !== -1 ){
    console.log("La valeur 31 est présente dans le tableau.")
}else{
    console.log("La valeur 31 n' est pes présente dans le tableau.")
}