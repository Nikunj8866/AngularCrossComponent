import { Directive,ElementRef,TemplateRef,ViewContainerRef,Input } from '@angular/core';

@Directive({
  selector: '[appAppnot]'
})
export class AppnotDirective {
   @Input() set appAppnot (condition:boolean)
  {
       if(!condition)
       {
          this.view.createEmbeddedView(this.temp);
       } 
       else
       {
         this.view.clear();
       }

   }
  constructor(private temp:TemplateRef<any>,private view:ViewContainerRef) {

   }

}
