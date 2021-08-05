import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styles: [
  ]
})
export class ClassesComponent implements OnInit {
  alert: string = 'alert-primary';
  textInfo: boolean = true;
  isLoading: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  execute(){
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }

}
