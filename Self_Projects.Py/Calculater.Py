num=float(input("Enter your First number: "))

op=input("Operator: +,-,*,/ :,%, ** ")

num2=float(input("Enter your Second number: "))

if op=="+":
    print(num+num2)
elif op=="-":
    print(num-num2)
elif op=="*":
    print(num*num2)      

elif op=="/":
    print(num/num2) 

elif op=="%":
    print(num%num2)

elif op=="**":
    print(num**num2)    

else:
    print("Invalid Operator")
