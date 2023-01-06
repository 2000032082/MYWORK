import { AbstractType, Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
  myname=""

  abc(username:string){
    //alert("Hi you clicked the button...!"+username)//
    this.myname=username
  }


 total=0;
 emi=0
 interest:any;
 cal(p:any,t:any){
  this.total=(p*t*this.interest)/100;
  this.emi=this.total/t;
}
roi(loantype:any){
  if(loantype.target.value=="car"){
    this.interest=9;
  }
  else if(loantype.target.value=="home"){
    this.interest=8;
  }
  else if(loantype.target.value=="edu"){
    this.interest=10;
  }
  else if(loantype.target.value=="person"){
    this.interest=12;
  }
}

Total=0;
Rank="";
Percentage=0;
reportcard(a:any,b:any,c:any,d:any,e:any,f:any){
  this.Total=parseInt(a)+parseInt(b)+parseInt(c)+parseInt(d)+parseInt(e)+parseInt(f);
  this.Percentage=(this.Total/600)*100;
  if(this.Percentage>=75){
    this.Rank="First rank";
  }
  else if(this.Percentage<=75&&this.Percentage>=65){
    this.Rank="Second class";
  }
 else if(this.Percentage<75&&this.Percentage>=35){
    this.Rank="Pass";
  }
  else{
    this.Rank="Fail";
  }
  
 }
}


