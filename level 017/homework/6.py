#6) შექმენით პროგრამა სადაც გამოიყენებთ While loop - ს. 
#თქვენი დავალება იქნება ის, რომ მომხამრებელს შემოატანინოთ რიცხვი და 
# თქვენ უნდა გამოიცნოთ ეს რიცხვი, ხოლო ყოველ არ გამოცნობილ რიცხვზე ისევ თავიდან უნდა შეგეკითხოთ და შეიყვანოთ რიცხვი.
num1 = int(input())
num2 = int(input())

togeth = num1 > num2

num3 = int(input())
num4 = int(input())

togeth2 = num3 < num4

while togeth and togeth2:
    print(" correct ")