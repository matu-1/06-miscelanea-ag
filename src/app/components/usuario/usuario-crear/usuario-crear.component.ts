import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-crear',
  templateUrl: './usuario-crear.component.html',
  styles: [
  ]
})
export class UsuarioCrearComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.parent?.params.subscribe((params) => {
      console.log('params usuario crear', params);
    });
  }

  ngOnInit(): void {
  }

}
