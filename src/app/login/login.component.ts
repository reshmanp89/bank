import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  data="your perfect banking partner"
  data1="enter your ac no"
 // acno=""  varaible declaration
 //or
 acno:any
 psw:any
  userDetails:any={//database name
    1000:{username:"anu",acno:1000,password:"123",balance:0}, //object ,key is account number
    1001:{username:"amal",acno:1001,password:"123",balance:0},
    1002:{username:"bipin",acno:1000,password:"123",balance:0},
    1003:{username:"reshma",acno:1000,password:"123",balance:0},
    1004:{username:"anu",acno:1000,password:"123",balance:0}
  }
  constructor(private router:Router){

  }
  login()
{
  //alert("login worked")
    var acnum=this.acno
    var userDetails=this.userDetails
    var psw=this.psw

   if(acnum in userDetails)
   {
    if(psw==userDetails[acnum]["password"]){//here acnum is a variable so the not use " "
       alert("login success")
       // redirection
       this.router.navigateByUrl("dashboard")


    }
    else{
      alert("incorrect password")
    }
   }
   else{
    alert('incorrect acnum')
   }
}

// acnoChange(event:any)
// {
//   this.acno=event.target.value
//   console.log(this.acno);
  
// }
// pswChange(event:any)
// {
//   this.psw=event.target.value
//   console.log(this.psw);
  
// }

}


//methods

