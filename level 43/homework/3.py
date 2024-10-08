def average_of_list(num_list):
    if not num_list: 
        return 0
    total = sum_of_list(num_list) 
    average = total / len(num_list)  
    return average

def sum_of_list(num_list):
    total = 0
    for num in num_list:
        total += num
    return total
    numbers = [1, 2, 3, 4, 5]
result = average_of_list(numbers)
print(result) 