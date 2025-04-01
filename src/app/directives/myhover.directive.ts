import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyhover]'
})
export class MyhoverDirective {

  constructor(
    private elementRef : ElementRef
  ) { }

  @HostListener('mouseover')
  onMouseOver(){
    this.elementRef.nativeElement.style.fontSize= '40px';
    this.elementRef.nativeElement.style.backgroundColor= '#41e0ff';
  }


  @HostListener('mouseout')
  onMouseOut(){
    this.elementRef.nativeElement.style.fontSize= '17px';
    this.elementRef.nativeElement.style.backgroundColor= 'transparent';


  }

  //TODO FIX

}
