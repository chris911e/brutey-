var chars = "0123456789abcdefghijklmnopqrstuvwxyz";

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

let actual_pin = "abcd";

function brutey(p_length){
    let pin = "";
    let i = p_length;
    let solved = false;
    var start = new Date().getTime();
    while (!solved){
        while (i > 0) {
            for (var char in chars) {
                pin = pin.replaceAt(i, chars.charAt(char));
                if (pin.length == p_length) {
                    if (pin == actual_pin) {
                        console.log(`Correct Pin: ${pin}, Time required:`, (((new Date()) * 1) - start)/1000, 's');
                        process.exit(1);
                    } else {
                        console.log(`False pin: ${pin}`);
                        i = p_length;
                    }
                }
                i--;
            }
        }
    }
}

brutey(4);