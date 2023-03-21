import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  user:any
   acno:any
   date:any
  // psw:any
  // amnt:any
  // acno1:any
  // psw1:any
  // amnt1:any
  constructor(private ds:DataService,private fb:FormBuilder,private router:Router)
  {//access data fromthe dataservice and store in a variable
     this.user=  this.ds.currentUser

     // access current date
     this.date=new Date()
  }
  ngOnInit():void{
    if(!localStorage.getItem("currentAcno"))
    {
      alert("please login")
      this.router.navigateByUrl("")
    }
  }
  depositForm=this.fb.group(
    {  acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
       psw:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]],
       amnt:['',[Validators.required,Validators.pattern('[0-9]+')]]

    }
    
    
  )
  withdrawForm=this.fb.group(
    {  acno1:['',[Validators.required,Validators.pattern('[0-9]+')]],
       psw1:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]],
       amnt1:['',[Validators.required,Validators.pattern('[0-9]+')]]

    }
    
    
  )

  deposit()
  {
    var acno=this.depositForm.value.acno
    var psw=this.depositForm.value.psw
    var amnt=this.depositForm.value.amnt
  const result=  this.ds.deposit(acno,psw,amnt)
  if(this.depositForm.valid)
  {
    if(result)
    {
      alert(`your ac has been credicted with amount ${amnt}and
      available balance is${result}`)
    }
    else{
      alert('incorrect acno or password')
    }

  }

  else{
    alert('invalid form')
  }
 
  

  }
  withdraw()
  {
    var acno=this.withdrawForm.value.acno1
    var psw=this.withdrawForm.value.psw1
    var amnt=this.withdrawForm.value.amnt1
    const result=this.ds.withdraw(acno,psw,amnt)
    if(this.withdrawForm.valid)
    {
      if(result)
      {
        alert(`your ac has been debicted with amount ${amnt}and
        available balance is${result}`)
      }
      else{
        alert('incorrect acno or password')
      }
    }
    else

    {
      alert('invalid form')
    }
    
  }
  logout()
  {
    localStorage.removeItem("currentUser")
    localStorage.removeItem("currentAcno")
    this.router.navigateByUrl("")
  }
  deleteAcc(){
   
    this.acno=JSON.parse(localStorage.getItem("currentAcno") || "")




  }

}
