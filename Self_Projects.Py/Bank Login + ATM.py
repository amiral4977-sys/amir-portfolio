balance = 20000
pin = "Amir@123"

for  i  in range(3):
    user = input("Enter your pin: ")

    if user == pin:
      print ("Login Successful")

      while True:
       print("1.check belence")
       print("2.Deposit")
       print("3.Withdraw")
       print("4.Exit")

       choice = int(input("Choese your option: "))

       if  choice == 1:
          print("Your balance is:", balance)

       elif choice == 2:
          amount=int(input("Enter amount to deposit: "))
          balance+=amount
          print("Your new balance is:", balance) 
          
       elif choice == 3:
          withdraw =int(input("Enter amount to withdraw: "))
          if withdraw>=balance:
             
             print("Insufficient balance")
          else:
            balance-=withdraw
            print("Your new balance is:", balance)
                
       elif choice == 4:
            
           print("Thank you for using our service")
           break
       
       else:
            print("Invalid choice") 

            break   

    else:
        print("Wrong pin")
    
    
    
    

          

                       
                              
                        
               