const names = ['Alice', 'Bob', 'Charlie', 'Dana', 'Elvis'];

names.forEach(item => {
    console.log(item);
});

for (let item in names) {
    if (names.hasOwnProperty(item)) {
        let element = names[item];
        console.log(element);
    }
}

for (let item of names) {
    console.log(item);
}

const instrument = "Electric Guitar";
for(let character of instrument){
    console.log(character);
}