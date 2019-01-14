import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { query } from '@angular/core/src/animation/dsl';

@Injectable()
export class GastosService {
  gastosList: AngularFireList<any>;
  constructor(private firebasedb: AngularFireDatabase) { }

  getGastosList() {
    this.gastosList = this.firebasedb.list('gastos');
    return this.gastosList;
  }

  addGasto(item: string, valor: number, data: Date) {
    this.gastosList.push({
      item: item,
      valor: valor,
      data: data
    });
  }

  removeGasto($key: string) {
    this.gastosList.remove($key);
  }


  clearList($key: string) {
    for (let i = 0; i < 200; i++) {
      this.gastosList.remove($key);
    }
  }

}
