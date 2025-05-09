def  simple_calculator(num2, num3,do):
    if do == "-":
        anws = num2 - num3

    print(anws)

    elif do  ==  "+":
    anws = num2 + num3
    print(anws)

    elif do == "*":
    anws = num2 * num3
    print(anws)



    elif do == "//":
    anws = num2 // num3
    print(anws)

    else:
    print ("wrong  input try again: ")
    num2 = float(input("enter first number: "))
    num3 = float(input("enter first number: "))

    do = input("enter your choice: ")
    print(simple_calculator(num2,num3,do))


