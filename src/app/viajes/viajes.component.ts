import { Component } from '@angular/core';

@Component({
  selector: 'viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.css']
})
export class ViajesComponent {
  anno = '2018';
  listado_viajes = 'Paris, Amsterdam, Pirineos, Formentera';
}