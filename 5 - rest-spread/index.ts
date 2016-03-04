const flags1 = [ "Alpha", "Bravo" ];
const flags2 = [ "Charlie", "Delta" ];
const flags = [...flags1, ...flags2, "Eco"]; //spread operator

const es5first = flags[0];
console.log(es5first);

//rest operator
const [es6first = "A", es6second = "B", ...others] = flags || [];
console.log(es6first);
console.log(es6second);

multiHello("Alice", "Bob", "Chris");
//rest operator (...)
function multiHello(...items: Array<string>) {
    items.forEach(value => {
       console.log(`hello, ${value}`); 
    });
}

//error (WTF)
//multiHello(flags);

//no error: spread operator
multiHello(...flags);

//rest: specifies multiple items can be supplied
//spread: splits arrays into multiple items
