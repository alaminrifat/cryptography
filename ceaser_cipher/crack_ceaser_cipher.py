ALPHABET = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ'

def crack_ceaser(cipher_text):
    for key in range(len(ALPHABET)):
        plain_text = ''

        for c in cipher_text:
            index = ALPHABET.find(c)
            index = (index - key) % len(ALPHABET)
            plain_text += ALPHABET[index]
        print('For Key %s , Result is - %s' % (key,plain_text))

if __name__ == '__main__':
    encrypted = 'FCJMMYGYZK'
    crack_ceaser(encrypted)