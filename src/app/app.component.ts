import { Component } from '@angular/core';

function log(className: any): (...args: any) => any{
  console.log(className)
  return (...args: any)=>{
    console.log("Arguemnt",args)
    return new className(...args)
  }
}

class myExampleClass{
  constructor(arg1 :any, arg2:any){
    console.log("Constrcutor frired!")
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent { 
  title = 'my-first-project';
  constructor(){
console.log("This staemtemnent" , this.aSimpleMethod(5,10))

  }
aSimpleMethod(a : any,b:any){
return a*b
}
}

