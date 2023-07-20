import { Component, OnInit } from '@angular/core';
import { Curso } from '../model/curso';
import { CursosService } from '../services/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos: Curso[] = [];
  displayedColumns = ['nome', 'categoria'];

  constructor(private cursoService: CursosService) {

  }

  ngOnInit(): void {
    this.cursos = this.cursoService.list();
  }

}
