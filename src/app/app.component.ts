import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parentchild';
  EnterName = "John Doe";
  EnterAge = "23";
  EnterStatus = "Single";
  EnterGender = "Male";
  EnterHeight = "6.1";
  parentData1 = "";
  parentData2 = "";
  parentData3 = "";
  parentData4 = "";
  parentData5 = "";
  transferData() {
    this.parentData1=this.EnterName;
    this.parentData2=this.EnterAge;
    this.parentData3=this.EnterStatus;
    this.parentData4=this.EnterGender;
    this.parentData5=this.EnterHeight;
  }
  value="";
  sendData(value:string){
    this.value=value;
  }
}
