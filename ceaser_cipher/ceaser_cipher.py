ALPHABET = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ'
key = 25

def ceaser_encrypt(plain_text):
    cipher_text = ''
    plain_text = plain_text.upper()

    for c in plain_text:
        index = ALPHABET.find(c)
        index = (index + key) % len(ALPHABET)
        cipher_text += ALPHABET[index]

    return cipher_text


def ceaser_decrypt(cipher_text):
    cipher_text = cipher_text.upper()
    plain_text = ''
    for c in cipher_text:
        index = ALPHABET.find(c)
        index = (index - key) % len(ALPHABET)
        plain_text += ALPHABET[index]

    return plain_text


if __name__ == '__main__':
    m = input('Enter Your Text - ')
    c = ceaser_encrypt(m)
    print('Encrypted Text - ' + c)
    print('Decrypted Text - ' + ceaser_decrypt(c))
