
name="Amir"
password="Amir@1432"

for  i in range(3):
    user = input("Enter your name: ")
    pwd=input("Enter your password: ")

    if user==name and pwd==password:
        print("Login Successful")
        break
    else:
        print("Wrong name or password")

  