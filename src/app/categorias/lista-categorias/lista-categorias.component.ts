import { CategoriasService } from '../categorias.service';
import { Categoria } from './../../core/model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-categorias',
  templateUrl: './lista-categorias.component.html',
  styleUrls: ['./lista-categorias.component.scss']
})
export class ListaCategoriasComponent implements OnInit {

  categorias: Categoria[] = []

  displayedColumns = ['id', 'nomecategoria'];

  constructor(private categoriasService: CategoriasService) { }

  ngOnInit(): void {
    this.categorias = this.categoriasService.list();
  }

}
