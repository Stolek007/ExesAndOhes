function XO(str) {
    var a = 0, 
    b = 0;

    for (var i = 0; i < str.length; i++) { 
        if (str[i].toLowerCase() === "x") {
            a++;
        } else if (str[i].toLowerCase() === "o") {
            b++;
        }
    }
    return a === b;
}
