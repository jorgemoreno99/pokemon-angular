import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyhover]'
})
export class MyhoverDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}


  @HostListener('mouseover')
  onMouseOver(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'transform', 'scale(1.2)');
    this.renderer.setStyle(this.elementRef.nativeElement, 'transition', 'transform 0.2s ease-in-out');
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', '#e0f7fa');
    this.renderer.setStyle(this.elementRef.nativeElement, 'boxShadow', '0px 4px 8px rgba(0, 0, 0, 0.2)');

  }


  @HostListener('mouseout')
  onMouseOut(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'transform', 'scale(1)');
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'transparent');
    this.renderer.setStyle(this.elementRef.nativeElement, 'boxShadow', 'none');
  }

}
