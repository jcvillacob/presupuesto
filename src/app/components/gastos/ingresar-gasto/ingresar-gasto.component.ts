import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css']
})
export class IngresarGastoComponent implements OnInit {
  tipoGasto = "";
  cantidadGasto = 0;
  cantidadIncorrecta = false;
  textoIncorrecto = " ";

  constructor(private _presupuestoService: PresupuestoService) { }

  ngOnInit(): void {
  }

  comprobar(){
    if (this.cantidadGasto > this._presupuestoService.restante) {
      this.cantidadIncorrecta = true;
      this.textoIncorrecto = "El gasto ingresado es mayor al presupuesto restante";
      return;
    }

    if (this.cantidadGasto > 0 && this.tipoGasto != ""){
      
      const Gasto = {
        nombre: this.tipoGasto,
        cantidad: this.cantidadGasto
      }
      this._presupuestoService.agregarGasto(Gasto);
      this.cantidadIncorrecta = false;
      this.tipoGasto = "";
      this.cantidadGasto = 0;
    }else {
      this.cantidadIncorrecta = true;
      this.textoIncorrecto = "Nombre de gasto o cantidad incorrecta";
    }
  }

}
