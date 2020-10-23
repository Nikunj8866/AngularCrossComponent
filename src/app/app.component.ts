import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crossComponentapp';
  arrdata1 = [{"empid":"101","empName":"tops","empAdd":"surat"}];
 status = false
  addrecord(val:any)
  {
     this.arrdata1.push({empid:val.empid,empName:val.empName,empAdd:val.empAdd});
     

  }
  addfun()
  {
   this.status =  !this.status
  }

}
