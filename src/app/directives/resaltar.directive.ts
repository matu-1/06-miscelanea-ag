import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltar]'
})
export class ResaltarDirective {

  @Input('appResaltar')
  color?: string;

  constructor(private ref: ElementRef<HTMLElement>) { 
    ref.nativeElement.style.transition = 'all 0.3s'
  }

  @HostListener('mouseenter')
  mauseEnter(){
    this.resaltar(this.color || 'crimson');
  }

  @HostListener('mouseleave')
  mauseLeave(){
    this.resaltar('transparent');
  }

  resaltar(color: string){
    this.ref.nativeElement.style.backgroundColor = color;
  }

}
