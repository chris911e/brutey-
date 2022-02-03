var nums = ["0", "1", "2", "3", "4", "5", "6", "7","8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "+", "¦", "@", "*", "#", "ç", "%", "&", "¬", "/", "|", "(", "¢", ")", "=", "'", "?", "", "^", "~", "ö", "ü", "ä", "Ö", "Ü", "Ä", "é", "É", "è", "È", "à", "À", "$", "£", ".", ":", ",", ";", "-", "_", "{", "}", "[", "]", "§", "°", "!", "<", ">", "€"];
pin = "";
actual_pin = "uJ0s";

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

