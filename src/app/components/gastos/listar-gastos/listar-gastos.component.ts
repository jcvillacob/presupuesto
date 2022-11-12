import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-listar-gastos',
  templateUrl: './listar-gastos.component.html',
  styleUrls: ['./listar-gastos.component.css']
})
export class ListarGastosComponent implements OnInit {

  constructor(private _presupuestoService: PresupuestoService) {
    this._presupuestoService.getGastos().subscribe(data => {
      console.log(data);
    })
   }

  ngOnInit(): void {
  }

}
