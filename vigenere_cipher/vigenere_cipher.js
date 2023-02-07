const ALPHABET = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const len = ALPHABET.length;
var index = 0;

// Encryption
function vigenere_encrypt(plain_text,secret_key){
    plain_text = plain_text.toUpperCase();
    secret_key = secret_key.toUpperCase();
    let cipher_text = "";
    let keyIndex = 0;

    for(let i = 0 ; i < plain_text.length ; i++){
        let plainChar = plain_text[i];
        let indexOfChar = ALPHABET.indexOf(plainChar);
        keyIndex = ALPHABET.indexOf(secret_key.charAt(keyIndex));
        index = indexOfChar + keyIndex;
        let newIndex = index % len;
        cipher_text += ALPHABET.charAt(newIndex);

        keyIndex++;
        if(keyIndex == secret_key.length)
            keyIndex = 0;
    }
    return cipher_text;
}

// decryption
function vigenere_decrypt(cipher_text,secret_key){
    cipher_text = cipher_text.toUpperCase();
    secret_key = secret_key.toUpperCase();
    let plain_text = "";
    let keyIndex = 0;

    for(let i = 0 ; i < cipher_text.length ; i++){
        let enChar = cipher_text[i];
        let indexOfChar = ALPHABET.indexOf(enChar);
        keyIndex = ALPHABET.indexOf(secret_key.charAt(keyIndex));
        index = indexOfChar - keyIndex;
        if (index < 0) {
            index += len ;
        }
        let newIndex = index % len;
        let newChar = ALPHABET.charAt(newIndex);
        plain_text += newChar;

        keyIndex++;
        if(keyIndex == secret_key.length)
            keyIndex = 0;
    }
    return plain_text;
}
let message  = 'cryptography is quite important';
let key = 'table';
let encryptedText = vigenere_encrypt(message,key);
let decryptedText = vigenere_decrypt(encryptedText,key)
console.log(encryptedText);
console.log(decryptedText);