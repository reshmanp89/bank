import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

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
 
  // userDetails:any={//database name
  //   1000:{username:"anu",acno:1000,password:"123",balance:0}, //object ,key is account number
  //   1001:{username:"amal",acno:1001,password:"123",balance:0},
  //   1002:{username:"bipin",acno:1000,password:"123",balance:0},
  //   1003:{username:"reshma",acno:1000,password:"123",balance:0},
  //   1004:{username:"anu",acno:1000,password:"123",balance:0}
  // }
  constructor(private router:Router,private ds:DataService,private fb:FormBuilder){

  }
  loginForm=this.fb.group(
    {
      
      
      acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
      
      psw:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]]
    }
  )
  login()
{
  //alert("login worked")
    var acnum=this.loginForm.value.acno
    
    var psw=this.loginForm.value.psw
    if(this.loginForm.valid)
    {
      const result=this.ds.login(acnum,psw)
    if(result)
    {
      alert("login successfully")
      this.router.navigateByUrl("dashboard")

    }
    else{
      alert("incorrect acno or pasword")
    }

    }
    else{
      alert('invalid form')
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

