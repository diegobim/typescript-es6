const address = {
    street: "1001 Main St",
    city: "Anytown",
    state: "NY",
    zip: "10001-1234",
    country: "USA",
    floor: 3
};

console.log(address.street);

//ES5 destructuring
const street = address.street;
console.log(street);

//ES6 destructuring
const { floor, state, city, street: st } = address;
console.log(floor);
console.log(state);
console.log(city);
console.log(st);


interface USPostalAddress {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    floor?: number;
}

const newAddress: USPostalAddress = {
    street: "1001 Main St",
    city: "Anytown",
    state: "NY",
    zip: "10001-1234",
    country: "USA",
    //floor: 3      it works modafoca
};

const { street: s, city: c, floor: f = 0 } = newAddress


//deep destructuring
const employee = {
    workAddress: newAddress,
    position: {
        department: {
            name: "IT"
        }
    }
}

{ //isolate scope 
    const { workAddress: { city }, position: { department: { name: deptName } } } = employee;
    console.log(city);
    console.log(deptName);
}

// error
// function categorizeEmployee() {
//     return {
//         city: city,
//         deptName: deptName
//     }
// }

// no error
function categorizeEmployee({ workAddress: { city }, position: { department: { name: deptName } } }) {
    return {
        city: city,
        deptName: deptName
    }
}

//with shorthands AND defaults
function categorizeEmployeeShort({ workAddress: { city } = { city: "" }, position: { department: { name: deptName } } }) {
    return {
        city,
        deptName
    }
}

{
    let category = categorizeEmployee(employee);
    category = categorizeEmployeeShort(employee);
}