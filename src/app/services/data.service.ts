import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser:any
  currentAcno:any
  userDetails:any={//database name
    1000:{username:"anu",acno:1000,password:"123",balance:0,transactions:[]}, //object ,key is account number
    1001:{username:"amal",acno:1001,password:"123",balance:0,transactions:[]},
    1002:{username:"bipin",acno:1002,password:"123",balance:0,transactions:[]},
    1003:{username:"reshma",acno:1003,password:"123",balance:0,transactions:[]},
    1004:{username:"anu",acno:1004,password:"123",balance:0,transactions:[]}
  }
  constructor() { }
  saveDetails()
  {
    if(this.userDetails)
    {
      localStorage.setItem("userDetails",JSON.stringify(this.userDetails))
    }
    if(this.currentUser)
    {
      localStorage.setItem("currentUser",this.currentUser)
    }
    if(this.currentAcno)
    {
      localStorage.setItem("currentAcno",JSON.stringify(this.currentAcno))
    }
  }
  
  register(acno:any,uname:any,psw:any)
  {
    var  userDetails=this.userDetails
    if(acno in userDetails)
    {
      return false
    }
    else{
      userDetails[acno]={username:uname,acno,password:psw,balance:0,transactions:[]}
      console.log(userDetails);
      this.saveDetails()
      
      return true
    }
  }
  login(acno:any,psw:any)
  {  var  userDetails=this.userDetails
    if(acno in userDetails)
    {
      if(psw==userDetails[acno]["password"])
      {  //store current user
        this.currentUser=  userDetails[acno]["username"]
        this.currentAcno=acno
        this.saveDetails()
        return true
      }
      else
    {
      return false
    }
     
    }
    
    else{
      return false;
    }

  }
  deposit(acno:any,psw:any,amnt:any)
  {
     var amount=parseInt(amnt)//  to convert string amount to int
     var  userDetails=this.userDetails
     if(acno in userDetails)
     {
      if(psw==userDetails[acno]["password"])
      {
        userDetails[acno]["balance"]+=amount
        console.log(userDetails);
        //add transaction data
        userDetails[acno]["transactions"].push(
          {
            Type:"Credit",
            Amount:amnt
          }
        )
        this.saveDetails()
        
        return userDetails[acno]["balance"]
      }
      else{
        return false
      }

     }
     else{
      return false
     }
  }

  withdraw(acno:any,psw:any,amnt:any)
  { 
    var amount=parseInt(amnt)
    var userDetails=this.userDetails
    if(acno in userDetails)
    {
      if(psw==userDetails[acno]["password"])
      { 
        if(amount<=userDetails[acno]["balance"])
        {
          userDetails[acno]["balance"]-=amount
          console.log(userDetails);
          //add transaction details
          userDetails[acno]["transactions"].push(
            {
              Type:"Debit",
              Amount:amnt
            }
          )
          this.saveDetails()
          //console.log(userDetails);
          
          return userDetails[acno]["balance"]
          
        }
        else{
          alert('insufficient balance')
        }

      }
      else{
        return false
      }

    }
    else{
      return false
    }

  }
  getTransaction(acno:any)
  {
   return this.userDetails[acno].transactions
  }
  
}
