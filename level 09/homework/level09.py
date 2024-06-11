#დაწერეთ პითონის პროგრამა, რომელიც ითვლის მართკუთხედის პერიმეტრს.
# პროგრამამ უნდა სთხოვოს მომხმარებელს მართკუთხედის სიგანე და სიმაღლე.

length = int(input("enter length of rectangle;"))

width = int(input("enter width of rectangle;"))

perimetri = 4

result = ((width + length) * perimetri)

print(result)