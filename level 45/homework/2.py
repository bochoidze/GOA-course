def average(numbers):
    if not numbers:  
        return 0
    return sum(numbers) / len(numbers)

numbers_list = [1, 2, 3, 4, 5]
print(average(numbers_list))  