Name=input("Enter your name: ")

H=int(input("Enter your Hindi marks: "))
E=int(input("Enter your English marks: "))
M=int(input("Enter your Maths marks: "))
P=int(input("Enter your Physics marks: "))
C=int(input("Enter your Chemistry marks: "))

Total =H+E+M+P+C

Percentage=(Total/500)*100

print("Your Total marks is:",Total)
print("Your Percentage is:",Percentage)

if Percentage>=90:
    print("Your Grade is A+")
elif Percentage>=80:
    print("Your Grade is A")
elif Percentage>=70:
    print("Your Grade is B+")
elif Percentage>=60:
    print("Your Grade is B")
elif Percentage>=50:
    print("Your Grade is C")

elif Percentage>=40:
    print("Your Grade is D")
elif Percentage>=33:
    print("Your Grade is E")

else:
    print("You are Fail")