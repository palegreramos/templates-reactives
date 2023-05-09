import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Wine, WineQuantity } from '../../model/interfaces';

@Component({
  selector: 'app-wine-item',
  template: `<div [ngClass]="{ enventa: wine.isOnSale }">
    <figure>
      <img [src]="wine.imageUrl" alt="Imagen de vino {{ wine.name }}" />
      <figcaption>{{ wine.name }}</figcaption>
    </figure>
    <p>{{ wine.price }} &euro;</p>
    <button (click)="dec()" *ngIf="wine.quantityInCart > 0">-</button
    ><span>{{ wine.quantityInCart }}</span> <button (click)="inc()">+</button>
  </div>`,
  styles: [
    `
      div {
        border: 1px solid black;
        border-radius: 1rem;
        width: 20vw;
        text-align: center;
      }
    `,
    `
      img {
        max-width: 90%;
      }
    `,
    `
      .enventa {
        background-color: blueviolet;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WineItemComponent implements OnInit {
  @Input() wine: Wine = {} as Wine;
  @Output() WineQuantityChange: EventEmitter<WineQuantity>;
  cantidad: WineQuantity = {} as WineQuantity;

  constructor() {
    this.WineQuantityChange = new EventEmitter<WineQuantity>();
  }
  ngOnInit() { }
  dec(): void {
    this.cantidad.id = this.wine.id;
    this.cantidad.quantity = this.wine.quantityInCart;
    this.cantidad.quantity--;
    this.WineQuantityChange.emit(this.cantidad);
  }
  inc(): void {
    this.cantidad.id = this.wine.id;
    this.cantidad.quantity = this.wine.quantityInCart;
    this.cantidad.quantity++;
    this.WineQuantityChange.emit(this.cantidad);
  }
}
