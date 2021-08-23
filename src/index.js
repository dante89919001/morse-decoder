const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};



function decode(expr) {
    let arr = expr.split("");
    let result = [];

    while (arr.length) {
        let letterEncoded = arr.splice(10 * -1);
        let Morse = "";

        if (letterEncoded.join("") === "**********") {
            result.push(" ");
            continue;
        }

        for (i = 0; i < letterEncoded.length; i += 2) {
            let signCode = letterEncoded.slice(i, i + 2).join("");
            Morse += signCode === '10' ? "." : signCode === '11' ? "-" : "";
        }
        result.push(MORSE_TABLE[Morse]);
    }
    return result.reverse().join("");
}


module.exports = {
    decode
};
