import { Injectable } from '@angular/core';
import { Produto } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor() { }

  list(): Produto[] {
    return [
      { id: 1, nomeproduto: 'Picanha' },
      { id: 2, nomeproduto: 'Coca' },
      { id: 3, nomeproduto: 'Hamburger' },
      { id: 4, nomeproduto: 'Churros' }
    ]
  }
}
