let sequence = ["Ignition", 1, 2, 3, 4, 5, "preparation"];

for (let i = 0; i < sequence.length; i = i + 1) {
    console.log(sequence[i]); 
}

sequence[0]="Takeoff!"

console.log(sequence[0])