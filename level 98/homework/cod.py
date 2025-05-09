def battle(x, y):


    x_value = sum(ord(char) - 64 for char in x)


    y_value = sum(ord(char) - 64 for char in y)

    if x_value < y_value:
        return y

    if x_value > y_value:
        return x

    return "Tie!"