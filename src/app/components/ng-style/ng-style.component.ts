import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p style="font-size: 10px;" [style.fontSize.px]="size">
      Soy una texto q crece y diminuye
    </p>
    <button class="btn btn-primary me-1" (click)="size = size + 5"><i class="fas fa-plus"></i></button>
    <button class="btn btn-primary" (click)="size = size - 5"><i class="fas fa-minus"></i></button>
  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {
  size: number = 34;

  constructor() { }

  ngOnInit(): void {
  }

}
