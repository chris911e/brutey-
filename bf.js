var chars = ["0", "1", "2", "3", "4", "5", "6", "7","8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "+", "¦", "@", "*", "#", "ç", "%", "&", "¬", "/", "|", "(", "¢", ")", "=", "'", "?", "", "^", "~", "ö", "ü", "ä", "Ö", "Ü", "Ä", "é", "É", "è", "È", "à", "À", "$", "£", ".", ":", ",", ";", "-", "_", "{", "}", "[", "]", "§", "°", "!", "<", ">", "€"];
let pin = "";
let old_pin = "";
let actual_pin = "1234";
let solved = false;

while (!solved){
    for (let char in chars) {
        if (pin.length != actual_pin.length) {
        pin += chars[char];
        }
    }
    console.log(pin);
    if (pin == actual_pin) {
        solved = true;
        console.log(pin);
    }
}

/*
actual_pin.length;

for (let num_a in nums) {
    for (let num_b in nums) {
        pin = `${nums[num_a]}`;
        for (let num_c in nums) {
            pin = `${nums[num_a]}${nums[num_b]}`;
            for (let num_d in nums) {
                pin = `${nums[num_a]}${nums[num_b]}${nums[num_c]}${nums[num_d]}`;
                if (pin == actual_pin) {
                    console.log(`Pin: ${pin}`);
                }
            }
        }
    }
}

*/