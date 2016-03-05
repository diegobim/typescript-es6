const myString = "template value";

const myTemplate = `this is my value: ${myString}`;
console.log(myTemplate);

const myLongTemplate = `
    this is a multiline template
    
    ${myString}
`;
console.log(myLongTemplate);

//beware: mind blowing stuff ahead
function processTags(strings: Array<string>, ...substitutions: Array<string>) {
    const result: Array<string> = [];
    
    substitutions.forEach((sub, idx) => {
        result.push(strings[idx], sub);
    });
    
    result.push(strings[strings.length - 1]);
    
    return result.join('');
}

const myInsaneString = processTags`hello, modafoca ${myString, myTemplate, myLongTemplate}.`;
console.log(myInsaneString);