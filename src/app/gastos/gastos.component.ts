import { Component, OnInit } from '@angular/core';
import { GastosService } from './shared/gastos.service';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  providers: [GastosService]
})
export class GastosComponent implements OnInit {
  gastosListArray: any[];
  constructor(private gastosService: GastosService) { }

  ngOnInit() {
    this.gastosService.getGastosList().snapshotChanges()
      .subscribe(item => {
        this.gastosListArray = [];
        item.forEach(element => {
          const x = element.payload.toJSON();
          x['$key'] = element.key;
          this.gastosListArray.push(x);
        });
      });
  }

  onAdd(item, valor, data) {
    this.gastosService.addGasto(item.value, valor.value, data.value);
    item.value = null;
    valor.value = null;
    data.value = null;
  }

  onDelete($key: string) {
    this.gastosService.removeGasto($key);
  }

  onClear($key: string) {
    this.gastosService.clearList($key);
  }

}
