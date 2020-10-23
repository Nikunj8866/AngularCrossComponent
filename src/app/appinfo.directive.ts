import { Directive,ElementRef,HostListener,OnInit,HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appAppinfo]'
})
export class AppinfoDirective implements OnInit {
@HostBinding('style.backgroundColor') bgcolor:string
@Input()fcolor:string
@Input()lcolor:string
  ngOnInit()
  {
     this.bgcolor = 'red'
  }

  constructor(private ele:ElementRef) {
        

   }
   @HostListener('mouseover') mouserover(){

    this.bgcolor = this.fcolor
   }
   @HostListener('mouseleave') mouseleave(){

    this.bgcolor= this.lcolor
   }

}
