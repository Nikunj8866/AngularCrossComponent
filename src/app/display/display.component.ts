import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
 

  @Input()arrdata:[{empid:string,empName:string,empAdd:string}]

  constructor() { }
  
  ngOnInit(): void {

   // this.arrdata.push(this.obj);
  }

}
