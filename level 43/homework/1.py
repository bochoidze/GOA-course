def count_items(item_list, item):
    return item_list.count(item)

    items = ['apple', 'banana', 'apple', 'orange']
count = count_items(items, 'apple')
print(count)  