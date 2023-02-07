const ALPHABET = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ.,';
const len = ALPHABET.length;
var index = 0;


// Encryption
function ceaser_encryption(plain_text,key){
    let cipher_text = "";
    plain_text = plain_text.toUpperCase();

    for(let i = 0 ; i < plain_text.length ; i++){
        let plainChar = plain_text[i];
        let indexOfChar = ALPHABET.indexOf(plainChar);
        let newIndex = (indexOfChar+key);
        let modu = newIndex % len;
        let newChar = ALPHABET.charAt(modu);
        cipher_text += newChar;
    }
    return cipher_text;
}

// Decyption 
function ceaser_decryption(cipher_text,key){
    cipher_text = cipher_text.toUpperCase();
    let plain_text = "";
    
    for(var i = 0 ; i < cipher_text.length; i++){
        let enChar = cipher_text[i];
        let indexOfChar = ALPHABET.indexOf(enChar);
        index = (indexOfChar-key);
        if (index < 0) {
            index += len ;
        }
        let newIndex = index % len;
        let newChar = ALPHABET.charAt(newIndex);
        plain_text += newChar;
    }
    return plain_text;
}

var your_message = "A Caesar cipher, is a simple method of encoding messages.";
var encrypted_text = ceaser_encryption(your_message,4)
console.log(encrypted_text);
var decrypted_text = ceaser_decryption(encrypted_text,4);
console.log(decrypted_text);