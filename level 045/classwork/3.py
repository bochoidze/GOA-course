def count_characters(text):
   
    letters_count = 0
    for char in text:
        if char.isalpha():
            letters_count += 1
    return letters_count


text = "გამარჯობა მსოფლიო"
print(count_characters(text))  