def search(text, word):
    
    if word in text:
        return "Word found"
    else:
        return "Word not found"


text = "This is awesome"
word = "awesome"

result = search(text, word)
print(result)