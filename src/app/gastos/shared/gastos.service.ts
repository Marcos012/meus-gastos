import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class GastosService {
  gastosList: AngularFireList<any>;
  constructor(private firebasedb: AngularFireDatabase) { }

  getGastosList() {
    this.gastosList = this.firebasedb.list('gastos');
    return this.gastosList;
  }

  addGasto(item: string, valor: number) {
    this.gastosList.push({
      item: item,
      valor: valor
    });
  }

  checkOrUnCheckGasto($key: string, flag: boolean) {
    this.gastosList.update($key, { isChecked: flag });
  }

  removeGasto($key: string) {
    this.gastosList.remove($key);
  }

}
