import { Component, EventEmitter, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Output() serverdata = new EventEmitter<{empid:string,empName:string,empAdd:string}>();


  constructor() { }
  ngOnInit(): void {
  }
  addval(frm)
  {
     var empid = frm.value.id;
     var empName = frm.value.name;
     var empAdd = frm.value.add;

     this.serverdata.emit({empid:empid,empName:empName,empAdd:empAdd});
     

  }

}
