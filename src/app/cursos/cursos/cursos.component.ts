import { Component, OnInit } from '@angular/core';
import { Curso } from '../model/curso';
import { CursosService } from '../services/cursos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos: Observable<Curso[]>;
  displayedColumns = ['nome', 'categoria'];

  constructor(private cursoService: CursosService) {

    this.cursos = this.cursoService.list();

  }

  ngOnInit(): void {

  }

}
