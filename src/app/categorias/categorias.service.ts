import { Injectable } from '@angular/core';
import { Categoria } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor() { }

  list(): Categoria[] {
    return [
      { id: 1, nomecategoria: 'Carnes' },
      { id: 2, nomecategoria: 'Bebidas' },
      { id: 3, nomecategoria: 'Salgados' },
      { id: 4, nomecategoria: 'Doces' }
    ]
  }
}
