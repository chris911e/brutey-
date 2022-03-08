function brutey(actual_pin){
    var nums = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890+*ç%&/()=?${}[]!";
    pin = "";
    var start = new Date().getTime();
    for (let num_a in nums) {
        for (let num_b in nums) {
            for (let num_c in nums) {
                for (let num_d in nums) {
                    for (let num_e in nums) {
                        for (let num_f in nums) {
                            pin = `${nums.charAt(num_a)}${nums.charAt(num_b)}${nums.charAt(num_c)}${nums.charAt(num_d)}${nums.charAt(num_e)}${nums.charAt(num_f)}`;
                            if (pin == actual_pin) {
                                console.log(`C: ${pin} in`, (((new Date()) * 1) - start)/1000, 's');
                                process.exit(1);
                            } else {
                                console.log(`X: ${pin}`);
                            }
                        }
                    }
                }
            }
        }
    }
}

brutey("eM");