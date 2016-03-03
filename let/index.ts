// function favoriteFood(name: string) {
//     let fav: string;
// 
//     if (name === "Amy") {
//         fav = "pizza";
//     } else {
//         fav = "uncertain";
//     }
// 
//     return fav;
// }
// 
// function printNumbers(max: number) {
//     for (let i = 0; i < max; i++) {
//         console.log(i);
//     }
// }
// 
// printNumbers(2);

module ForLoopClosure {

    buttonsWithVar(3, document.getElementById("createdWithVar"));
    buttonsWithVarAndIIFE(3, document.getElementById("createdWithVarAndIIFE"));
    buttonsWithLet(3, document.getElementById("createdWithLet"));

    function buttonsWithVar(count : number, targetElement : HTMLElement) {
        for (var i = 1; i <= count; i += 1) {
            var button = makeButton("button " + i);

            button.onclick = function() {
                alert("This is button " + i + ".");
            };
            targetElement.appendChild(button);
        }
    }

    function buttonsWithVarAndIIFE(count : number, targetElement : HTMLElement) {
        for (var i = 1; i <= count; i += 1) {
            var button = makeButton("button " + i);

            button.onclick = (function(buttonNumber : number) {
                return function() {
                    alert("This is button " + buttonNumber + ".");
                };
            } (i));

            targetElement.appendChild(button);
        }
    }

    function buttonsWithLet(count : number, targetElement : HTMLElement) {
        for (let i = 1; i <= count; i += 1) {
            var button = makeButton("button " + i);

            button.onclick = function() {
                alert("This is button " + i + ".");
            };
            
            targetElement.appendChild(button);
        }
    }

    function makeButton(caption : string) {
        var button = document.createElement('button');
        button.innerText = caption;
        return button;
    }

    markIfNotImplemented(document.getElementById("createdWithVar"));
    markIfNotImplemented(document.getElementById("createdWithVarAndIIFE"));
    markIfNotImplemented(document.getElementById("createdWithLet"));

    function markIfNotImplemented(targetElement: HTMLElement) {
        if (targetElement.children.length === 0) {
            targetElement.innerHTML = "Not yet implemented.";
        }
    }
}
